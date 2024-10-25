import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@nextui-org/react";
import EditUsersForm from "./Forms/EditUsersForm";
import { TeditUser } from "@/components/Home/ts/types";

type EditModalType = {
  isOpen: boolean;
  onClose: () => void;
};

export const EditUser = ({
  editModal,
  email,
  user,
}: {
  editModal: EditModalType;
  email: string;
  user: TeditUser
}) => {
  return (
    <Modal
      isOpen={editModal.isOpen}
      onClose={editModal.onClose}
      placement="center"
      backdrop="blur"
      scrollBehavior="inside"
      radius="sm"
      className="!bg-[#f5f1ec] border-1 shadow-lg"
    >
      <ModalContent>
        <ModalHeader>Edytuj Użytkownika</ModalHeader>
        <ModalBody className="mt-0">
          {/* Pass onClose and user data to the form */}
          <EditUsersForm
            onClose={editModal.onClose}
            email={email}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
