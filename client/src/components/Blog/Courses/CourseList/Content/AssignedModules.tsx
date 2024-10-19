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
import AssignCourseModal from "./Modals/AssignCourse";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import GroupIcon from "@mui/icons-material/Group";
import DeleteIcon from "@mui/icons-material/Delete";

export default function AssignedModules() {
  const { data: session, status } = useSession(); // Use useSession to manage session state
  const isAdmin = session?.user?.role === "administrator"; // Sprawdzenie, czy użytkownik jest administratorem
  const addModal = useDisclosure();
  const assginModal = useDisclosure();
  const editModal = useDisclosure();

  const detailModal = useDisclosure();
  const [selectedCourse, setSelectedCourse] = React.useState(null);

  const { data: CourseResponse, error, isLoading } = useCoursesWithUsersQuery(); // Fetch courses
  const deleteCourseMutation = useDeleteCourseMutation({
    onSuccess: () => {
      // Odśwież listę kursów lub wykonaj inne akcje po sukcesie
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

  const courses = CourseResponse?.data || [];
  // const handleDeleteCourse = (courseId: string) => {
  //   console.log(courseId); // Dodaj to, aby upewnić się, że ID jest poprawne
  //   if (confirm("Czy na pewno chcesz usunąć ten kurs?")) {
  //     deleteCourseMutation.mutate(courseId); // Wywołanie mutacji usuwania
  //     window.location.reload();
  //   }
  // };
  const handleDeleteUserFromCourse = (userID: number, courseID: number) => {
    if (confirm("Czy na pewno chcesz usunąć tego użytkownika z kursu?")) {
      deleteUserFromCourseMutation.mutate({ userID, courseID }); // Przekazujesz obiekt
      window.location.reload();
    }
  };

  const handleCourseClick = (course: any) => {
    setSelectedCourse(course);
    detailModal.onOpen();
  };
  const CourseIcon = () => (
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
  );
  const AssignCourse = () => (
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
      className="lucide lucide-handshake"
    >
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </svg>
  );
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <>
      <div className="bg-[#f5f1ec] flex flex-col gap-3 justify-between border-2 border-[#333]/25 p-4 shadow-lg">
        <div>
          <h3 className="text-xl font-bold text-black gap-2 text-pretty leading-relaxed items-center flex place-items-center">
            Przydzielone Szkolenia
            <span className="bg-green-700 text-white px-2 py-1 text-xs rounded-full">
              {courses.length}
            </span>
          </h3>
          <p className="text-sm text-pretty leading-relaxed text-gray-700 text-justify text-clip">
            Oto lista przypisanych szkoleń dla użytkowników..{" "}
            <span>
              {isAdmin ? (
                <>
                  Jako administrator, masz możliwość zarządzania tymi
                  przypisaniami.
                </>
              ) : (
                <>
                  Jako użytkownik, możesz przeglądać swoje przepisane szkolenia.
                </>
              )}
            </span>
          </p>
        </div>
        <Divider className="h-[1px] w-full" />
        <div className="flex flex-col gap-3">
          {isAdmin && (
            <div className="flex flex-col sm:flex-row gap-3 justify-end items-center">
              <Button
                onPress={assginModal.onOpen}
                className="w-full lg:w-auto rounded text-white bg-green-700"
                endContent={<AssignCourse />}
              >
                Przydziel Szkolenie
              </Button>
              <AssignCourseModal assignModal={assginModal} />
            </div>
          )}
          <div className="gap-6 grid grid-cols-1 xl:grid-cols-2">
            {courses.map((course) => (
              <div key={course.course_id}>
                <Card
                  shadow="lg"
                  className="bg-[#f8f7f5] border-2 border-[#333]/25 rounded"
                >
                  <CardHeader className="flex flex-col justify-start sm:flex-row items-start gap-3">
                    <div className="flex flex-col gap-2">
                      <CourseIcon />
                      <div className="flex flex-col">
                        <p className="text-small font-medium text-justify">
                          {course.name}
                        </p>
                        <p className="text-small text-default-500">
                          Szkolenie #{course.course_id}
                        </p>
                        <p className="text-small text-default-500">
                          Uczestnicy: {course.users.length}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <Divider className="h-[1px] w-full" />
                  <CardBody>
                    <Button
                      className="w-full lg:w-auto rounded text-white bg-green-700 text-small text-justify"
                      onClick={() => handleCourseClick(courses)}
                    >
                      Sprawdź Informacje
                    </Button>
                  </CardBody>
                </Card>

                <Modal
                  placement="center"
                  backdrop="blur"
                  scrollBehavior="inside"
                  radius="sm"
                  size="sm"
                  className="!bg-[#f5f1ec] border-1 shadow-lg "
                  isOpen={detailModal.isOpen}
                  onClose={detailModal.onClose}
                >
                  <ModalContent>
                    <ModalHeader>{course.name}</ModalHeader>
                    <ModalBody className="mt-0 pt-0">
                      {selectedCourse && (
                        <div className="flex flex-col gap-3 text-pretty leading-relaxed">
                          <p className="flex flex-col">
                            <strong>Szkolenie:</strong> {course.name}
                          </p>
                          {/* <p className="flex flex-col">
                          <strong>Status Szkolenia:</strong>Ukończony
                        </p>
                        <p className="flex flex-col">
                          <strong>Certyfikat:</strong>
                          <Link
                            href={""}
                            color="success"
                            className="text-green-800"
                            size="sm"
                          >
                            {" "}
                            Plik do Pobrania
                          </Link>
                        </p> */}
                          <p className="flex flex-col gap-2">
                            <strong>Przydzieleni do Szkolenia:</strong>

                            <span className="grid grid-cols-2 gap-3">
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
                                      variant="outlined"
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
                      )}
                    </ModalBody>
                    <ModalFooter>
                      {isAdmin && (
                        <div className="flex gap-3">
                          <Button
                            color="danger"
                            variant="flat"
                            className="rounded w-full"
                          >
                            Usuń
                          </Button>
                        </div>
                      )}
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
