import {
    Button,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "@nextui-org/react";
  import { AddUserForm } from "./Forms/AddUserForm";
  
  type AddUserModalType = {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
  };
  
  export const AddUser = ({ addUser }: { addUser: AddUserModalType }) => {
    return (
      <Modal
        isOpen={addUser.isOpen}
        onOpenChange={addUser.onOpenChange}
        placement="center"
        backdrop="blur"
        scrollBehavior="inside"
        radius="sm"
        className="!bg-[#f5f1ec] border-1 shadow-lg"
      >
        <ModalContent>
          <ModalHeader>
            Dodaj Użytkownika
          </ModalHeader>
          <ModalBody className="mt-0">
            <AddUserForm onClose={() => addUser.onOpenChange(false)} />
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };
  