import React, { useEffect } from "react";
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
import { useDeleteUserMutation, useUsersQuery } from "@/services/usersHook";
import { User } from "@/components/Home/ts/types";
import EditUser from './Modal/UserEdit';

export default function Users() {
  const { data: session, status } = useSession();
  const [selectedUser, setSelectedUser] = React.useState<User>();
  const editModal = useDisclosure();

  const { data: UsersResponse, error, isLoading } = useUsersQuery();
  const users = UsersResponse?.data || [];
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
    if (confirm("Czy na pewno chcesz usunąć teo użytkownika?")) {
      deleteUserMutation.mutate(email); // Wywołanie mutacji usuwania
      window.location.reload()
    }
    
  };
  const formatDate = (dateString?:string) => {
    const date = new Date(dateString || "");
    return `${date.toLocaleDateString('pl-PL')} ${date.toLocaleTimeString('pl-PL', {
      hour: '2-digit',
      minute: '2-digit',
    })}`;
  };

  return (
    <>
      <div className="bg-[#fff] flex flex-col gap-3 justify-between border border-[#333]/25 p-4">
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
      <div className="bg-[#fff] flex flex-col gap-3 justify-between border border-[#333]/25 p-4">
         {users.length > 0 ? (
          users.map((user) => (
            <div className="grid grid-cols-1 border border-[#333]/25 shadow p-4 gap-3" key={user.id}>
            <div className="flex flex-col justify-between gap-3">
              <div className="flex gap-3">
                <Avatar showFallback src="https://images.unsplash.com/broken" />
                <p className="flex flex-col text-pretty text-justify">
                  {user.username}
                  <span className="text-tiny">{session?.user.role}</span>
                </p>
              </div>
              <div className="flex flex-col gap-1 sm:gap-0">
                <p className="flex flex-col sm:flex-row sm:gap-1 text-xs text-pretty leading-relaxed">
                  <span className="font-semibold">Email:</span>{" "}
                  {/* tu będzie email */} {user.email}
                </p>
                <p className="flex flex-col sm:flex-row sm:gap-1 text-xs text-pretty leading-relaxed">
                  <span className="font-semibold">Konto utworzone:</span>{" "}
                  {/* tu będzie created_at */} {formatDate(user.created_at)}
                </p>
                <p className="flex flex-col sm:flex-row sm:gap-1 text-xs text-pretty leading-relaxed">
                  <span className="font-semibold">Ostatnio Zalogował się:</span>{" "}
                  {/* tu będzie last_login */} {formatDate(user.last_login)}
                </p>
              </div>
              <div className="flex justify-end  items-center gap-2 px-0">
                <Button
                  size="sm"
                  color="success"
                  variant="bordered"
                  radius="none"
                  onPress={() => {
                    setSelectedUser(user);
                    editModal.onOpen();
                  }}
                 className="w-full sm:w-auto py-2 font-medium text-small"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-square-pen"
                  >
                    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                  </svg>
                </Button>
                <Button size="sm" color="danger" variant="bordered" radius="none" onClick={()=>handleDeleteUser(user.email)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-trash-2"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    <line x1="10" x2="10" y1="11" y2="17" />
                    <line x1="14" x2="14" y1="11" y2="17" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Brak dostępnych użytkowników.</p>
        )} 
   
      </div>

      <EditUser isOpen={editModal.isOpen} onClose={editModal.onClose} user={selectedUser} email={selectedUser ? selectedUser.email : ""}  />
    </>
  );
}
