"use client";

import { create } from "zustand";

interface StorageErrorState {
  isStorageErrorOpen: boolean;
  showStorageError: () => void;
  hideStorageError: () => void;
}

export const useStorageErrorStore = create<StorageErrorState>()((set) => ({
  isStorageErrorOpen: false,
  showStorageError: () => set({ isStorageErrorOpen: true }),
  hideStorageError: () => set({ isStorageErrorOpen: false }),
}));
