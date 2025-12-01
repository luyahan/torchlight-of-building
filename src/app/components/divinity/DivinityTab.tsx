"use client";

import { useState } from "react";
import { RawDivinityPage, RawDivinitySlate, PlacedSlate } from "@/src/tli/core";
import { findGridCenter } from "@/src/app/lib/divinity-grid";
import { DivinityGrid } from "./DivinityGrid";
import { SlateCrafter } from "./SlateCrafter";
import { SlateInventory } from "./SlateInventory";

interface DivinityTabProps {
  divinityPage: RawDivinityPage;
  divinitySlateList: RawDivinitySlate[];
  onSaveSlate: (slate: RawDivinitySlate) => void;
  onUpdateSlate: (slate: RawDivinitySlate) => void;
  onCopySlate: (slate: RawDivinitySlate) => void;
  onDeleteSlate: (slateId: string) => void;
  onPlaceSlate: (placement: PlacedSlate) => void;
  onRemovePlacedSlate: (slateId: string) => void;
  onMoveSlate: (
    slateId: string,
    position: { row: number; col: number },
  ) => void;
}

export const DivinityTab: React.FC<DivinityTabProps> = ({
  divinityPage,
  divinitySlateList,
  onSaveSlate,
  onUpdateSlate,
  onCopySlate,
  onDeleteSlate,
  onPlaceSlate,
  onRemovePlacedSlate,
  onMoveSlate,
}) => {
  const [editingSlate, setEditingSlate] = useState<
    RawDivinitySlate | undefined
  >();

  const placedSlateIds = divinityPage.placedSlates.map((p) => p.slateId);
  const editingSlateIsPlaced = editingSlate
    ? placedSlateIds.includes(editingSlate.id)
    : false;

  const handlePlaceSlate = (slateId: string) => {
    const center = findGridCenter();
    const placement: PlacedSlate = {
      slateId,
      position: center,
    };
    onPlaceSlate(placement);
  };

  const handleEditSlate = (slate: RawDivinitySlate) => {
    setEditingSlate(slate);
  };

  const handleCancelEdit = () => {
    setEditingSlate(undefined);
  };

  const handleSaveEdit = (slate: RawDivinitySlate) => {
    onUpdateSlate(slate);
    setEditingSlate(undefined);
  };

  const handleClickPlacedSlate = (slateId: string) => {
    const slate = divinitySlateList.find((s) => s.id === slateId);
    if (slate) {
      handleEditSlate(slate);
    }
  };

  const handleRemoveFromGrid = () => {
    if (editingSlate) {
      onRemovePlacedSlate(editingSlate.id);
    }
  };

  return (
    <div className="flex gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-medium text-zinc-200">Divinity Grid</h3>
        <DivinityGrid
          divinityPage={divinityPage}
          divinitySlateList={divinitySlateList}
          onClickPlacedSlate={handleClickPlacedSlate}
          onMoveSlate={onMoveSlate}
        />
      </div>

      <div className="flex flex-col gap-6">
        <SlateCrafter
          editingSlate={editingSlate}
          isPlaced={editingSlateIsPlaced}
          onSave={editingSlate ? handleSaveEdit : onSaveSlate}
          onCancel={editingSlate ? handleCancelEdit : undefined}
          onRemoveFromGrid={
            editingSlateIsPlaced ? handleRemoveFromGrid : undefined
          }
        />

        <SlateInventory
          slates={divinitySlateList}
          placedSlateIds={placedSlateIds}
          onPlace={handlePlaceSlate}
          onEdit={handleEditSlate}
          onCopy={onCopySlate}
          onDelete={onDeleteSlate}
        />
      </div>
    </div>
  );
};
