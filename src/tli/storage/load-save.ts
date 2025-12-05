import type {
  SaveData,
  Gear as SaveDataGear,
  GearPage as SaveDataGearPage,
} from "@/src/app/lib/save-data";
import type { Affix, EquippedGear, Gear, GearPage, Loadout } from "../core";
import type { Mod } from "../mod";
import { parseMod } from "../mod_parser";

type GearSlot = keyof SaveDataGearPage;

const getSrc = (gearSlot: GearSlot): string => {
  return `Gear#${gearSlot}`;
};

const convertAffix = (affixText: string, src: string | undefined): Affix => {
  const affixLines = affixText.split(/\n/);
  const mods: Mod[] = [];
  for (const affixLine of affixLines) {
    const mod = parseMod(affixLine);
    if (mod !== undefined) {
      mods.push({ ...mod, src });
    }
  }

  return {
    text: affixText,
    mods: mods.length > 0 ? mods : undefined,
    src,
  };
};

const convertGear = (gear: SaveDataGear, src: string | undefined): Gear => {
  const allAffixStrings: string[] = [];

  if (gear.baseStats) {
    allAffixStrings.push(gear.baseStats);
  }

  if (gear.legendary_affixes) {
    allAffixStrings.push(...gear.legendary_affixes);
  } else {
    if (gear.base_affixes) allAffixStrings.push(...gear.base_affixes);
    if (gear.blend_affix) allAffixStrings.push(gear.blend_affix);
    if (gear.prefixes) allAffixStrings.push(...gear.prefixes);
    if (gear.suffixes) allAffixStrings.push(...gear.suffixes);
  }

  const affixes: Affix[] = allAffixStrings.map((affixText) =>
    convertAffix(affixText, src),
  );

  return {
    equipmentType: gear.equipmentType,
    affixes,
  };
};

const convertGearPage = (
  saveDataGearPage: SaveDataGearPage,
  gearInventory: SaveDataGear[],
): GearPage => {
  const slots: GearSlot[] = [
    "helmet",
    "chest",
    "neck",
    "gloves",
    "belt",
    "boots",
    "leftRing",
    "rightRing",
    "mainHand",
    "offHand",
  ];

  const equippedGear: EquippedGear = {};

  for (const slot of slots) {
    const gear = saveDataGearPage[slot];
    if (gear) {
      const src = getSrc(slot);
      equippedGear[slot] = convertGear(gear, src);
    }
  }

  return {
    equippedGear,
    inventory: gearInventory.map((gear) => {
      return convertGear(gear, undefined);
    }),
  };
};

export const loadSave = (saveData: SaveData): Loadout => {
  return {
    gearPage: convertGearPage(saveData.equipmentPage, saveData.itemsList),
    talentPage: { affixes: [] },
    divinityPage: { slates: [] },
    customConfiguration: [],
  };
};
