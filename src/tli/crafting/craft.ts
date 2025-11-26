import { ValueRange } from "../gear_affix_data/types";

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
