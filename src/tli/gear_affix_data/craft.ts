import { ValueRange } from "./types";

const interpolateValue = (range: ValueRange, percentage: number): number => {
  if (percentage < 0 || percentage > 100) {
    throw new Error(`Percentage must be 0-100, got ${percentage}`);
  }
  const value = range.min + (range.max - range.min) * (percentage / 100);
  return Math.round(value);
};

/**
 * Crafts a single affix string by interpolating value ranges
 *
 * @param affix - The gear affix to craft
 * @param percentage - Value from 0-100 representing crafting quality
 * @returns The final affix string with interpolated values
 *
 * @example
 * craft({ template: "+{0}% Speed", valueRanges: [{ min: 17, max: 24 }] }, 0)   // "+17% Speed"
 * craft({ template: "+{0}% Speed", valueRanges: [{ min: 17, max: 24 }] }, 50)  // "+21% Speed"
 * craft({ template: "+{0}% Speed", valueRanges: [{ min: 17, max: 24 }] }, 100) // "+24% Speed"
 */
export const craft = <
  T extends { template: string; valueRanges: ValueRange[] },
>(
  affix: T,
  percentage: number,
): string => {
  let result = affix.template;

  affix.valueRanges.forEach((range, index) => {
    const value = interpolateValue(range, percentage);
    result = result.replace(`{${index}}`, value.toString());
  });

  return result;
};

/**
 * Crafts an affix and returns lines as an array (splits on \n)
 * Useful for multi-effect affixes which have newlines in their template
 *
 * @param affix - The gear affix to craft
 * @param percentage - Value from 0-100 representing crafting quality
 * @returns Array of affix lines
 *
 * @example
 * craftLines({ template: "+{0}% Armor Pen\n+{1}% Armor Pen for Minions", valueRanges: [{ min: 5, max: 7 }, { min: 5, max: 7 }] }, 100)
 * // ["+7% Armor Pen", "+7% Armor Pen for Minions"]
 */
export const craftLines = <
  T extends { template: string; valueRanges: ValueRange[] },
>(
  affix: T,
  percentage: number,
): string[] => {
  const crafted = craft(affix, percentage);
  return crafted.split("\n");
};
