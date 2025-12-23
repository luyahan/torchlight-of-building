import { createFileRoute } from "@tanstack/react-router";
import {
  type DivinitySlate,
  getAffixText,
  type PlacedSlate,
  type Rotation,
  type SlateShape,
} from "@/src/tli/core";
import { DivinityTab } from "../../components/divinity/DivinityTab";
import type { DivinitySlate as SaveDataDivinitySlate } from "../../lib/save-data";
import { useBuilderActions, useLoadout } from "../../stores/builderStore";

export const Route = createFileRoute("/builder/divinity")({
  component: DivinityPage,
});

const toSaveDataSlate = (slate: DivinitySlate): SaveDataDivinitySlate => ({
  ...slate,
  affixes: slate.affixes.map(getAffixText),
});

function DivinityPage(): React.ReactNode {
  const loadout = useLoadout();
  const {
    addSlateToInventory,
    copySlate,
    deleteSlate,
    placeSlate,
    removeSlate,
    updateSlate,
  } = useBuilderActions();

  return (
    <DivinityTab
      divinityPage={loadout.divinityPage}
      onSaveSlate={(slate: DivinitySlate) =>
        addSlateToInventory(toSaveDataSlate(slate))
      }
      onCopySlate={(slate: DivinitySlate) => copySlate(slate.id)}
      onDeleteSlate={deleteSlate}
      onPlaceSlate={(placement: PlacedSlate) =>
        placeSlate(placement.slateId, placement.position)
      }
      onMoveSlate={(slateId: string, position: { row: number; col: number }) =>
        placeSlate(slateId, position)
      }
      onUnplaceSlate={removeSlate}
      onUpdateSlateRotation={(slateId: string, rotation: Rotation) =>
        updateSlate(slateId, { rotation })
      }
      onUpdateSlateFlip={(
        slateId: string,
        flippedH: boolean,
        flippedV: boolean,
      ) => updateSlate(slateId, { flippedH, flippedV })}
      onUpdateSlateShape={(slateId: string, shape: SlateShape) =>
        updateSlate(slateId, { shape })
      }
    />
  );
}
