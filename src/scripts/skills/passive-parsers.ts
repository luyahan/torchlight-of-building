import { ts } from "@/src/tli/mod-parser";
import { findColumn, validateAllLevels } from "./progression-table";
import type { SupportLevelParser } from "./types";
import { createConstantLevels, findMatch } from "./utils";

export const preciseCrueltyParser: SupportLevelParser = (input) => {
  const { skillName, progressionTable } = input;

  const descriptCol = findColumn(progressionTable, "descript", skillName);
  const attackDmgPct: Record<number, number> = {};
  const auraEffPctPerCrueltyStack: Record<number, number> = {};

  for (const [levelStr, text] of Object.entries(descriptCol.rows)) {
    const level = Number(levelStr);

    const dmgMatch = findMatch(
      text,
      ts("{value:?dec%} additional attack damage"),
      skillName,
    );
    attackDmgPct[level] = dmgMatch.value;

    const auraEffMatch = findMatch(
      text,
      ts("{value:?dec%} additional aura effect per stack of the buff"),
      skillName,
    );
    auraEffPctPerCrueltyStack[level] = auraEffMatch.value;
  }

  validateAllLevels(attackDmgPct, skillName);
  validateAllLevels(auraEffPctPerCrueltyStack, skillName);

  return { attackDmgPct, auraEffPctPerCrueltyStack };
};

export const spellAmplificationParser: SupportLevelParser = (input) => {
  const { skillName, progressionTable } = input;

  const descriptCol = findColumn(progressionTable, "descript", skillName);
  const spellDmgPct: Record<number, number> = {};

  for (const [levelStr, text] of Object.entries(descriptCol.rows)) {
    const level = Number(levelStr);

    const dmgMatch = findMatch(
      text,
      ts("{value:?dec%} additional spell damage"),
      skillName,
    );
    spellDmgPct[level] = dmgMatch.value;
  }

  validateAllLevels(spellDmgPct, skillName);

  return { spellDmgPct };
};

export const preciseDeepPainParser: SupportLevelParser = (input) => {
  const { skillName, progressionTable } = input;

  const descriptCol = findColumn(progressionTable, "descript", skillName);
  const dotDmgPct: Record<number, number> = {};

  for (const [levelStr, text] of Object.entries(descriptCol.rows)) {
    const level = Number(levelStr);

    const dmgMatch = findMatch(
      text,
      ts("{value:?dec%} additional damage over time"),
      skillName,
    );
    dotDmgPct[level] = dmgMatch.value;
  }

  validateAllLevels(dotDmgPct, skillName);

  return { dotDmgPct, afflictionPerSec: createConstantLevels(30) };
};

export const preciseErosionAmplificationParser: SupportLevelParser = (
  input,
) => {
  const { skillName, progressionTable } = input;

  const descriptCol = findColumn(progressionTable, "descript", skillName);
  const erosionDmgPct: Record<number, number> = {};

  for (const [levelStr, text] of Object.entries(descriptCol.rows)) {
    const level = Number(levelStr);

    const dmgMatch = findMatch(
      text,
      ts("{value:?dec%} additional erosion damage"),
      skillName,
    );
    erosionDmgPct[level] = dmgMatch.value;
  }

  validateAllLevels(erosionDmgPct, skillName);

  return { erosionDmgPct };
};

export const corrosionFocusParser: SupportLevelParser = (input) => {
  const { skillName, progressionTable } = input;

  const descriptCol = findColumn(progressionTable, "descript", skillName);
  const erosionDmgPct: Record<number, number> = {};
  const inflictWiltPct: Record<number, number> = {};

  for (const [levelStr, text] of Object.entries(descriptCol.rows)) {
    const level = Number(levelStr);

    const dmgMatch = findMatch(
      text,
      ts("{value:?dec%} additional erosion damage"),
      skillName,
    );
    erosionDmgPct[level] = dmgMatch.value;

    const wiltMatch = findMatch(
      text,
      ts("{value:?dec%} wilt chance"),
      skillName,
    );
    inflictWiltPct[level] = wiltMatch.value;
  }

  validateAllLevels(erosionDmgPct, skillName);
  validateAllLevels(inflictWiltPct, skillName);

  return {
    erosionDmgPct,
    inflictWiltPct,
    BaseWiltFlatDmg: createConstantLevels(2),
  };
};

