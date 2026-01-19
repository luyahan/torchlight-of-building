import { Modal, ModalActions, ModalButton } from "@/src/components/ui/Modal";
import { useStorageErrorStore } from "@/src/stores/storageErrorStore";

export const StorageErrorModal = (): React.ReactNode => {
  const isOpen = useStorageErrorStore((state) => state.isStorageErrorOpen);
  const hideStorageError = useStorageErrorStore(
    (state) => state.hideStorageError,
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={hideStorageError}
      title="Storage Full"
      maxWidth="md"
    >
      <div className="space-y-4 text-zinc-300">
        <p>
          Your browser's storage quota has been exceeded. Unable to save your
          build data.
        </p>
        <p>
          To free up space, go back to the the{" "}
          <span className="text-amber-400 font-medium">Saves</span> page and
          delete old builds you no longer need.
        </p>
      </div>
      <div className="mt-6">
        <ModalActions>
          <ModalButton onClick={hideStorageError} fullWidth>
            I Understand
          </ModalButton>
        </ModalActions>
      </div>
    </Modal>
  );
};
