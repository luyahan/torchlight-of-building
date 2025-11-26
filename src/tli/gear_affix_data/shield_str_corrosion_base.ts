import { BaseGearAffix } from "./types";

export const SHIELD_STR_CORROSION_BASE_AFFIXES = [
  {
    equipmentTypeKey: "shield_str",
    equipmentSlot: "Shield",
    equipmentType: "Shield (STR)",
    affixType: "Corrosion Base",
    craftingPool: "",
    tier: "0",
    template: "+{0}% Max Cold Resistance",
    valueRanges: [
      {
        min: 1,
        max: 2,
      },
    ],
    rawAffix: "`+(1-2)`% Max Cold Resistance",
  },
  {
    equipmentTypeKey: "shield_str",
    equipmentSlot: "Shield",
    equipmentType: "Shield (STR)",
    affixType: "Corrosion Base",
    craftingPool: "",
    tier: "0",
    template: "+{0}% Max Fire Resistance",
    valueRanges: [
      {
        min: 1,
        max: 2,
      },
    ],
    rawAffix: "`+(1-2)`% Max Fire Resistance",
  },
  {
    equipmentTypeKey: "shield_str",
    equipmentSlot: "Shield",
    equipmentType: "Shield (STR)",
    affixType: "Corrosion Base",
    craftingPool: "",
    tier: "0",
    template: "+{0}% Max Lightning Resistance",
    valueRanges: [
      {
        min: 1,
        max: 2,
      },
    ],
    rawAffix: "`+(1-2)`% Max Lightning Resistance",
  },
  {
    equipmentTypeKey: "shield_str",
    equipmentSlot: "Shield",
    equipmentType: "Shield (STR)",
    affixType: "Corrosion Base",
    craftingPool: "",
    tier: "0",
    template: "+{0}% Spell Block Chance",
    valueRanges: [
      {
        min: 12,
        max: 15,
      },
    ],
    rawAffix: "`+(12-15)`% Spell Block Chance",
  },
  {
    equipmentTypeKey: "shield_str",
    equipmentSlot: "Shield",
    equipmentType: "Shield (STR)",
    affixType: "Corrosion Base",
    craftingPool: "",
    tier: "0",
    template: "+{0}% Max Energy Shield",
    valueRanges: [
      {
        min: 3,
        max: 5,
      },
    ],
    rawAffix: "`+(3-5)`% Max Energy Shield",
  },
  {
    equipmentTypeKey: "shield_str",
    equipmentSlot: "Shield",
    equipmentType: "Shield (STR)",
    affixType: "Corrosion Base",
    craftingPool: "",
    tier: "0",
    template: "+{0}% Max Life",
    valueRanges: [
      {
        min: 3,
        max: 5,
      },
    ],
    rawAffix: "`+(3-5)`% Max Life",
  },
  {
    equipmentTypeKey: "shield_str",
    equipmentSlot: "Shield",
    equipmentType: "Shield (STR)",
    affixType: "Corrosion Base",
    craftingPool: "",
    tier: "0",
    template: "+{0}% Block Ratio",
    valueRanges: [
      {
        min: 5,
        max: 8,
      },
    ],
    rawAffix: "`+(5-8)`% Block Ratio",
  },
  {
    equipmentTypeKey: "shield_str",
    equipmentSlot: "Shield",
    equipmentType: "Shield (STR)",
    affixType: "Corrosion Base",
    craftingPool: "",
    tier: "0",
    template: "+{0}% Attack Block Chance",
    valueRanges: [
      {
        min: 8,
        max: 12,
      },
    ],
    rawAffix: "`+(8-12)`% Attack Block Chance",
  },
  {
    equipmentTypeKey: "shield_str",
    equipmentSlot: "Shield",
    equipmentType: "Shield (STR)",
    affixType: "Corrosion Base",
    craftingPool: "",
    tier: "0",
    template: "Has a {0}% chance to avoid Blocked damage",
    valueRanges: [
      {
        min: 5,
        max: 10,
      },
    ],
    rawAffix: "Has a `(5-10)`% chance to avoid Blocked damage",
  },
] as const satisfies readonly BaseGearAffix[];

export type ShieldStrCorrosionBaseAffix =
  (typeof SHIELD_STR_CORROSION_BASE_AFFIXES)[number];
