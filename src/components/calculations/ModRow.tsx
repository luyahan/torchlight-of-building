import type { Mod } from "@/src/tli/mod";
import {
  formatModValue,
  getModDisplayName,
} from "../../lib/calculations-utils";

interface ModRowProps {
  mod: Mod;
}

export const ModRow: React.FC<ModRowProps> = ({ mod }) => {
  const displayName = getModDisplayName(mod);
  const formattedValue = formatModValue(mod);

  return (
    <div className="border-l-2 border-zinc-600 py-1 pl-3 text-sm">
      <div className="flex items-baseline justify-between">
        <span className="text-zinc-300">{displayName}</span>
        <span className="font-mono text-amber-400">{formattedValue}</span>
      </div>
      {mod.src && <div className="mt-0.5 text-xs text-zinc-500">{mod.src}</div>}
    </div>
  );
};