export const deepPainParser: SupportLevelParser = (input) => {
  const { skillName, progressionTable } = input;

  const descriptCol = findColumn(progressionTable, "descript", skillName);
  const dotDmgPct: Record<number, number> = {};

  for (const [levelStr, text] of Object.entries(descriptCol.rows)) {
    const level = Number(levelStr);

    const dmgMatch = findMatch(
      text,
      ts("{value:?dec%} additional damage over time"),
      skillName,
    );
    dotDmgPct[level] = dmgMatch.value;
  }

  validateAllLevels(dotDmgPct, skillName);

  return { dotDmgPct };
};

export const erosionAmplificationParser: SupportLevelParser = (input) => {
  const { skillName, progressionTable } = input;

  const descriptCol = findColumn(progressionTable, "descript", skillName);
  const erosionDmgPct: Record<number, number> = {};

  for (const [levelStr, text] of Object.entries(descriptCol.rows)) {
    const level = Number(levelStr);

    const dmgMatch = findMatch(
      text,
      ts("{value:?dec%} additional erosion damage"),
      skillName,
    );
    erosionDmgPct[level] = dmgMatch.value;
  }

  validateAllLevels(erosionDmgPct, skillName);

  return { erosionDmgPct };
};

export const electricConversionParser: SupportLevelParser = (input) => {
  const { skillName, progressionTable } = input;

  const descriptCol = findColumn(progressionTable, "descript", skillName);
  const lightningDmgPct: Record<number, number> = {};

  for (const [levelStr, text] of Object.entries(descriptCol.rows)) {
    const level = Number(levelStr);

    const dmgMatch = findMatch(
      text,
      ts("{value:?dec%} additional lightning damage"),
      skillName,
    );
    lightningDmgPct[level] = dmgMatch.value;
  }

  validateAllLevels(lightningDmgPct, skillName);

  return { lightningDmgPct };
};

export const frigidDomainParser: SupportLevelParser = (input) => {
  const { skillName, progressionTable } = input;

  const descriptCol = findColumn(progressionTable, "descript", skillName);
  const coldDmgPct: Record<number, number> = {};

  for (const [levelStr, text] of Object.entries(descriptCol.rows)) {
    const level = Number(levelStr);

    const dmgMatch = findMatch(
      text,
      ts(
        "{value:?dec%} additional cold damage against enemies affected by the skill",
      ),
      skillName,
    );
    coldDmgPct[level] = dmgMatch.value;
  }

  validateAllLevels(coldDmgPct, skillName);

  return { coldDmgPct };
};

export const preciseFrigidDomainParser: SupportLevelParser = (input) => {
  const { skillName, progressionTable } = input;

  const descriptCol = findColumn(progressionTable, "descript", skillName);
  const coldDmgPct: Record<number, number> = {};

  for (const [levelStr, text] of Object.entries(descriptCol.rows)) {
    const level = Number(levelStr);

    const dmgMatch = findMatch(
      text,
      ts(
        "{value:?dec%} additional cold damage against enemies affected by the skill",
      ),
      skillName,
    );
    coldDmgPct[level] = dmgMatch.value;
  }

  validateAllLevels(coldDmgPct, skillName);

  return { coldDmgPct };
};

