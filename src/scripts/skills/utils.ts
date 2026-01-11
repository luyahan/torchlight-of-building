import type { TemplateBuilder } from "@/src/tli/mod-parser";

const EXPECTED_LEVELS = 40;

/**
 * Match a substring template against text and return the captures.
 * Uses substring matching (ts() templates).
 * Throws if no match found.
 */
export const findMatch = <T extends Record<string, unknown>>(
  text: string,
  matcher: TemplateBuilder<T>,
  context: string,
): T => {
  const match = matcher.tryMatch(text);
  if (match === undefined) {
    throw new Error(`${context}: no matching substring found`);
  }
  return match;
};

/**
 * Creates a levels record with the same value for all 40 levels.
 * Used for mods that don't vary by skill level.
 */
export const createConstantLevels = (value: number): Record<number, number> => {
  return Object.fromEntries(
    Array.from({ length: EXPECTED_LEVELS }, (_, i) => [i + 1, value]),
  ) as Record<number, number>;
};
