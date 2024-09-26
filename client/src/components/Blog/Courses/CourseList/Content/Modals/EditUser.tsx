import {
    Button,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "@nextui-org/react";
import EditUsersForm from "./Forms/EditUsersForm";
  
  type EditModalType = {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
  };
  
  export const EditUser = ({ editModal }: { editModal: EditModalType }) => {
    
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
            Edytuj Użytkownika
          </ModalHeader>
          <ModalBody className="mt-0">
            <EditUsersForm onClose={() => editModal.onOpenChange(false)} />
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };