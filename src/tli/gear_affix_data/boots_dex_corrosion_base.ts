import { BaseGearAffix } from "./types";

export const BOOTS_DEX_CORROSION_BASE_AFFIXES = [
  {
    "equipmentTypeKey": "boots_dex",
    "equipmentSlot": "Boots",
    "equipmentType": "Boots (DEX)",
    "affixType": "Corrosion Base",
    "craftingPool": "",
    "tier": "0",
    "template": "+{0}% Cooldown Recovery Speed",
    "valueRanges": [
      {
        "min": 15,
        "max": 20
      }
    ],
    "rawAffix": "`+(15-20)`% Cooldown Recovery Speed"
  },
  {
    "equipmentTypeKey": "boots_dex",
    "equipmentSlot": "Boots",
    "equipmentType": "Boots (DEX)",
    "affixType": "Corrosion Base",
    "craftingPool": "",
    "tier": "0",
    "template": "+{0}% Max Energy Shield",
    "valueRanges": [
      {
        "min": 15,
        "max": 20
      }
    ],
    "rawAffix": "`+(15-20)`% Max Energy Shield"
  },
  {
    "equipmentTypeKey": "boots_dex",
    "equipmentSlot": "Boots",
    "equipmentType": "Boots (DEX)",
    "affixType": "Corrosion Base",
    "craftingPool": "",
    "tier": "0",
    "template": "+{0}% Max Life",
    "valueRanges": [
      {
        "min": 15,
        "max": 20
      }
    ],
    "rawAffix": "`+(15-20)`% Max Life"
  },
  {
    "equipmentTypeKey": "boots_dex",
    "equipmentSlot": "Boots",
    "equipmentType": "Boots (DEX)",
    "affixType": "Corrosion Base",
    "craftingPool": "",
    "tier": "0",
    "template": "+{0}% Movement Speed",
    "valueRanges": [
      {
        "min": 15,
        "max": 20
      }
    ],
    "rawAffix": "`+(15-20)`% Movement Speed"
  },
  {
    "equipmentTypeKey": "boots_dex",
    "equipmentSlot": "Boots",
    "equipmentType": "Boots (DEX)",
    "affixType": "Corrosion Base",
    "craftingPool": "",
    "tier": "0",
    "template": "+{0}% Cooldown Recovery Speed for Mobility Skills",
    "valueRanges": [
      {
        "min": 30,
        "max": 40
      }
    ],
    "rawAffix": "`+(30-40)`% Cooldown Recovery Speed for Mobility Skills"
  },
  {
    "equipmentTypeKey": "boots_dex",
    "equipmentSlot": "Boots",
    "equipmentType": "Boots (DEX)",
    "affixType": "Corrosion Base",
    "craftingPool": "",
    "tier": "0",
    "template": "+{0}% gear Evasion",
    "valueRanges": [
      {
        "min": 30,
        "max": 50
      }
    ],
    "rawAffix": "`+(30-50)`% gear Evasion"
  },
  {
    "equipmentTypeKey": "boots_dex",
    "equipmentSlot": "Boots",
    "equipmentType": "Boots (DEX)",
    "affixType": "Corrosion Base",
    "craftingPool": "",
    "tier": "0",
    "template": "+{0}% damage",
    "valueRanges": [
      {
        "min": 50,
        "max": 70
      }
    ],
    "rawAffix": "`+(50-70)`% damage"
  },
  {
    "equipmentTypeKey": "boots_dex",
    "equipmentSlot": "Boots",
    "equipmentType": "Boots (DEX)",
    "affixType": "Corrosion Base",
    "craftingPool": "",
    "tier": "0",
    "template": "+1Mobility Skill Level",
    "valueRanges": [],
    "rawAffix": "`+1`Mobility Skill Level"
  },
  {
    "equipmentTypeKey": "boots_dex",
    "equipmentSlot": "Boots",
    "equipmentType": "Boots (DEX)",
    "affixType": "Corrosion Base",
    "craftingPool": "",
    "tier": "0",
    "template": "Has Hasten",
    "valueRanges": [],
    "rawAffix": "Has Hasten"
  },
  {
    "equipmentTypeKey": "boots_dex",
    "equipmentSlot": "Boots",
    "equipmentType": "Boots (DEX)",
    "affixType": "Corrosion Base",
    "craftingPool": "",
    "tier": "0",
    "template": "Max Agility Blessing Stacks +1",
    "valueRanges": [],
    "rawAffix": "Max Agility Blessing Stacks `+1`"
  },
  {
    "equipmentTypeKey": "boots_dex",
    "equipmentSlot": "Boots",
    "equipmentType": "Boots (DEX)",
    "affixType": "Corrosion Base",
    "craftingPool": "",
    "tier": "0",
    "template": "Regenerates 1% Mana per second while moving",
    "valueRanges": [],
    "rawAffix": "Regenerates `1`% Mana per second while moving"
  },
  {
    "equipmentTypeKey": "boots_dex",
    "equipmentSlot": "Boots",
    "equipmentType": "Boots (DEX)",
    "affixType": "Corrosion Base",
    "craftingPool": "",
    "tier": "0",
    "template": "Regenerates 1% of Life per second while moving",
    "valueRanges": [],
    "rawAffix": "Regenerates `1`% of Life per second while moving"
  },
  {
    "equipmentTypeKey": "boots_dex",
    "equipmentSlot": "Boots",
    "equipmentType": "Boots (DEX)",
    "affixType": "Corrosion Base",
    "craftingPool": "",
    "tier": "0",
    "template": "Triggers Lv. 20Stoneskin when moving. Interval: 2s",
    "valueRanges": [],
    "rawAffix": "Triggers Lv. `20`Stoneskin when moving. Interval: `2`s"
  }
] as const satisfies readonly BaseGearAffix[];

export type BootsDexCorrosionBaseAffix = (typeof BOOTS_DEX_CORROSION_BASE_AFFIXES)[number];
