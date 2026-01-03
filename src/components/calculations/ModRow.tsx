import type { Mod } from "@/src/tli/mod";

interface ModRowProps {
  mod: Mod;
}

const formatMod = (mod: Mod): string => {
  const parts: string[] = [mod.type];

  // Add value if present
  if ("value" in mod) {
    const val = mod.value;
    if (typeof val === "object" && "min" in val && "max" in val) {
      parts.push(`${val.min}-${val.max}`);
    } else {
      parts.push(String(val));
    }
  }

  // Add addn if true
  if ("addn" in mod && mod.addn === true) {
    parts.push("addn");
  }

  // Add other properties (excluding type, value, addn, src, per, cond, condThreshold)
  const skipKeys = new Set([
    "type",
    "value",
    "addn",
    "src",
    "per",
    "cond",
    "condThreshold",
  ]);
  for (const [key, val] of Object.entries(mod)) {
    if (skipKeys.has(key)) continue;
    if (typeof val === "object") {
      parts.push(`${key}:${JSON.stringify(val)}`);
    } else {
      parts.push(`${key}:${val}`);
    }
  }

  // Add src at the end
  if (mod.src !== undefined) {
    parts.push(mod.src);
  }

  return parts.join("|");
};

export const ModRow: React.FC<ModRowProps> = ({ mod }) => {
  return (
    <div className="border-l-2 border-zinc-600 py-1 pl-3 text-sm">
      <pre className="overflow-x-auto font-mono text-xs text-zinc-300">
        {formatMod(mod)}
      </pre>
    </div>
  );
};
