import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { ActiveSkills, PassiveSkills } from "@/src/data/skill";
import { SkillSlot } from "../../components/skills/SkillSlot";
import type { SkillSlots } from "../../lib/save-data";
import { useBuilderActions, useLoadout } from "../../stores/builderStore";

export const Route = createFileRoute("/builder/skills")({
  component: SkillsPage,
});

type SkillSlotKey = 1 | 2 | 3 | 4;

const SKILL_SLOT_KEYS: SkillSlotKey[] = [1, 2, 3, 4];

const getSelectedSkillNames = (skills: SkillSlots): string[] => {
  return SKILL_SLOT_KEYS.map((key) => skills[key]?.skillName).filter(
    (name): name is string => name !== undefined,
  );
};

function SkillsPage(): React.ReactNode {
  const loadout = useLoadout();
  const {
    setActiveSkill,
    setPassiveSkill,
    toggleSkillEnabled,
    setSkillLevel,
    setSupportSkill,
    setSupportSkillLevel,
  } = useBuilderActions();

  const getSelectedActiveSkillNames = useMemo(
    (): string[] => getSelectedSkillNames(loadout.skillPage.activeSkills),
    [loadout.skillPage.activeSkills],
  );

  const getSelectedPassiveSkillNames = useMemo(
    (): string[] => getSelectedSkillNames(loadout.skillPage.passiveSkills),
    [loadout.skillPage.passiveSkills],
  );

  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4 text-xl font-bold text-zinc-50">Active Skills</h2>

        <div className="space-y-3">
          {SKILL_SLOT_KEYS.map((slotKey) => (
            <SkillSlot
              key={`active-${slotKey}`}
              slotLabel={`Active ${slotKey}`}
              skill={loadout.skillPage.activeSkills[slotKey]}
              availableSkills={ActiveSkills}
              excludedSkillNames={getSelectedActiveSkillNames}
              onSkillChange={(skillName) => setActiveSkill(slotKey, skillName)}
              onToggle={() => toggleSkillEnabled("active", slotKey)}
              onLevelChange={(level) => setSkillLevel("active", slotKey, level)}
              onUpdateSupport={(supportKey, supportName) =>
                setSupportSkill("active", slotKey, supportKey, supportName)
              }
              onUpdateSupportLevel={(supportKey, level) =>
                setSupportSkillLevel("active", slotKey, supportKey, level)
              }
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-xl font-bold text-zinc-50">Passive Skills</h2>

        <div className="space-y-3">
          {SKILL_SLOT_KEYS.map((slotKey) => (
            <SkillSlot
              key={`passive-${slotKey}`}
              slotLabel={`Passive ${slotKey}`}
              skill={loadout.skillPage.passiveSkills[slotKey]}
              availableSkills={PassiveSkills}
              excludedSkillNames={getSelectedPassiveSkillNames}
              onSkillChange={(skillName) => setPassiveSkill(slotKey, skillName)}
              onToggle={() => toggleSkillEnabled("passive", slotKey)}
              onLevelChange={(level) =>
                setSkillLevel("passive", slotKey, level)
              }
              onUpdateSupport={(supportKey, supportName) =>
                setSupportSkill("passive", slotKey, supportKey, supportName)
              }
              onUpdateSupportLevel={(supportKey, level) =>
                setSupportSkillLevel("passive", slotKey, supportKey, level)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
