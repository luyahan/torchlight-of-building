/**
 * Example usage of the gear affix system
 *
 * Run with: pnpm exec tsx src/tli/gear_affix_data/example.ts
 */

import { BOOTS_DEX_BASE_AFFIX_AFFIXES, RING_PREFIX_AFFIXES } from "./index";
import { ALL_GEAR_AFFIXES } from "./all_affixes";
import { craft, craftLines } from "./craft";

console.log("=== Gear Affix System Demo ===\n");

// Example 1: Simple crafting
console.log("1. Simple Crafting:");
const speedAffix = BOOTS_DEX_BASE_AFFIX_AFFIXES.find((a) =>
  a.template.includes("Movement Speed"),
);

if (speedAffix) {
  console.log(`  Template: ${speedAffix.template}`);
  console.log(
    `  Range: ${speedAffix.valueRanges[0].min}-${speedAffix.valueRanges[0].max}%`,
  );
  console.log(`  0% roll:   ${craft(speedAffix, 0)}`);
  console.log(`  50% roll:  ${craft(speedAffix, 50)}`);
  console.log(`  100% roll: ${craft(speedAffix, 100)}`);
}

// Example 2: Multi-effect affix
console.log("\n2. Multi-Effect Affix:");
const multiEffectAffix = BOOTS_DEX_BASE_AFFIX_AFFIXES.find((a) =>
  a.template.includes("\n"),
);

if (multiEffectAffix) {
  console.log(`  Raw: ${multiEffectAffix.rawAffix}`);
  console.log(`  Template: ${JSON.stringify(multiEffectAffix.template)}`);
  console.log(
    `  Crafted (100%):\n    ${craft(multiEffectAffix, 100).replace(/\n/g, "\n    ")}`,
  );
  console.log(`  As lines:`, craftLines(multiEffectAffix, 100));
}

// Example 3: Searching all affixes
console.log("\n3. Searching All Affixes:");
const cooldownAffixes = ALL_GEAR_AFFIXES.filter(
  (a) =>
    a.template.toLowerCase().includes("cooldown") && a.valueRanges.length > 0,
).slice(0, 3);

console.log(
  `  Found ${cooldownAffixes.length} cooldown affixes (showing first 3):`,
);
cooldownAffixes.forEach((affix, i) => {
  console.log(`  ${i + 1}. [${affix.equipmentType}] ${craft(affix, 100)}`);
});

// Example 4: Statistics
console.log("\n4. Statistics:");
console.log(`  Total affixes: ${ALL_GEAR_AFFIXES.length}`);
console.log(
  `  Equipment types: ${new Set(ALL_GEAR_AFFIXES.map((a) => a.equipmentType)).size}`,
);
console.log(
  `  Affix types: ${new Set(ALL_GEAR_AFFIXES.map((a) => a.affixType)).size}`,
);

const withRanges = ALL_GEAR_AFFIXES.filter(
  (a) => a.valueRanges.length > 0,
).length;
const multiEffect = ALL_GEAR_AFFIXES.filter((a) =>
  a.template.includes("\n"),
).length;
console.log(`  Affixes with value ranges: ${withRanges}`);
console.log(`  Multi-effect affixes: ${multiEffect}`);

// Example 5: Ring affixes
console.log("\n5. Sample Ring Prefix Affixes:");
RING_PREFIX_AFFIXES.slice(0, 5).forEach((affix, i) => {
  const crafted = craft(affix, 100);
  console.log(`  ${i + 1}. ${crafted || "(empty)"}`);
});

console.log("\n=== Demo Complete ===");
