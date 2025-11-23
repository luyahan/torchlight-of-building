import { expect, test } from "vitest";
import { parseAffix } from "./affix_parser";

test("parse basic damage without type (global)", () => {
  const result = parseAffix("+9% damage");
  expect(result).toEqual({
    type: "DmgPct",
    value: 0.09,
    modType: "global",
    addn: false,
  });
});

test("parse typed damage", () => {
  const result = parseAffix("+18% fire damage");
  expect(result).toEqual({
    type: "DmgPct",
    value: 0.18,
    modType: "fire",
    addn: false,
  });
});

test("parse additional global damage", () => {
  const result = parseAffix("+9% additional damage");
  expect(result).toEqual({
    type: "DmgPct",
    value: 0.09,
    modType: "global",
    addn: true,
  });
});

test("parse additional typed damage", () => {
  const result = parseAffix("+9% additional attack damage");
  expect(result).toEqual({
    type: "DmgPct",
    value: 0.09,
    modType: "attack",
    addn: true,
  });
});

test("parse decimal damage", () => {
  const result = parseAffix("+12.5% fire damage");
  expect(result).toEqual({
    type: "DmgPct",
    value: 0.125,
    modType: "fire",
    addn: false,
  });
});

test("return unrecognized for invalid damage type", () => {
  const result = parseAffix("+10% invalid damage");
  expect(result).toBe("unrecognized");
});

test("parse global critical strike rating", () => {
  const result = parseAffix("+10% Critical Strike Rating");
  expect(result).toEqual({
    type: "CritRatingPct",
    value: 0.1,
    modType: "global",
  });
});

test("parse typed critical strike rating", () => {
  const result = parseAffix("+10% Attack Critical Strike Rating");
  expect(result).toEqual({
    type: "CritRatingPct",
    value: 0.1,
    modType: "attack",
  });
});

test("parse crit rating with decimal percentage", () => {
  const result = parseAffix("+12.5% Attack Critical Strike Rating");
  expect(result).toEqual({
    type: "CritRatingPct",
    value: 0.125,
    modType: "attack",
  });
});

test("return unrecognized for invalid crit rating mod type", () => {
  const result = parseAffix("+10% Fire Critical Strike Rating");
  expect(result).toBe("unrecognized");
});

test("parse basic attack speed", () => {
  const result = parseAffix("+6% attack speed");
  expect(result).toEqual({
    type: "AspdPct",
    value: 0.06,
    addn: false,
  });
});

test("parse additional attack speed", () => {
  const result = parseAffix("+6% additional attack speed");
  expect(result).toEqual({
    type: "AspdPct",
    value: 0.06,
    addn: true,
  });
});

test("parse attack speed with decimal percentage", () => {
  const result = parseAffix("+12.5% attack speed");
  expect(result).toEqual({
    type: "AspdPct",
    value: 0.125,
    addn: false,
  });
});

test("parse basic cast speed", () => {
  const result = parseAffix("+6% cast speed");
  expect(result).toEqual({
    type: "CspdPct",
    value: 0.06,
    addn: false,
  });
});

test("parse basic attack and cast speed", () => {
  const result = parseAffix("+6% attack and cast speed");
  expect(result).toEqual({
    type: "AspdAndCspdPct",
    value: 0.06,
    addn: false,
  });
});

test("parse basic minion attack and cast speed", () => {
  const result = parseAffix("+6% minion attack and cast speed");
  expect(result).toEqual({
    type: "MinionAspdAndCspdPct",
    value: 0.06,
    addn: false,
  });
});
