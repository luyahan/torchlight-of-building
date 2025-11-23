import { Affix, AffixOfType } from "./affix";
import {
  DmgModType,
  DMG_MOD_TYPES,
  CritRatingModType,
  CRIT_RATING_MOD_TYPES,
} from "./constants";

type ParseResult = "unrecognized" | "unimplemented" | Affix;

const isValidDmgModType = (value: string): value is DmgModType => {
  return DMG_MOD_TYPES.includes(value as DmgModType);
};

const isValidCritRatingModType = (
  value: string
): value is CritRatingModType => {
  return CRIT_RATING_MOD_TYPES.includes(value as CritRatingModType);
};

const parseDmgPct = (input: string): AffixOfType<"DmgPct"> | undefined => {
  // Regex to parse: +9% [additional] [fire] damage
  const pattern =
    /^([+-])?(\d+(?:\.\d+)?)% (?:(additional) )?(?:(\w+) )?damage$/i;
  const match = input.match(pattern);

  if (!match) {
    return undefined;
  }

  const percentageStr = match[2];
  const hasAdditional = match[3] !== undefined;
  const damageTypeWord = match[4];

  const value = parseFloat(percentageStr) / 100;
  const addn = hasAdditional;

  let modType: DmgModType = "global";
  if (damageTypeWord !== undefined) {
    if (isValidDmgModType(damageTypeWord)) {
      modType = damageTypeWord;
    } else {
      return undefined;
    }
  }

  return {
    type: "DmgPct",
    value,
    modType,
    addn,
  };
};

const parseCritRatingPct = (
  input: string
): AffixOfType<"CritRatingPct"> | undefined => {
  // Regex to parse: +10% [Attack] Critical Strike Rating
  // The type word comes before "Critical Strike Rating"
  const pattern =
    /^([+-])?(\d+(?:\.\d+)?)% (?:(\w+) )?critical strike rating$/i;
  const match = input.match(pattern);

  if (!match) {
    return undefined;
  }

  const percentageStr = match[2];
  const modTypeWord = match[3];

  const value = parseFloat(percentageStr) / 100;

  let modType: CritRatingModType = "global";
  if (modTypeWord !== undefined) {
    if (isValidCritRatingModType(modTypeWord)) {
      modType = modTypeWord;
    } else {
      return undefined;
    }
  }

  return {
    type: "CritRatingPct",
    value,
    modType,
  };
};

const parseAspdPct = (input: string): AffixOfType<"AspdPct"> | undefined => {
  // Regex to parse: +6% [additional] attack speed
  const pattern = /^([+-])?(\d+(?:\.\d+)?)% (?:(additional) )?attack speed$/i;
  const match = input.match(pattern);

  if (!match) {
    return undefined;
  }

  const percentageStr = match[2];
  const hasAdditional = match[3] !== undefined;

  const value = parseFloat(percentageStr) / 100;
  const addn = hasAdditional;

  return {
    type: "AspdPct",
    value,
    addn,
  };
};

const parseCspdPct = (input: string): AffixOfType<"CspdPct"> | undefined => {
  // Regex to parse: +6% [additional] cast speed
  const pattern = /^([+-])?(\d+(?:\.\d+)?)% (?:(additional) )?cast speed$/i;
  const match = input.match(pattern);

  if (!match) {
    return undefined;
  }

  const percentageStr = match[2];
  const hasAdditional = match[3] !== undefined;

  const value = parseFloat(percentageStr) / 100;
  const addn = hasAdditional;

  return {
    type: "CspdPct",
    value,
    addn,
  };
};

const parseAspdAndCspdPct = (
  input: string
): AffixOfType<"AspdAndCspdPct"> | undefined => {
  // Regex to parse: +6% [additional] attack and cast speed
  const pattern =
    /^([+-])?(\d+(?:\.\d+)?)% (?:(additional) )?attack and cast speed$/i;
  const match = input.match(pattern);

  if (!match) {
    return undefined;
  }

  const percentageStr = match[2];
  const hasAdditional = match[3] !== undefined;

  const value = parseFloat(percentageStr) / 100;
  const addn = hasAdditional;

  return {
    type: "AspdAndCspdPct",
    value,
    addn,
  };
};

const parseMinionAspdAndCspdPct = (
  input: string
): AffixOfType<"MinionAspdAndCspdPct"> | undefined => {
  // Regex to parse: +6% [additional] minion attack and cast speed
  const pattern =
    /^([+-])?(\d+(?:\.\d+)?)% (?:(additional) )?minion attack and cast speed$/i;
  const match = input.match(pattern);

  if (!match) {
    return undefined;
  }

  const percentageStr = match[2];
  const hasAdditional = match[3] !== undefined;

  const value = parseFloat(percentageStr) / 100;
  const addn = hasAdditional;

  return {
    type: "MinionAspdAndCspdPct",
    value,
    addn,
  };
};

export const parseAffix = (input: string): ParseResult => {
  const normalized = input.trim().toLowerCase();

  const parsers = [
    parseDmgPct,
    parseCritRatingPct,
    // Speed parsers ordered by specificity (most specific first)
    parseMinionAspdAndCspdPct,
    parseAspdAndCspdPct,
    parseAspdPct,
    parseCspdPct,
    // Add more parsers here as they're implemented
    // parseCritDmgPct,
    // etc.
  ];

  for (const parser of parsers) {
    const result = parser(normalized);
    if (result !== undefined) {
      return result;
    }
  }

  // No parser matched
  return "unrecognized";
};
