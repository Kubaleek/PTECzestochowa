import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import CourseForm from "./Forms/CourseForm";

type AddModalType = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export const AddCourseForm = ({ addModal }: { addModal: AddModalType }) => {
  return (
    <Modal
      isOpen={addModal.isOpen}
      onOpenChange={addModal.onOpenChange}
      placement="center"
      backdrop="blur"
      scrollBehavior="inside"
      radius="sm"
      className="!bg-[#f5f1ec] border-1 shadow-lg"
    >
      <ModalContent>
        <ModalHeader>
          Dodaj Szkolenie
        </ModalHeader>
        <ModalBody className="mt-0">
          <CourseForm onClose={() => addModal.onOpenChange(false)} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
