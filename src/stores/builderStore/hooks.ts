"use client";

import { actions } from "./actions";
import type { BuilderActions } from "./types";

// Hook for actions only - stable reference
export const useBuilderActions = (): BuilderActions => actions;
