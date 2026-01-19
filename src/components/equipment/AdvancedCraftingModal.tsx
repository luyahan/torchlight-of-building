import { i18n } from "@lingui/core";
import { Trans } from "@lingui/react/macro";
import { useCallback, useMemo, useState } from "react";
import { SLOT_TO_VALID_EQUIPMENT_TYPES } from "@/src/lib/constants";
import type { Gear as SaveDataGear } from "@/src/lib/save-data";
import { generateItemId } from "@/src/lib/storage";
import type { EquipmentType } from "@/src/tli/gear-data-types";
import { Modal, ModalActions, ModalButton } from "../ui/Modal";
import { SearchableSelect } from "../ui/SearchableSelect";

interface AdvancedCraftingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (item: SaveDataGear) => void;
}

export const AdvancedCraftingModal = ({
  isOpen,
  onClose,
  onSave,
}: AdvancedCraftingModalProps): React.ReactElement | null => {
  const [selectedEquipmentType, setSelectedEquipmentType] = useState<
    EquipmentType | undefined
  >(undefined);
  const [affixText, setAffixText] = useState("");

  // Get all unique equipment types from SLOT_TO_VALID_EQUIPMENT_TYPES
  const allEquipmentTypes = useMemo(() => {
    const types = new Set<EquipmentType>();
    for (const slotTypes of Object.values(SLOT_TO_VALID_EQUIPMENT_TYPES)) {
      for (const type of slotTypes) {
        types.add(type);
      }
    }
    return Array.from(types).sort();
  }, []);

  const equipmentTypeOptions = useMemo(
    () =>
      allEquipmentTypes.map((type) => ({ value: type, label: i18n._(type) })),
    [allEquipmentTypes],
  );

  const handleEquipmentTypeChange = useCallback(
    (value: EquipmentType | undefined) => {
      setSelectedEquipmentType(value);
    },
    [],
  );

  const handleAffixTextChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setAffixText(e.target.value);
    },
    [],
  );

  const handleSave = useCallback(() => {
    if (selectedEquipmentType === undefined) return;

    // Parse non-empty lines into custom_affixes array
    const customAffixes = affixText
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== "");

    const newItem: SaveDataGear = {
      id: generateItemId(),
      equipmentType: selectedEquipmentType,
      rarity: "rare",
      custom_affixes: customAffixes.length > 0 ? customAffixes : undefined,
    };

    onSave(newItem);

    // Reset state
    setSelectedEquipmentType(undefined);
    setAffixText("");
    onClose();
  }, [selectedEquipmentType, affixText, onSave, onClose]);

  const handleClose = useCallback(() => {
    setSelectedEquipmentType(undefined);
    setAffixText("");
    onClose();
  }, [onClose]);

  const canSave = selectedEquipmentType !== undefined;

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={i18n._("Advanced Crafting")}
      maxWidth="lg"
    >
      <div className="space-y-4">
        <div>
          <label
            htmlFor="adv-equipment-type-select"
            className="mb-2 block text-sm font-medium text-zinc-50"
          >
            <Trans>Equipment Type</Trans>
          </label>
          <SearchableSelect
            value={selectedEquipmentType}
            onChange={handleEquipmentTypeChange}
            options={equipmentTypeOptions}
            placeholder={i18n._("Select equipment type...")}
          />
        </div>

        <div>
          <label
            htmlFor="affix-text-input"
            className="mb-2 block text-sm font-medium text-zinc-50"
          >
            <Trans>Affix Lines (one per line)</Trans>
          </label>
          <textarea
            id="affix-text-input"
            value={affixText}
            onChange={handleAffixTextChange}
            placeholder={i18n._(
              "+10% Fire Damage\n+20 to Maximum Life\n+5% Attack Speed",
            )}
            rows={8}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-50 placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
          <p className="mt-1 text-xs text-zinc-500">
            <Trans>
              Enter raw affix text. Each line will be parsed as a separate
              affix.
            </Trans>
          </p>
        </div>
      </div>

      <div className="mt-6">
        <ModalActions>
          <ModalButton variant="secondary" onClick={handleClose} fullWidth>
            <Trans>Cancel</Trans>
          </ModalButton>
          <ModalButton onClick={handleSave} disabled={!canSave} fullWidth>
            <Trans>Save to Inventory</Trans>
          </ModalButton>
        </ModalActions>
      </div>
    </Modal>
  );
};
