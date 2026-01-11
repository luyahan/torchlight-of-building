import { useRef, useState } from "react";
import { Tooltip } from "@/src/components/ui/Tooltip";
import type { BaseSkill } from "@/src/data/skill/types";
import { i18n } from "@/src/lib/i18n";
import { SkillTooltipContent } from "./SkillTooltipContent";

interface OptionWithSkillTooltipProps {
  skill: BaseSkill;
  selected: boolean;
}

export const OptionWithSkillTooltip: React.FC<OptionWithSkillTooltipProps> = ({
  skill,
  selected,
}) => {
  // Force re-render when locale changes
  void i18n.locale;

  const [isHovered, setIsHovered] = useState(false);
  const [rect, setRect] = useState<DOMRect | undefined>(undefined);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      onMouseEnter={() => {
        setIsHovered(true);
        if (ref.current) {
          setRect(ref.current.getBoundingClientRect());
        }
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={selected ? "text-amber-400" : ""}>
        {i18n._(skill.name)}
      </span>

      <Tooltip isVisible={isHovered} triggerRect={rect}>
        <SkillTooltipContent skill={skill} />
      </Tooltip>
    </div>
  );
};
