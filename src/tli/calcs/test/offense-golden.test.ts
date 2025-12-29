import { describe, expect, it } from "vitest";
import type { SaveData } from "@/src/lib/save-data";
import type { Configuration } from "../../core";
import { loadSave } from "../../storage/load-save";
import { calculateOffense } from "../offense";
import rosaGolden from "./rosa-2-golden.json";

describe("offense golden tests", () => {
  it("rosa-2-golden: Frost Spike should calculate ~13.29 trillion DPS", () => {
    const saveData = rosaGolden as unknown as SaveData;
    const loadout = loadSave(saveData);
    const config = saveData.configurationPage as Configuration;

    const results = calculateOffense({ loadout, configuration: config });

    const frostSpike = results.skills["Frost Spike"];
    if (frostSpike === undefined) {
      throw new Error("Frost Spike skill not found in results");
    }

    const avgDps = frostSpike.avgDps;
    const expectedDps = 13.29e12; // ~13.29 trillion
    const tolerance = 0.01; // 1% tolerance

    expect(avgDps).toBeGreaterThan(expectedDps * (1 - tolerance));
    expect(avgDps).toBeLessThan(expectedDps * (1 + tolerance));
  });
});
