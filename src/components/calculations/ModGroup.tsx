import { useMemo, useState } from "react";
import type { Mod } from "@/src/tli/mod";
import { ModRow } from "./ModRow";

interface ModGroupProps {
  title: string;
  description: string;
  mods: Mod[];
  defaultExpanded?: boolean;
}

export const ModGroup: React.FC<ModGroupProps> = ({
  title,
  description,
  mods,
  defaultExpanded = false,
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const sortedMods = useMemo(() => {
    return [...mods].sort((a, b) => {
      const srcA = a.src ?? "";
      const srcB = b.src ?? "";
      return srcA.localeCompare(srcB);
    });
  }, [mods]);

  if (mods.length === 0) {
    return null;
  }

  return (
    <div className="rounded-lg border border-zinc-700 bg-zinc-800">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between p-4 text-left"
      >
        <div>
          <span className="font-medium text-zinc-50">{title}</span>
          <span className="ml-2 text-sm text-zinc-400">({mods.length})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-500">{description}</span>
          <svg
            className={`h-4 w-4 text-zinc-400 transition-transform ${expanded ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {expanded && (
        <div className="space-y-2 border-t border-zinc-700 px-4 pb-4 pt-3">
          {sortedMods.map((mod, idx) => (
            <ModRow key={`${mod.type}-${idx}`} mod={mod} />
          ))}
        </div>
      )}
    </div>
  );
};
