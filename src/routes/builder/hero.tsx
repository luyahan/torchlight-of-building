import { createFileRoute } from "@tanstack/react-router";
import { HeroTab } from "../../components/hero/HeroTab";
import type { HeroMemory, HeroMemorySlot } from "../../lib/save-data";
import { useBuilderActions, useLoadout } from "../../stores/builderStore";

export const Route = createFileRoute("/builder/hero")({
  component: HeroPage,
});

function HeroPage(): React.ReactNode {
  const loadout = useLoadout();
  const {
    resetHeroPage,
    setTrait,
    equipHeroMemoryById,
    addHeroMemory,
    copyHeroMemory,
    deleteHeroMemory,
  } = useBuilderActions();

  return (
    <HeroTab
      heroPage={loadout.heroPage}
      heroMemoryList={loadout.heroPage.memoryInventory}
      onHeroChange={resetHeroPage}
      onTraitSelect={(level: 45 | 60 | 75, traitName: string | undefined) =>
        setTrait(
          `level${level}` as "level45" | "level60" | "level75",
          traitName,
        )
      }
      onMemoryEquip={(slot: HeroMemorySlot, memoryId: string | undefined) =>
        equipHeroMemoryById(slot, memoryId)
      }
      onMemorySave={(memory: HeroMemory) => addHeroMemory(memory)}
      onMemoryCopy={copyHeroMemory}
      onMemoryDelete={deleteHeroMemory}
    />
  );
}