export const summonThunderMagusParser: SupportLevelParser = (input) => {
  const { skillName, progressionTable } = input;

  const descriptCol = findColumn(progressionTable, "descript", skillName);
  const dmgPct: Record<number, number> = {};

  for (const [levelStr, text] of Object.entries(descriptCol.rows)) {
    const level = Number(levelStr);

    const dmgMatch = findMatch(
      text,
      ts(
        "{_:+int}% additional attack and cast speed and {value:?dec%} additional damage to the summoner",
      ),
      skillName,
    );
    dmgPct[level] = dmgMatch.value;
  }

  validateAllLevels(dmgPct, skillName);

  return { aspdAndCspdPct: createConstantLevels(6), dmgPct };
};

export const summonFireMagusParser: SupportLevelParser = (input) => {
  const { skillName, progressionTable } = input;

  const descriptCol = findColumn(progressionTable, "descript", skillName);
  const critRating: Record<number, number> = {};

  for (const [levelStr, text] of Object.entries(descriptCol.rows)) {
    const level = Number(levelStr);

    const match = findMatch(
      text,
      ts(
        "giving the summoner {value:?int} attack and spell critical strike rating",
      ),
      skillName,
    );
    critRating[level] = match.value;
  }

  validateAllLevels(critRating, skillName);

  return { critRating };
};

export const preciseElectricConversionParser: SupportLevelParser = (input) => {
  const { skillName, progressionTable } = input;

  const descriptCol = findColumn(progressionTable, "descript", skillName);
  const lightningDmgPct: Record<number, number> = {};

  for (const [levelStr, text] of Object.entries(descriptCol.rows)) {
    const level = Number(levelStr);

    const dmgMatch = findMatch(
      text,
      ts("{value:?dec%} additional lightning damage"),
      skillName,
    );
    lightningDmgPct[level] = dmgMatch.value;
  }

  validateAllLevels(lightningDmgPct, skillName);

  return { lightningDmgPct };
};

export const preciseSpellAmplificationParser: SupportLevelParser = (input) => {
  const { skillName, progressionTable } = input;

  const descriptCol = findColumn(progressionTable, "descript", skillName);
  const spellDmgPct: Record<number, number> = {};

  for (const [levelStr, text] of Object.entries(descriptCol.rows)) {
    const level = Number(levelStr);

    const dmgMatch = findMatch(
      text,
      ts("{value:?dec%} additional spell damage"),
      skillName,
    );
    spellDmgPct[level] = dmgMatch.value;
  }

  validateAllLevels(spellDmgPct, skillName);

  return { spellDmgPct };
};

export const preciseFearlessParser: SupportLevelParser = (input) => {
  const { skillName, progressionTable } = input;

  const descriptCol = findColumn(progressionTable, "descript", skillName);
  const meleeCritRatingPct: Record<number, number> = {};
  const meleeDmgPct: Record<number, number> = {};

  for (const [levelStr, text] of Object.entries(descriptCol.rows)) {
    const level = Number(levelStr);

    const critMatch = findMatch(
      text,
      ts("{value:?dec%} critical strike rating for melee skills"),
      skillName,
    );
    meleeCritRatingPct[level] = critMatch.value;

    const dmgMatch = findMatch(
      text,
      ts("{value:?dec%} additional melee skill damage"),
      skillName,
    );
    meleeDmgPct[level] = dmgMatch.value;
  }

  validateAllLevels(meleeCritRatingPct, skillName);
  validateAllLevels(meleeDmgPct, skillName);

  return {
    meleeCritRatingPct,
    meleeDmgPct,
    meleeAspdPct: createConstantLevels(8),
  };
};

export const preciseSwiftnessParser: SupportLevelParser = (input) => {
  const { skillName, progressionTable } = input;

  const descriptCol = findColumn(progressionTable, "descript", skillName);
  const movementSpeedPct: Record<number, number> = {};

  for (const [levelStr, text] of Object.entries(descriptCol.rows)) {
    const level = Number(levelStr);

    const match = findMatch(
      text,
      ts("{value:?dec%} movement speed"),
      skillName,
    );
    movementSpeedPct[level] = match.value;
  }

  validateAllLevels(movementSpeedPct, skillName);

  return { movementSpeedPct };
};
