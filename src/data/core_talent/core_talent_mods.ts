import type { Affix } from "../../tli/core";
import type { CoreTalentName } from "./types";

export const CoreTalentMods: Record<CoreTalentName, Affix> = {
  Elimination: {
    affixLines: [
      { text: "Attacks eliminate enemies under 18% Life on hit", mods: [] },
    ],
  },
  Momentum: {
    affixLines: [
      {
        text: "+30% additional Attack Damage for the next Main Skill every 0.5 s. Refreshes the interval on defeat.",
        mods: [],
      },
    ],
  },
  Tenacity: {
    affixLines: [
      {
        text: "+100% chance to gain 1 stack(s) of Tenacity Blessing when hitting an enemy",
        mods: [],
      },
      { text: "Max Tenacity Blessing Stacks +1", mods: [] },
    ],
  },
  "Great Strength": {
    affixLines: [
      {
        text: "-10% Attack Speed",
        mods: [{ type: "AspdPct", value: 0.1, addn: false }],
      },
      {
        text: "+30% additional Attack Damage",
        mods: [{ type: "DmgPct", value: 0.3, modType: "attack", addn: true }],
      },
      { text: "+30% additional Ailment Damage dealt by attacks", mods: [] },
    ],
  },
  "Hidden Mastery": {
    affixLines: [
      { text: "Unable to evade", mods: [] },
      {
        text: "Gains Attack Aggression when casting an Attack Skill",
        mods: [],
      },
      {
        text: "+15% Attack Speed and +15% additional Attack Damage when having Attack Aggression",
        mods: [],
      },
    ],
  },
  Judgment: {
    affixLines: [
      {
        text: "+100% chance for Attacks to inflict Paralysis on hit",
        mods: [],
      },
      {
        text: "+25% additional Critical Strike Damage against Paralyzed enemies",
        mods: [],
      },
    ],
  },
  Static: {
    affixLines: [
      {
        text: "+12% additional damage every 0.25s while standing still, up to +48% additional damage",
        mods: [],
      },
      { text: "Removes the effect when no longer standing still", mods: [] },
    ],
  },
  Formless: {
    affixLines: [
      { text: "Doubles Max Warcry Skill Effects", mods: [] },
      { text: "+66% Warcry Skill Area", mods: [] },
    ],
  },
  Resolve: {
    affixLines: [
      {
        text: "+4% additional Armor per stack of Tenacity Blessing owned",
        mods: [],
      },
    ],
  },
  "Ember Armor": {
    affixLines: [
      { text: "+25% Armor Effective Rate for Non-Physical Damage", mods: [] },
    ],
  },
  Sweep: {
    affixLines: [
      {
        text: "+25% additional Attack Damage when holding a Two-Handed Weapon",
        mods: [],
      },
      {
        text: "+25% Attack Skill Area when holding a Two-Handed Weapon",
        mods: [],
      },
    ],
  },
  "Focused Strike": {
    affixLines: [
      {
        text: "Area Skills deal up to +32% additional damage to enemies at the center",
        mods: [],
      },
      {
        text: "Minions' Area Skills deal up to 32% additional damage to enemies at the center",
        mods: [],
      },
    ],
  },
  Sacrifice: {
    affixLines: [
      {
        text: "Changes the base effect of Tenacity Blessing to: +8% additional damage",
        mods: [],
      },
    ],
  },
  "Well Matched": {
    affixLines: [
      {
        text: "Deals up to +25% additional Attack Damage to enemies in proximity, and this damage reduces as the distance from the enemy grows",
        mods: [],
      },
      {
        text: "-15% additional damage taken from enemies in proximity, and this damage reduces as the distance from the enemy grows",
        mods: [],
      },
    ],
  },
  Starfire: {
    affixLines: [
      { text: "+1 Ignite limit", mods: [] },
      { text: "+30% Ignite Duration", mods: [] },
    ],
  },
  Fueling: {
    affixLines: [
      {
        text: "The Fire Resistance of enemies within 10m is fixed at 0",
        mods: [],
      },
    ],
  },
  Rock: {
    affixLines: [
      {
        text: "Converts 3% of Physical Damage taken to Fire Damage for every stack of Tenacity Blessing you have",
        mods: [],
      },
    ],
  },
  "True Flame": {
    affixLines: [
      {
        text: "When an enemy is Ignited, 60% of the additional bonus to Damage Over Time taken from Affliction is also applied to your Fire Hit Damage",
        mods: [],
      },
    ],
  },
  Arcane: {
    affixLines: [
      { text: "Converts 100% of Mana Cost to Life Cost", mods: [] },
      { text: "+25% additional Max Life", mods: [] },
    ],
  },
  "No Lose Ends": {
    affixLines: [
      { text: "+50% additional Attack Damage at Low Life", mods: [] },
      { text: "Your Max Energy Shield is fixed at 0", mods: [] },
    ],
  },
  "Life Path": {
    affixLines: [
      { text: "Double Life Regain", mods: [] },
      {
        text: "Life Regain is only effective when Life is lower than 50%",
        mods: [],
      },
    ],
  },
  "Survival Will": {
    affixLines: [
      { text: "+30% additional Attack Damage when not at Low Life", mods: [] },
      { text: "Restores 40% Max Life at Low Life. Interval: 10 s", mods: [] },
    ],
  },
  Perception: {
    affixLines: [
      {
        text: "+100% chance to gain 1 stacks of Agility Blessing on hit",
        mods: [],
      },
      { text: "Max Agility Blessing Stacks +1", mods: [] },
    ],
  },
  "Third time's a charm": {
    affixLines: [
      {
        text: "+45% Attack and Cast Speed after using the Main Skill 3 consecutive times. Lasts for 2 s",
        mods: [],
      },
    ],
  },
  Impermanence: {
    affixLines: [
      {
        text: "-90% additional Min Physical Damage, and +80% additional Max Physical Damage",
        mods: [],
      },
      { text: "-40% additional min damage", mods: [] },
      { text: "+40% additional max damage", mods: [] },
    ],
  },
  Rushed: {
    affixLines: [
      {
        text: "+30% additional damage if you have recently moved more than 5 m",
        mods: [],
      },
    ],
  },
  "Three Birds with One Stone": {
    affixLines: [
      { text: "Projectile Quantity +2", mods: [] },
      { text: "Parabolic Projectile Splits quantity +2", mods: [] },
      { text: "+10% additional Projectile Damage", mods: [] },
    ],
  },
  "Steady Accumulation": {
    affixLines: [
      { text: "+15% Combo Finisher Amplification", mods: [] },
      { text: "+1 Combo Points gained from Combo Starters", mods: [] },
    ],
  },
  Gale: {
    affixLines: [
      {
        text: "60% of the Projectile Speed bonus is also applied to the additional bonus for Projectile Damage",
        mods: [],
      },
    ],
  },
  Euphoria: {
    affixLines: [
      {
        text: "+4% additional Evasion for every stack of Agility Blessing",
        mods: [],
      },
    ],
  },
  "Close Range Fire": {
    affixLines: [
      {
        text: "Projectiles deal up to +35% additional damage to enemies in Proximity, and this damage reduces with the distance traveled by the Projectiles",
        mods: [],
      },
    ],
  },
  "Master Escapist": {
    affixLines: [
      { text: "+1 Max Deflection stacks", mods: [] },
      { text: "Gains 1 stacks of Deflection on Evasion", mods: [] },
    ],
  },
  "Waiting Attack": {
    affixLines: [
      {
        text: "Consumes all Agility Blessing every 8s. For each stack consumed, +5% additional damage in the next 8s",
        mods: [],
      },
    ],
  },
  "Joined Force": {
    affixLines: [
      {
        text: "Off-Hand Weapons do not participate in Attacks while Dual Wielding",
        mods: [],
      },
      {
        text: "Adds 60% of the damage of the Off-Hand Weapon to the final damage of the Main-Hand Weapon",
        mods: [],
      },
    ],
  },
  "Quick Advancement": {
    affixLines: [
      { text: "Multistrikes deal 55% increasing damage", mods: [] },
      { text: "Minions' Multistrikes deal 55% increasing damage", mods: [] },
    ],
  },
  "Preemptive Strike": {
    affixLines: [
      { text: "+1 initial Multistrike Count", mods: [] },
      { text: "-20% Attack Speed when performing Multistrikes", mods: [] },
    ],
  },
  Cultivation: {
    affixLines: [
      {
        text: "+4% Cast Speed for each skill recently used, stacking up to 15 times",
        mods: [],
      },
    ],
  },
  Acquaintance: {
    affixLines: [
      {
        text: "+30% chance to trigger the Main Spell Skill 1 additional time when using it",
        mods: [],
      },
    ],
  },
  Rebirth: {
    affixLines: [
      {
        text: "Converts 50% of Life Regain and Energy Shield Regain to Restoration Over Time",
        mods: [],
      },
      { text: "-50% additional Regain Interval", mods: [] },
    ],
  },
  "Poisoned Relief": {
    affixLines: [
      { text: "+25% injury buffer", mods: [] },
      { text: "-15% additional damage taken at Low Life", mods: [] },
    ],
  },
  Conductive: {
    affixLines: [
      {
        text: "Changes the base effect of Numbed to: +11% additional Lightning Damage taken",
        mods: [],
      },
    ],
  },
  Transition: {
    affixLines: [
      {
        text: "50% chance for this skill to deal +16% additional damage when casting a skill",
        mods: [],
      },
      {
        text: "25% chance for this skill to deal +32% additional damage when casting a skill",
        mods: [],
      },
      {
        text: "10% chance for this skill to deal +80% additional damage when casting a skill",
        mods: [],
      },
    ],
  },
  "Queer Angle": {
    affixLines: [
      {
        text: "You and Minions deal Lucky Damage against Numbed enemies",
        mods: [],
      },
    ],
  },
  Thunderclap: {
    affixLines: [
      {
        text: "If you have Agility Blessing stacks when casting the Main Skill, consumes 1 stack(s) of Agility Blessing to make this skill deal +30% additional Lightning Damage",
        mods: [],
      },
    ],
  },
  Beacon: { affixLines: [{ text: "+2 Max Spell Burst", mods: [] }] },
  Chilly: {
    affixLines: [
      {
        text: "+100% chance to gain 1 stack of Focus Blessing on hit",
        mods: [],
      },
      { text: "Max Focus Blessing Stacks +1", mods: [] },
    ],
  },
  "Peculiar Vibe": {
    affixLines: [
      { text: "+50% chance to inflict Elemental Ailments", mods: [] },
      {
        text: "+25% additional damage against enemies with Elemental Ailments",
        mods: [],
      },
    ],
  },
  Insight: {
    affixLines: [
      {
        text: "+30% additional Spell Damage",
        mods: [{ type: "DmgPct", value: 0.3, modType: "spell", addn: true }],
      },
      { text: "+25% additional Skill Cost", mods: [] },
    ],
  },
  "Burning Touch": {
    affixLines: [
      { text: "Has Spell Aggression", mods: [] },
      {
        text: "+10% Spell Aggression Effect for every Main Spell Skill cast recently. Stacks up to 10 times",
        mods: [],
      },
    ],
  },
  Winter: {
    affixLines: [
      {
        text: "Deals +1% additional damage to an enemy for every 2 points of Frostbite Rating the enemy has",
        mods: [],
      },
    ],
  },
  Bunch: {
    affixLines: [
      { text: "Max Focus Blessing Stacks +1", mods: [] },
      {
        text: "+3% additional Spell Damage per stack of Focus Blessing owned",
        mods: [],
      },
    ],
  },
  "Play Safe": {
    affixLines: [
      {
        text: "100% of the bonuses and additional bonuses to Cast Speed is also applied to Spell Burst Charge Speed",
        mods: [],
      },
    ],
  },
  Shell: {
    affixLines: [
      { text: "+35% additional Max Energy Shield", mods: [] },
      { text: "Your Max Life is set to 100", mods: [] },
    ],
  },
  "Barrier of Radiance": {
    affixLines: [
      {
        text: "Energy Shield Charge started recently cannot be interrupted by damage",
        mods: [],
      },
      { text: "+50% Energy Shield Charge Speed", mods: [] },
    ],
  },
  Mana: {
    affixLines: [
      { text: "20% of damage is taken from Mana before life", mods: [] },
      {
        text: "+12% additional Max Mana",
        mods: [{ type: "MaxManaPct", value: 0.12, addn: true }],
      },
    ],
  },
  "Mind Focus": {
    affixLines: [
      {
        text: "Changes the base effect of Focus Blessing to: Adds Physical Damage equal to 1% of Max Mana to Attacks and Spells",
        mods: [],
      },
    ],
  },
  "Full Load": {
    affixLines: [
      {
        text: "+40% additional damage for the next skill when Mana reaches the max",
        mods: [],
      },
    ],
  },
  Preparation: {
    affixLines: [
      {
        text: "Adds 1 Max Energy Shield for every 50 Mana consumed recently",
        mods: [],
      },
    ],
  },
  Translucent: {
    affixLines: [
      {
        text: "+25% additional Lightning Damage if you have dealt Fire Damage recently",
        mods: [],
      },
      {
        text: "+25% additional Cold Damage if you have dealt Lightning Damage recently",
        mods: [],
      },
      {
        text: "+25% additional Fire Damage if you have dealt Cold Damage recently",
        mods: [],
      },
    ],
  },
  Penetrating: {
    affixLines: [
      {
        text: "When inflicting Ignite, Numbed, Frostbite/Freeze, inflicts Fire Infiltration, Lightning Infiltration, or Cold Infiltration respectively.",
        mods: [],
      },
      {
        text: "Upon inflicting damage, +8% additional Elemental Damage for each type of Infiltration Effect the enemy has",
        mods: [],
      },
    ],
  },
  Focus: {
    affixLines: [
      { text: "Max Channeled Stacks +1", mods: [] },
      {
        text: "+6% additional damage for every +1 additional Max Channeled Stack(s)",
        mods: [],
      },
    ],
  },
  "Quick Ritual": {
    affixLines: [
      { text: "Min Channeled Stacks +1", mods: [] },
      { text: "+20% additional damage Channeled Skills", mods: [] },
    ],
  },
  Frostbitten: {
    affixLines: [
      { text: "+25% additional damage against Frozen enemies", mods: [] },
      {
        text: "Inflicts Frostbite and 100 Frostbite Rating when dealing Cold Damage to an enemy for the first time",
        mods: [],
      },
    ],
  },
  "Extreme Coldness": {
    affixLines: [
      {
        text: "Frostbite and Frostbite Rating will continue to be inflicted on Frozen enemies",
        mods: [],
      },
      {
        text: "After Freeze ends, Frostbite and all Frostbite Rating will no longer be removed. +20% of the retained Frostbite Rating",
        mods: [],
      },
      {
        text: "+25% additional Freeze Duration when an Elite is nearby",
        mods: [],
      },
    ],
  },
  "Mind Blade": {
    affixLines: [
      {
        text: "Adds 30% Physical Damage as Cold Damage when not wielding a Wand or Tin Staff",
        mods: [],
      },
      {
        text: "+25% additional Cold Damage when wielding a Wand or Tin Staff",
        mods: [],
      },
    ],
  },
  "Frozen Lotus": {
    affixLines: [
      {
        text: "+25% additional Cold Damage",
        mods: [{ type: "DmgPct", value: 0.25, modType: "cold", addn: true }],
      },
      { text: "+25% additional Minion Cold Damage", mods: [] },
      { text: "Skills no longer cost Mana", mods: [] },
    ],
  },
  Cohesion: {
    affixLines: [
      {
        text: "+50% additional Critical Strike Rating for the next Main Skill used every 1 s",
        mods: [],
      },
    ],
  },
  Blunt: {
    affixLines: [
      {
        text: "+30% additional Physical Damage",
        mods: [{ type: "DmgPct", value: 0.3, modType: "physical", addn: true }],
      },
      { text: "Enemies +20% Injury Buffer", mods: [] },
    ],
  },
  Determined: {
    affixLines: [
      {
        text: "Upon taking fatal damage, you have a 50% chance to keep at least 1 Life",
        mods: [],
      },
    ],
  },
  Ambition: {
    affixLines: [
      { text: "+100% chance to gain 10 Fervor rating on hit", mods: [] },
      { text: "Gains Fervor when there are enemies Nearby", mods: [] },
    ],
  },
  Gravity: {
    affixLines: [
      {
        text: "+25% additional Melee Damage",
        mods: [{ type: "DmgPct", value: 0.25, modType: "melee", addn: true }],
      },
      { text: "Melee Skill has reversed knockback direction", mods: [] },
    ],
  },
  "Shooting Arrows": {
    affixLines: [
      { text: "+25% additional Projectile Damage", mods: [] },
      { text: "+50% Knockback distance", mods: [] },
    ],
  },
  Brutality: {
    affixLines: [
      {
        text: "+33% additional Physical Damage",
        mods: [
          { type: "DmgPct", value: 0.33, modType: "physical", addn: true },
        ],
      },
      { text: "+30% additional Minion Physical Damage", mods: [] },
      {
        text: "-1% additional Elemental Damage for every 3 level(s).",
        mods: [],
      },
    ],
  },
  "Hair-trigger": {
    affixLines: [
      {
        text: "+2% additional damage of a skill for every 7 points of Fervor Rating when the skill is triggered",
        mods: [],
      },
    ],
  },
  "Instant Smash": {
    affixLines: [
      {
        text: "+80% additional Trauma Damage dealt by Critical Strikes",
        mods: [],
      },
    ],
  },
  "Open Wounds": {
    affixLines: [
      {
        text: "+50% Trauma Duration when inflicting Trauma on Trauma enemies",
        mods: [],
      },
      {
        text: "+125% Critical Strike Damage against Traumatized enemies",
        mods: [],
      },
      {
        text: "Minions +125% Critical Strike Damage against Traumatized enemies",
        mods: [],
      },
    ],
  },
  "Falling Leaves": {
    affixLines: [
      { text: "-20% additional damage for Weapons", mods: [] },
      {
        text: "+40% additional Attack Damage",
        mods: [{ type: "DmgPct", value: 0.4, modType: "attack", addn: true }],
      },
    ],
  },
  Tradeoff: {
    affixLines: [
      {
        text: "+20% additional Attack Speed when Dexterity is no less than Strength",
        mods: [],
      },
      {
        text: "+25% additional Attack Damage when Strength is no less than Dexterity",
        mods: [],
      },
    ],
  },
  Centralize: {
    affixLines: [
      {
        text: "Gains additional Fervor Rating equal to 25% of the current Fervor Rating on hit. Cooldown: 0.3 s",
        mods: [],
      },
      {
        text: "Consumes half of current Fervor Rating when hit. -0.8% additional damage per 1 point consumed",
        mods: [],
      },
    ],
  },
  "Endless Fervor": {
    affixLines: [
      { text: "Have Fervor", mods: [] },
      {
        text: "+12% Fervor effect",
        mods: [{ type: "FervorEff", value: 0.12 }],
      },
    ],
  },
  Fluke: { affixLines: [{ text: "Lucky Critical Strike", mods: [] }] },
  "Keep It Up": {
    affixLines: [
      {
        text: "When triggering a Critical Strike, gains the following buff for the next 4s: +7% additional damage and -25% Critical Strike Rating on Critical Strike. Interval: 0.5s",
        mods: [],
      },
    ],
  },
  Impending: {
    affixLines: [
      {
        text: "Every 0.25 s, +6% additional damage taken for enemies within 10 m. Stacks up to 5 times",
        mods: [],
      },
    ],
  },
  "Rapid Shots": {
    affixLines: [
      {
        text: "Projectile Damage increases with the distance traveled, dealing up to +35% additional damage to Distant enemies",
        mods: [],
      },
    ],
  },
  "Automatic Upgrade": {
    affixLines: [
      { text: "Gains a stack of Fortitude when using a Melee Skill", mods: [] },
      { text: "+4% additional damage per 1 stack(s) of Fortitude", mods: [] },
    ],
  },
  Defensiveness: { affixLines: [{ text: "+25% Block Ratio", mods: [] }] },
  "Full Defense": {
    affixLines: [
      { text: "+25% additional Defense gained from Shield", mods: [] },
      {
        text: "-1% additional Damage Over Time taken for every 1% Block Ratio",
        mods: [],
      },
    ],
  },
  "Last Stand": {
    affixLines: [
      { text: "Block Ratio is set to 0%", mods: [] },
      {
        text: "For every +3% Attack or Spell Block Chance, +2% additional damage, up to +90%",
        mods: [],
      },
    ],
  },
  Plague: {
    affixLines: [
      {
        text: "+20% Movement Speed when defeating Wilted enemies recently",
        mods: [],
      },
      { text: "+15% additional Wilt Damage", mods: [] },
    ],
  },
  Mixture: { affixLines: [{ text: "+50% Deterioration Chance", mods: [] }] },
  Affliction: {
    affixLines: [
      { text: "+30 Affliction inflicted per second", mods: [] },
      { text: "+30% additional Affliction effect", mods: [] },
    ],
  },
  "Subtle Impact": {
    affixLines: [
      {
        text: "Blur gains an additional effect: +25% additional Damage Over Time",
        mods: [],
      },
    ],
  },
  "Forbidden Power": {
    affixLines: [
      {
        text: "+35% additional Erosion Damage",
        mods: [{ type: "DmgPct", value: 0.35, modType: "erosion", addn: true }],
      },
      { text: "-10% Elemental Resistance", mods: [] },
    ],
  },
  "Deceiver's Might": {
    affixLines: [
      {
        text: "+1 to Max Tenacity Blessing Stacks if you have taken damage in the last 8s",
        mods: [],
      },
      {
        text: "+1 to Max Agility Blessing Stacks if you have used a Mobility Skill in the last 8s",
        mods: [],
      },
      {
        text: "+1 to Max Focus Blessing Stacks if you have landed a Critical Strike or Reaped in the last 8s",
        mods: [],
      },
    ],
  },
  Dirt: {
    affixLines: [
      {
        text: "+15% additional Erosion Damage",
        mods: [{ type: "DmgPct", value: 0.15, modType: "erosion", addn: true }],
      },
      { text: "15% additional damage applied to Life", mods: [] },
    ],
  },
  "Stealth Stab": {
    affixLines: [
      { text: "-25% additional damage taken while Blur is active", mods: [] },
      { text: "+25% additional damage for 3 s after Blur ends", mods: [] },
    ],
  },
  "Beyond Cure": {
    affixLines: [
      {
        text: "Upon inflicting damage, +6% additional Erosion Damage for every stack of Wilt or Deterioration the enemy has, up to an additional +30%",
        mods: [],
      },
    ],
  },
  "Twisted Belief": {
    affixLines: [
      { text: "+3 Erosion Skill Level", mods: [] },
      { text: "-5% Max Erosion Resistance", mods: [] },
    ],
  },
  Windwalk: {
    affixLines: [
      {
        text: "+80% additional Reaping Duration against enemies with Max Affliction. Lasts for 4 s. Only takes effect once on each enemy",
        mods: [],
      },
    ],
  },
  Holiness: {
    affixLines: [
      { text: "-95% Cursed Effect", mods: [] },
      { text: "-25% additional damage taken from Cursed enemies", mods: [] },
    ],
  },
  "More With Less": {
    affixLines: [
      { text: "+30% additional Damage Over Time", mods: [] },
      { text: "-10% additional Damage Over Time Duration", mods: [] },
    ],
  },
  "Reap Purification": {
    affixLines: [
      {
        text: "Additionally settles 25% of the remaining total damage when Reaping, then removes all Damage Over Time acting on the target",
        mods: [],
      },
    ],
  },
  "Verbal Abuse": {
    affixLines: [
      { text: "You can cast 1 additional Curses", mods: [] },
      { text: "+10% curse effect", mods: [] },
    ],
  },
  Vile: {
    affixLines: [
      {
        text: "Duration of Ailments caused by Critical Strikes is doubled",
        mods: [],
      },
      {
        text: "For every +3% Critical Strike Damage, +1% additional Ailment Damage",
        mods: [],
      },
    ],
  },
  "Dirty Tricks": {
    affixLines: [
      { text: "Guaranteed to inflict all types of Ailment on hit", mods: [] },
      {
        text: "Upon inflicting damage, +6% additional damage for every type of Ailment the enemy has (multiplies)",
        mods: [],
      },
      {
        text: "When Minions deal damage, +6% additional damage for every type of Ailment the enemy has (multiplies)",
        mods: [],
      },
    ],
  },
  Daze: {
    affixLines: [
      {
        text: "Blur gains an additional effect: +40% crowd control effect and +25% additional Ailment Damage",
        mods: [],
      },
    ],
  },
  Indifference: {
    affixLines: [
      {
        text: "+1% additional damage and +1% additional Minion Damage for every 5 remaining Energy, up to +50% additional damage",
        mods: [],
      },
    ],
  },
  Ward: {
    affixLines: [
      { text: "Adds 13% of Sealed Mana as Energy Shield", mods: [] },
      { text: "Adds 13% of Sealed Life as Energy Shield", mods: [] },
    ],
  },
  "Off The Beaten Track": {
    affixLines: [
      { text: "+4 Support Skill Level", mods: [] },
      { text: "Support Skill's Mana Multiplier is fixed at 95%.", mods: [] },
    ],
  },
  "Stab In The Back": {
    affixLines: [
      {
        text: "While Blur is active, loses Blur after casting a Main Skill, and the skill deals +35% additional damage",
        mods: [],
      },
    ],
  },
  Orders: {
    affixLines: [
      { text: "+25% additional Minion Damage", mods: [] },
      { text: "+50% additional Summon Skill Cast Speed", mods: [] },
    ],
  },
  Sentry: {
    affixLines: [
      { text: "Max Sentry Quantity +1", mods: [] },
      { text: "+100% additional Cast Speed for Sentry Skills", mods: [] },
    ],
  },
  "Shrink Back": {
    affixLines: [
      { text: "Gains Barrier every 1s", mods: [] },
      { text: "+50% Barrier Shield", mods: [] },
    ],
  },
  "Mighty Guard": {
    affixLines: [
      { text: "+2 Minion Skill Level", mods: [] },
      { text: "+ 4 Command per second", mods: [] },
      { text: "+40 initial Growth for Spirit Magi", mods: [] },
    ],
  },
  "Overly Modified": {
    affixLines: [
      {
        text: "+30% additional Sentry Damage, -50% non-Sentry Active Skill damage",
        mods: [],
      },
    ],
  },
  "Isomorphic Arms": {
    affixLines: [
      { text: "Minions gain the Main-Hand Weapon's bonuses.", mods: [] },
      {
        text: "+30% additional Spell Damage for Minions when wielding a Wand or Tin Staff",
        mods: [],
      },
    ],
  },
  Boss: {
    affixLines: [
      { text: "+1 to Max Summonable Synthetic Troops", mods: [] },
      { text: "+15% additional Minion Damage", mods: [] },
    ],
  },
  Rally: {
    affixLines: [
      { text: "Synthetic Troop Minions summoned at a time +1", mods: [] },
      { text: "+25% additional Minion Damage", mods: [] },
    ],
  },
  "Burning Aggression": {
    affixLines: [
      {
        text: "Gains 30 point(s) of Command every 2 s when there is an Elite within 10 m",
        mods: [],
      },
    ],
  },
  "United Stand": {
    affixLines: [
      {
        text: "-5% additional damage taken for every nearby Synthetic Troop Minion within 10m",
        mods: [],
      },
      { text: "-10% Minion aggressiveness", mods: [] },
    ],
  },
  Reflection: {
    affixLines: [
      {
        text: "+6% additional damage for each type of Aura you are affected by",
        mods: [],
      },
      {
        text: "Minions +6% additional damage for each type of Aura they are affected by",
        mods: [],
      },
    ],
  },
  Resistance: {
    affixLines: [
      {
        text: "+1% chance to avoidElemental Ailments for every 1% effective Erosion Resistance",
        mods: [],
      },
    ],
  },
  Knowledgeable: {
    affixLines: [
      { text: "+100% additional Focus Skill Damage", mods: [] },
      { text: "+50% Sealed Mana Compensation for Focus Skills", mods: [] },
      { text: "Focus Skills can be equipped to Active Skill slots", mods: [] },
    ],
  },
  Panacea: {
    affixLines: [
      { text: "Restoration Skills: +100% restoration effect", mods: [] },
      {
        text: "Restoration Effect from Restoration Skills cannot be removed",
        mods: [],
      },
    ],
  },
  Source: {
    affixLines: [
      {
        text: "+50% Sealed Mana Compensation for Spirit Magus Skills",
        mods: [],
      },
      { text: "+30% additional Origin of Spirit Magus Effect", mods: [] },
      { text: "Spirit Magi +30% additional Empower Skill Effect", mods: [] },
    ],
  },
  Empower: {
    affixLines: [
      { text: "The number of Max Spirit Magi In Map is 1", mods: [] },
      { text: "+100% additional Spirit Magus Skill Damage", mods: [] },
    ],
  },
  "Battle Trumpet": {
    affixLines: [
      {
        text: "-10% additional Minion Attack and Cast Speed",
        mods: [{ type: "MinionAspdAndCspdPct", value: 0.1, addn: true }],
      },
      { text: "Spirit Magi +50% chance to use an Enhanced Skill", mods: [] },
    ],
  },
  "Talons of Abyss": {
    affixLines: [
      {
        text: "For every 20 Growth a Spirit Magus has, it deals +1% additional damage",
        mods: [],
      },
      {
        text: "For every 40 Growth a Spirit Magus has, it +1% additional Ultimate Attack and Cast Speed",
        mods: [],
      },
    ],
  },
  "Heat Up": {
    affixLines: [
      {
        text: "+30% additional Sentry Damage if Sentry Skill has been cast recently",
        mods: [],
      },
      { text: "-30% additional Sentry Start Time", mods: [] },
    ],
  },
  "Co-resonance": {
    affixLines: [
      { text: "+25% additional Sentry Damage", mods: [] },
      {
        text: "Attack Speed bonus and 100% of additional bonus are also applied to Attack Sentries' Cast Frequency",
        mods: [],
      },
      {
        text: "Cast Speed bonus and 100% of additional bonus are also applied to Spell Sentries' Cast Frequency",
        mods: [],
      },
    ],
  },
  "Kinetic Conversion": {
    affixLines: [
      {
        text: "100% chance to gain a Barrier for every 5 m you move",
        mods: [],
      },
      { text: "Refreshes Barrier when gaining Barrier", mods: [] },
      { text: "-40% additional Barrier Shield", mods: [] },
    ],
  },
  "Shared Fate": {
    affixLines: [
      {
        text: "Triggers the Sentry Main Skill when there are no Sentries within 10 m. Interval: 1 s",
        mods: [],
      },
      {
        text: "The number of Sentries that can be deployed at a time is equal to the Max Sentry Quantity",
        mods: [],
      },
      { text: "+25% additional Sentry Damage", mods: [] },
    ],
  },
};
