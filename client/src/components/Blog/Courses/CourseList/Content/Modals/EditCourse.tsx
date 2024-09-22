import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import EditFormCourse from "./Forms/EditCourseForm";

type EditModalType = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export const EditCourseForm = ({ editModal }: { editModal: EditModalType }) => {
  return (
    <Modal
      isOpen={editModal.isOpen}
      onOpenChange={editModal.onOpenChange}
      placement="center"
      backdrop="blur"
      scrollBehavior="inside"
      radius="sm"
      className="!bg-[#f5f1ec] border-1 shadow-lg"
    >
      <ModalContent>
        <ModalHeader>
          Edytuj Szkolenie
        </ModalHeader>
        <ModalBody className="mt-0">
          <EditFormCourse onClose={() => editModal.onOpenChange(false)} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
