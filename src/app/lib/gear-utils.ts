import type { Gear } from "./save-data";

export const getAllAffixes = (gear: Gear): string[] => {
  if (gear.legendary_affixes) {
    return gear.legendary_affixes;
  }

  const affixes: string[] = [];
  if (gear.base_affixes) affixes.push(...gear.base_affixes);
  if (gear.blend_affix) affixes.push(gear.blend_affix);
  if (gear.prefixes) affixes.push(...gear.prefixes);
  if (gear.suffixes) affixes.push(...gear.suffixes);
  return affixes;
};
