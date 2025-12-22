import type { Mod } from "@/src/tli/mod";
import { ModGroup } from "./ModGroup";

interface StatBreakdownProps {
  title: string;
  finalValue: string;
  mods: Mod[];
  description?: string;
  groupTitle?: string;
  groupDescription?: string;
  defaultExpanded?: boolean;
}

export const StatBreakdown: React.FC<StatBreakdownProps> = ({
  title,
  finalValue,
  mods,
  description,
  groupTitle,
  groupDescription,
  defaultExpanded = false,
}) => {
  return (
    <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-4">
      <div className="mb-3 flex items-baseline justify-between">
        <div>
          <h4 className="font-medium text-zinc-50">{title}</h4>
          {description && (
            <p className="mt-0.5 text-xs text-zinc-500">{description}</p>
          )}
        </div>
        <span className="text-xl font-semibold text-amber-400">
          {finalValue}
        </span>
      </div>

      {mods.length > 0 && (
        <ModGroup
          title={groupTitle || "Contributing Mods"}
          description={groupDescription || ""}
          mods={mods}
          defaultExpanded={defaultExpanded}
        />
      )}
    </div>
  );
};
