"use client";

import { RawDivinitySlate } from "@/src/tli/core";
import { GOD_COLORS } from "@/src/app/lib/divinity-utils";

interface SlateEdges {
  top: boolean;
  right: boolean;
  bottom: boolean;
  left: boolean;
}

interface DivinityGridCellProps {
  row: number;
  col: number;
  isValid: boolean;
  slate: RawDivinitySlate | undefined;
  slateEdges: SlateEdges | undefined;
  isInvalid: boolean;
  isDropTarget: boolean;
  isDragging: boolean;
  onClick: () => void;
  onDragStart: (() => void) | undefined;
  onDragEnd: () => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: () => void;
}

export const DivinityGridCell: React.FC<DivinityGridCellProps> = ({
  isValid,
  slate,
  slateEdges,
  isInvalid,
  isDropTarget,
  isDragging,
  onClick,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDrop,
}) => {
  if (!isValid) {
    return (
      <div className="h-12 w-12" onDragOver={onDragOver} onDrop={onDrop} />
    );
  }

  const getBackgroundClass = (): string => {
    if (isDropTarget) {
      return "bg-white/30";
    }

    if (slate) {
      if (isInvalid) {
        return "bg-red-500";
      }
      return GOD_COLORS[slate.god];
    }

    return "bg-zinc-800";
  };

  const getBorderClass = (): string => {
    if (isDropTarget) {
      return "border-2 border-white";
    }
    if (isInvalid) {
      return "border-2 border-red-400";
    }
    return "border border-zinc-700";
  };

  const getOutlineStyle = (): React.CSSProperties => {
    if (!slate || !slateEdges || isInvalid) return {};

    const borderColor = "rgba(255, 255, 255, 0.7)";
    const borderWidth = "3px";
    const style: React.CSSProperties = { boxSizing: "border-box" };

    if (slateEdges.top) style.borderTop = `${borderWidth} solid ${borderColor}`;
    if (slateEdges.right)
      style.borderRight = `${borderWidth} solid ${borderColor}`;
    if (slateEdges.bottom)
      style.borderBottom = `${borderWidth} solid ${borderColor}`;
    if (slateEdges.left)
      style.borderLeft = `${borderWidth} solid ${borderColor}`;

    return style;
  };

  const getCursorClass = (): string => {
    if (slate) {
      return isDragging ? "cursor-grabbing" : "cursor-grab";
    }
    return "cursor-default";
  };

  const handleDragStart = (e: React.DragEvent) => {
    if (onDragStart) {
      e.dataTransfer.effectAllowed = "move";
      onDragStart();
    }
  };

  return (
    <div
      className={`h-12 w-12 transition-colors ${getBackgroundClass()} ${getBorderClass()} ${getCursorClass()} ${isDragging ? "opacity-50" : ""}`}
      style={getOutlineStyle()}
      draggable={!!slate}
      onClick={onClick}
      onDragStart={handleDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDrop={onDrop}
    />
  );
};
