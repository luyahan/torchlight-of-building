/**
 * Migration script to convert old build codes (with HeroMemory quality+effect)
 * to new format (with final text strings).
 *
 * Usage: pnpm exec tsx src/scripts/migrate-hero-memory-v2.ts <old-build-code>
 */

import { deflateSync, inflateSync, strFromU8, strToU8 } from "fflate";

// Old format types (before migration)
interface OldHeroMemoryAffix {
  effect: string;
  quality: number;
}

interface OldHeroMemory {
  id: string;
  memoryType: string;
  baseStat: string;
  fixedAffixes: OldHeroMemoryAffix[];
  randomAffixes: OldHeroMemoryAffix[];
}

interface OldHeroPage {
  selectedHero?: string;
  traits: Record<string, unknown>;
  memorySlots: {
    slot45?: OldHeroMemory;
    slot60?: OldHeroMemory;
    slot75?: OldHeroMemory;
  };
  memoryInventory: OldHeroMemory[];
}

interface OldSaveData {
  equipmentPage: unknown;
  talentPage: unknown;
  skillPage: unknown;
  heroPage: OldHeroPage;
  pactspiritPage: unknown;
  divinityPage: unknown;
  configurationPage?: unknown;
  calculationsPage?: unknown;
}

interface VersionedLoadout {
  v: number;
  d: OldSaveData;
}

// New format types (after migration)
interface NewHeroMemory {
  id: string;
  memoryType: string;
  baseStat: string;
  fixedAffixes: string[];
  randomAffixes: string[];
}

interface NewHeroPage {
  selectedHero?: string;
  traits: Record<string, unknown>;
  memorySlots: {
    slot45?: NewHeroMemory;
    slot60?: NewHeroMemory;
    slot75?: NewHeroMemory;
  };
  memoryInventory: NewHeroMemory[];
}

// Crafting function (copied from hero-utils.ts)
const craftHeroMemoryAffix = (effectText: string, quality: number): string => {
  const rangePattern = /\((-?\d+)[–-](-?\d+)\)/g;

  return effectText.replace(rangePattern, (_match, minStr, maxStr) => {
    const min = parseInt(minStr, 10);
    const max = parseInt(maxStr, 10);
    const value = Math.round(min + (max - min) * (quality / 100));
    return value.toString();
  });
};

// Base64URL encoding/decoding (copied from build-code.ts)
const toBase64Url = (data: Uint8Array): string => {
  let binary = "";
  for (let i = 0; i < data.length; i++) {
    binary += String.fromCharCode(data[i]);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
};

const fromBase64Url = (str: string): Uint8Array => {
  const base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64 + "=".repeat((4 - (base64.length % 4)) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
};

const migrateHeroMemory = (old: OldHeroMemory): NewHeroMemory => {
  return {
    id: old.id,
    memoryType: old.memoryType,
    baseStat: old.baseStat,
    fixedAffixes: old.fixedAffixes.map((affix) =>
      craftHeroMemoryAffix(affix.effect, affix.quality),
    ),
    randomAffixes: old.randomAffixes.map((affix) =>
      craftHeroMemoryAffix(affix.effect, affix.quality),
    ),
  };
};

const migrateHeroPage = (old: OldHeroPage): NewHeroPage => {
  return {
    selectedHero: old.selectedHero,
    traits: old.traits,
    memorySlots: {
      slot45: old.memorySlots.slot45
        ? migrateHeroMemory(old.memorySlots.slot45)
        : undefined,
      slot60: old.memorySlots.slot60
        ? migrateHeroMemory(old.memorySlots.slot60)
        : undefined,
      slot75: old.memorySlots.slot75
        ? migrateHeroMemory(old.memorySlots.slot75)
        : undefined,
    },
    memoryInventory: old.memoryInventory.map(migrateHeroMemory),
  };
};

const migrateBuildCode = (oldCode: string): string => {
  // Decode
  const compressed = fromBase64Url(oldCode);
  const json = strFromU8(inflateSync(compressed));
  if (!json) {
    throw new Error("Failed to decompress build code");
  }

  const parsed = JSON.parse(json) as VersionedLoadout;

  // Migrate hero page
  const newHeroPage = migrateHeroPage(parsed.d.heroPage);

  // Create new save data with migrated hero page
  const newSaveData = {
    ...parsed.d,
    heroPage: newHeroPage,
  };

  // Encode with same version
  const versioned = { v: parsed.v, d: newSaveData };
  const newJson = JSON.stringify(versioned);
  const newCompressed = deflateSync(strToU8(newJson));
  return toBase64Url(newCompressed);
};

// Main
const oldCode = process.argv[2];

if (!oldCode) {
  console.error(
    "Usage: pnpm exec tsx src/scripts/migrate-hero-memory-v2.ts <old-build-code>",
  );
  process.exit(1);
}

try {
  const newCode = migrateBuildCode(oldCode);
  console.log(newCode);
} catch (error) {
  console.error("Failed to migrate build code:", error);
  process.exit(1);
}
