import { RawLoadout } from "@/src/tli/core";
import { DEBUG_MODE_STORAGE_KEY } from "./constants";

export const generateItemId = (): string => crypto.randomUUID();

export const loadDebugModeFromStorage = (): boolean => {
  if (typeof window === "undefined") return false;
  try {
    const stored = localStorage.getItem(DEBUG_MODE_STORAGE_KEY);
    return stored === "true";
  } catch (error) {
    console.error("Failed to load debug mode from localStorage:", error);
    return false;
  }
};

export const saveDebugModeToStorage = (enabled: boolean): void => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(DEBUG_MODE_STORAGE_KEY, enabled.toString());
  } catch (error) {
    console.error("Failed to save debug mode to localStorage:", error);
  }
};

export const createEmptyLoadout = (): RawLoadout => ({
  equipmentPage: {},
  talentPage: {},
  skillPage: {
    skills: [],
  },
  itemsList: [],
});
