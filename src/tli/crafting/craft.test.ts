import { expect, test, describe } from "vitest";
import { craft } from "./craft";

describe("craft", () => {
  test("crafts affix at 0% returns min value", () => {
    const affix = {
      template: "+{0}% Cooldown Recovery Speed",
      valueRanges: [{ min: 17, max: 24 }],
    };
    expect(craft(affix, 0)).toBe("+17% Cooldown Recovery Speed");
  });

  test("crafts affix at 100% returns max value", () => {
    const affix = {
      template: "+{0}% Cooldown Recovery Speed",
      valueRanges: [{ min: 17, max: 24 }],
    };
    expect(craft(affix, 100)).toBe("+24% Cooldown Recovery Speed");
  });

  test("crafts affix at 50% returns middle value (rounded)", () => {
    const affix = {
      template: "+{0}% Cooldown Recovery Speed",
      valueRanges: [{ min: 17, max: 24 }],
    };
    // 17 + (24-17) * 0.5 = 17 + 3.5 = 20.5 → rounds to 21
    expect(craft(affix, 50)).toBe("+21% Cooldown Recovery Speed");
  });

  test("crafts affix with multiple ranges", () => {
    const affix = {
      template: "Adds {0}- {1}Elemental Damage",
      valueRanges: [
        { min: 47, max: 49 },
        { min: 272, max: 274 },
      ],
    };
    expect(craft(affix, 0)).toBe("Adds 47- 272Elemental Damage");
    expect(craft(affix, 100)).toBe("Adds 49- 274Elemental Damage");
  });

  test("crafts affix with no ranges", () => {
    const affix = {
      template: "Has Hasten",
      valueRanges: [],
    };
    expect(craft(affix, 50)).toBe("Has Hasten");
  });

  test("crafts affix with negative ranges", () => {
    const affix = {
      template: "{0}% additional Physical Damage taken",
      valueRanges: [{ min: -6, max: -4 }],
    };
    expect(craft(affix, 0)).toBe("-6% additional Physical Damage taken");
    expect(craft(affix, 100)).toBe("-4% additional Physical Damage taken");
  });

  test("crafts multi-effect affix with newline", () => {
    const affix = {
      template: "+{0}% Armor Pen\n+{1}% Armor Pen for Minions",
      valueRanges: [
        { min: 5, max: 7 },
        { min: 5, max: 7 },
      ],
    };
    expect(craft(affix, 0)).toBe("+5% Armor Pen\n+5% Armor Pen for Minions");
    expect(craft(affix, 100)).toBe("+7% Armor Pen\n+7% Armor Pen for Minions");
  });

  test("throws error for percentage < 0", () => {
    const affix = {
      template: "+{0}% Speed",
      valueRanges: [{ min: 17, max: 24 }],
    };
    expect(() => craft(affix, -1)).toThrow("Percentage must be 0-100");
  });

  test("throws error for percentage > 100", () => {
    const affix = {
      template: "+{0}% Speed",
      valueRanges: [{ min: 17, max: 24 }],
    };
    expect(() => craft(affix, 101)).toThrow("Percentage must be 0-100");
  });

  test("rounding edge case at 25%", () => {
    const affix = {
      template: "+{0}% Speed",
      valueRanges: [{ min: 10, max: 20 }],
    };
    // 10 + (20-10) * 0.25 = 10 + 2.5 = 12.5 → rounds to 13
    expect(craft(affix, 25)).toBe("+13% Speed");
  });

  test("rounding edge case at 75%", () => {
    const affix = {
      template: "+{0}% Speed",
      valueRanges: [{ min: 10, max: 20 }],
    };
    // 10 + (20-10) * 0.75 = 10 + 7.5 = 17.5 → rounds to 18
    expect(craft(affix, 75)).toBe("+18% Speed");
  });
});
