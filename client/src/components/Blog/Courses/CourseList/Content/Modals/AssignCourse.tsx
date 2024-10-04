import {
    Button,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "@nextui-org/react";
  import AssignFormCourse from "./Forms/AssignCourseForm";
  
  type AssignModalType = {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
  };
  
  export const AssignCourseForm = ({ assginModal }: { assginModal: AssignModalType }) => {
    return (
      <Modal
        isOpen={assginModal.isOpen}
        onOpenChange={assginModal.onOpenChange}
        placement="center"
        backdrop="blur"
        scrollBehavior="inside"
        radius="sm"
        className="!bg-[#f5f1ec] border-1 shadow-lg"
      >
        <ModalContent>
          <ModalHeader>
            Przydziel Szkolenie
          </ModalHeader>
          <ModalBody className="mt-0">
            <AssignFormCourse onClose={() => assginModal.onOpenChange(false)} />
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };
  