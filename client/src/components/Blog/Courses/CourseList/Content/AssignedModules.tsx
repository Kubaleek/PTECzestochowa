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
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import {
  useCourseByUserQuery,
  useCoursesQuery,
  useCoursesWithUsersQuery,
  useDeleteCourseMutation,
  useDeleteUserFromCourseMutation,
} from "@/services/courseHooks";
import { CoursesResponse } from "@/components/Home/ts/types";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import GroupIcon from "@mui/icons-material/Group";
import DeleteIcon from "@mui/icons-material/Delete";
import AssignCourse from "./Modal/CourseAssign";

export default function AssignedModules() {
  const { data: session, status } = useSession(); // Use useSession to manage session state
  const isAdmin = session?.user?.role === "administrator"; // Sprawdzenie, czy użytkownik jest administratorem
  const addModal = useDisclosure();
  const assginModal = useDisclosure();
  const editModal = useDisclosure();

  const detailModal = useDisclosure();
  const [selectedCourse, setSelectedCourse] = React.useState(null);

  const { data: CourseResponse, error, isLoading } = useCoursesWithUsersQuery();
  const courses = CourseResponse?.data || [];

  const deleteCourseMutation = useDeleteCourseMutation({
    onSuccess: () => {
      console.log("Kurs został usunięty!");
    },
    onError: (error: any) => {
      console.error("Błąd podczas usuwania kursu:", error);
    },
  });
  const deleteUserFromCourseMutation = useDeleteUserFromCourseMutation({
    onSuccess: () => {
      console.log("Użytkownik został usunięty z kursu!");
      detailModal.onClose(); // Zamknij modal po sukcesie
    },
    onError: (error: any) => {
      console.error("Błąd podczas usuwania użytkownika z kursu:", error);
    },
  });

  const handleDeleteUserFromCourse = (userID: number, courseID: number) => {
    if (confirm("Czy na pewno chcesz usunąć tego użytkownika z kursu?")) {
      deleteUserFromCourseMutation.mutate({ userID, courseID }); // Przekazujesz obiekt
      window.location.reload();
    }
  };

  return (
    <>
      <div className="bg-[#fff] flex flex-col gap-3 justify-between border border-[#333]/25 p-4">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-black gap-2 text-pretty leading-relaxed items-center flex place-items-center">
            Przydzielone Szkolenia
            <span className="bg-green-700 text-white px-2 py-1 text-xs rounded-full">
              {courses.length}
            </span>
          </h3>
          <p className="text-xs sm:text-small text-pretty leading-relaxed text-gray-700 text-justify text-clip">
            <span>
              {isAdmin ? (
                <>
                  Oto lista przypisanych szkoleń dla użytkowników. Tutaj
                  znajdziesz informacje o szkoleniach przypisanych do
                  użytkowników. Jako administrator, masz możliwość zarządzania
                  tymi przypisaniami.
                </>
              ) : (
                <>
                  Jako użytkownik, możesz przeglądać przypisane szkolenia, ale
                  nie masz możliwości ich edytowania ani usuwania.
                </>
              )}
            </span>
          </p>
        </div>
        <Divider className="h-[1px] w-full" />
      </div>
      {isAdmin && (
        <div className="flex flex-col sm:flex-row gap-3 justify-end items-center">
          <Button
            onPress={assginModal.onOpen}
            className="w-full lg:w-auto rounded text-white bg-green-700"
            endContent={
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
                className="lucide lucide-book-plus"
              >
                <path d="M12 7v6" />
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                <path d="M9 10h6" />
              </svg>
            }
          >
            Przydziel Szkolenie
          </Button>
        </div>
      )}
      <div className="bg-[#fff] flex flex-col gap-3 justify-between border border-[#333]/25 p-4">
        {courses.length > 0 ? (
          courses.map((course) => (
            <div
              key={course.course_id}
              className="grid grid-cols-1 lg:grid-cols-2 border border-[#333]/25 shadow p-4 gap-3"
            >
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-xs text-green-800">
                    Szkolenie #{course.course_id}
                  </p>
                  <p className="flex flex-col text-xs sm:text-small text-pretty leading-relaxed ">
                    <strong>Szkolenie:</strong> {course.name}
                  </p>
                  <p className="text-xs text-[#333]">
                    Uczestnicy {course.users.length}
                  </p>
                </div>
                <div>
                  <p className="flex flex-col gap-2 text-xs sm:text-small text-pretty leading-relaxed ">
                    <strong>Przydzieleni do Szkolenia:</strong>
                    <span className="grid grid-cols-1 xl:grid-cols-2 max-w-fit gap-3">
                      {isAdmin
                        ? course.users.map((e) => (
                            <Chip
                              key={e.id}
                              avatar={
                                <Avatar>
                                  <GroupIcon />
                                </Avatar>
                              }
                              label={`${e.username}`}
                              variant="filled"
                              onDelete={() =>
                                handleDeleteUserFromCourse(
                                  e.id,
                                  course.course_id
                                )
                              }
                              deleteIcon={
                                <DeleteIcon
                                  style={{
                                    color: "red",
                                    fontSize: "18px",
                                  }}
                                />
                              }
                            />
                          ))
                        : course.users.map((e) => (
                            <Chip
                              key={e.id}
                              avatar={
                                <Avatar>
                                  <GroupIcon />
                                </Avatar>
                              }
                              label={`${e.username}`}
                              variant="outlined"
                            />
                          ))}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Brak przydzielonych szkoleń.</p>
        )}
      </div>

      <AssignCourse assginModal={assginModal} />
    </>
  );
}
