"use client";

import { useState } from "react";
import { RawDivinityPage, RawDivinitySlate } from "@/src/tli/core";
import {
  GRID_MASK,
  GRID_ROWS,
  GRID_COLS,
  findSlateAtCell,
  findOverlappingCells,
  findOutOfBoundsCells,
} from "@/src/app/lib/divinity-grid";
import { DivinityGridCell } from "./DivinityGridCell";

interface DivinityGridProps {
  divinityPage: RawDivinityPage;
  divinitySlateList: RawDivinitySlate[];
  onClickPlacedSlate: (slateId: string) => void;
  onMoveSlate: (
    slateId: string,
    position: { row: number; col: number },
  ) => void;
}

export const DivinityGrid: React.FC<DivinityGridProps> = ({
  divinityPage,
  divinitySlateList,
  onClickPlacedSlate,
  onMoveSlate,
}) => {
  const [draggedSlateId, setDraggedSlateId] = useState<string | undefined>();
  const [dropTarget, setDropTarget] = useState<
    { row: number; col: number } | undefined
  >();

  const overlappingCells = findOverlappingCells(
    divinitySlateList,
    divinityPage.placedSlates,
  );
  const outOfBoundsCells = findOutOfBoundsCells(
    divinitySlateList,
    divinityPage.placedSlates,
  );
  const invalidCells = new Set([...overlappingCells, ...outOfBoundsCells]);
  const hasInvalidState = invalidCells.size > 0;

  const getCellSlateId = (row: number, col: number): string | undefined => {
    const placed = findSlateAtCell(
      row,
      col,
      divinitySlateList,
      divinityPage.placedSlates,
    );
    return placed?.slateId;
  };

  const getSlateEdges = (
    row: number,
    col: number,
    slateId: string | undefined,
  ) => {
    if (!slateId) return undefined;
    return {
      top: getCellSlateId(row - 1, col) !== slateId,
      right: getCellSlateId(row, col + 1) !== slateId,
      bottom: getCellSlateId(row + 1, col) !== slateId,
      left: getCellSlateId(row, col - 1) !== slateId,
    };
  };

  const handleCellClick = (row: number, col: number) => {
    const placed = findSlateAtCell(
      row,
      col,
      divinitySlateList,
      divinityPage.placedSlates,
    );
    if (placed) {
      onClickPlacedSlate(placed.slateId);
    }
  };

  const handleDragStart = (slateId: string) => {
    setDraggedSlateId(slateId);
  };

  const handleDragEnd = () => {
    setDraggedSlateId(undefined);
    setDropTarget(undefined);
  };

  const handleDragOver = (row: number, col: number, e: React.DragEvent) => {
    e.preventDefault();
    if (draggedSlateId) {
      setDropTarget({ row, col });
    }
  };

  const handleDrop = (row: number, col: number) => {
    if (draggedSlateId) {
      onMoveSlate(draggedSlateId, { row, col });
    }
    setDraggedSlateId(undefined);
    setDropTarget(undefined);
  };

  const rows = [];
  for (let row = 0; row < GRID_ROWS; row++) {
    const cells = [];
    for (let col = 0; col < GRID_COLS; col++) {
      const isValid = GRID_MASK[row][col] === 1;
      const cellSlateId = getCellSlateId(row, col);
      const cellSlate = cellSlateId
        ? divinitySlateList.find((s) => s.id === cellSlateId)
        : undefined;
      const slateEdges = getSlateEdges(row, col, cellSlateId);
      const isInvalid = invalidCells.has(`${row},${col}`);
      const isDropTarget = dropTarget?.row === row && dropTarget?.col === col;

      cells.push(
        <DivinityGridCell
          key={`${row}-${col}`}
          row={row}
          col={col}
          isValid={isValid}
          slate={cellSlate}
          slateEdges={slateEdges}
          isInvalid={isInvalid}
          isDropTarget={isDropTarget}
          isDragging={draggedSlateId === cellSlateId}
          onClick={() => handleCellClick(row, col)}
          onDragStart={
            cellSlateId ? () => handleDragStart(cellSlateId) : undefined
          }
          onDragEnd={handleDragEnd}
          onDragOver={(e) => handleDragOver(row, col, e)}
          onDrop={() => handleDrop(row, col)}
        />,
      );
    }
    rows.push(
      <div key={row} className="flex">
        {cells}
      </div>,
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="inline-block rounded-lg bg-zinc-900 p-2">{rows}</div>
      {hasInvalidState && (
        <div className="flex items-center gap-2 rounded bg-red-900/50 px-3 py-2 text-sm text-red-200">
          <span className="text-red-400">⚠</span>
          <span>
            {overlappingCells.size > 0 && outOfBoundsCells.size > 0
              ? "Slates are overlapping and out of bounds"
              : overlappingCells.size > 0
                ? "Slates are overlapping"
                : "Slate is out of bounds"}
          </span>
        </div>
      )}
    </div>
  );
};
