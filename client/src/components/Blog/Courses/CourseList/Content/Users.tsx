import React from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Divider,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { AddUser } from "./Modals/AddUser";
import { EditUser } from "./Modals/EditUser";
import { useDeleteUserMutation, useUsersQuery } from "@/services/usersHook";
import { User } from "@/components/Home/ts/types";


export default function Users() {
  const { data: session, status } = useSession(); 
  const [selectedUser, setSelectedUser] = React.useState<User>();
  const addUser = useDisclosure();
  const detailModal = useDisclosure();
  const editModal = useDisclosure();

  const { data: UsersResponse, error, isLoading } = useUsersQuery(); // Pobieranie użytkowników
  console.log(UsersResponse);
  const deleteUserMutation = useDeleteUserMutation({
    onSuccess: () => {
      // Odśwież listę kursów lub wykonaj inne akcje po sukcesie
      console.log("Użytkownik został usunięty!");
    },
    onError: (error:any) => {
      console.error("Błąd podczas usuwania użytkownika:", error);
    },
  });
  const handleDeleteUser = (email: string) => {
    console.log(email); // Dodaj to, aby upewnić się, że ID jest poprawne
    if (confirm("Czy na pewno chcesz usunąć teo użytkownika?")) {
      deleteUserMutation.mutate(email); // Wywołanie mutacji usuwania
      detailModal.onOpen();
      window.location.reload()
    }
    
  };

  // Przypisanie użytkowników do zmiennej users
  const users = UsersResponse?.users || [];
  // const handleUserClick = (userDetails) => {
  //   setSelectedUser(userDetails);
  //   detailModal.onOpen();
  // };

  return (
    <>
      <div className="bg-[#f5f1ec] flex flex-col gap-3 items-center justify-between border-2 border-[#333]/25 p-4 shadow-lg">
        <div>
          <h3 className="text-xl font-bold text-black gap-2 text-pretty leading-relaxed items-center flex place-items-center">
            Użytkownicy
            <span className="bg-green-700 text-white px-2 py-1 text-xs rounded-full">
              {users.length}
            </span>
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed text-justify">
            Poniżej znajduje się lista użytkowników. Jako administrator, masz
            możliwość zarządzania ich danymi – możesz dodawać nowych
            użytkowników, edytować istniejące profile oraz usuwać konta, które
            nie są już aktywne.
          </p>
        </div>
        <Divider className="h-[1px] w-full" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row gap-3 justify-end items-center">
          <Button
            onPress={addUser.onOpen}
            className="w-full lg:w-auto rounded text-white bg-green-700"
            endContent={<AddIcon />}
          >
            Dodaj Użytkownika
          </Button>
          {/* Modal dodawania użytkownika */}
          <AddUser addUser={addUser} />
        </div>
        <Divider className="h-[1px] w-full" />
        <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
          {users.length === 0 ? (
            <></>
          ) : (
            users.map((user) => (
              <Card
                key={user.id}
                shadow="lg"
                className="bg-[#f5f1ec] border-2 border-[#333]/25 rounded"
              >
                <CardHeader className="flex flex-col justify-start sm:flex-row items-start gap-3">
                  <div className="flex gap-3 items-center">
                    <Avatar
                      color="success"
                      className="bg-[#f5f1ec] border border-[#333]/25"
                      showFallback
                      src={user.avatar}
                    />
                    <p className="flex flex-col text-pretty text-justify">
                      {user.username}
                      <span className="text-tiny">{user.role}</span>
                    </p>
                  </div>
                </CardHeader>
                <Divider className="h-[1px] w-full" />
                <CardBody>
                  <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-pretty leading-relaxed">
                      <p className="flex flex-col">
                        <strong>Email:</strong>
                        {user.email}
                      </p>
                      <p className="flex flex-col">
                        <strong>Rola:</strong>
                        {user.role}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Button
                        color="success"
                        variant="flat"
                        className="rounded w-full"
                        onPress={() => {
                          setSelectedUser(user);
                          editModal.onOpen();
                        }}
                      >
                        Edytuj
                      </Button>
                      {/* Modal edycji użytkownika */}
                      <EditUser email={selectedUser?.email || ""} editModal={editModal} user={{
                        username:selectedUser?.username || "",
                        role:selectedUser?.role || "",
                      }} />
                      <Button
                        color="danger"
                        variant="flat"
                        className="rounded w-full"
                        onClick={()=>handleDeleteUser(user.email)}
                      >
                        Usuń
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))
          )}
        </div>
      </div>
    </>
  );
}

const AddIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-user"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
