import React from "react";
import EditCourseModal from "./Modals/EditCourse";
import AddCourseForm from "./Modals/AddCourse";
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
  useCoursesQuery,
  useDeleteCourseMutation,
} from "@/services/courseHooks";
import { Course, CoursesResponse } from "@/components/Home/ts/types";

export default function Test1() {
  const { data: session, status } = useSession(); // Use useSession to manage session state
  const addModal = useDisclosure();
  const editModal = useDisclosure();
  const detailModal = useDisclosure();
  const [selectedCourse, setSelectedCourse] = React.useState<Course>();
  const isAdmin = session?.user?.role === "administrator"; // Sprawdzenie, czy użytkownik jest administratorem

  const { data: CourseResponse, error, isLoading } = useCoursesQuery(); // Fetch courses
  const deleteCourseMutation = useDeleteCourseMutation({
    onSuccess: () => {
      // Odśwież listę kursów lub wykonaj inne akcje po sukcesie
      console.log("Kurs został usunięty!");
    },
    onError: (error: any) => {
      console.error("Błąd podczas usuwania kursu:", error);
    },
  });
  const courses = CourseResponse?.data || [];

  const handleDeleteCourse = (courseId: string) => {
    console.log(courseId); // Dodaj to, aby upewnić się, że ID jest poprawne
    if (confirm("Czy na pewno chcesz usunąć ten kurs?")) {
      deleteCourseMutation.mutate(courseId); // Wywołanie mutacji usuwania
      window.location.reload();
    }
  };

  const handleCourseClick = (course: Course) => {
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

  return (
    <>
      <div className="bg-[#f5f1ec] flex flex-col gap-3 justify-between border-2 border-[#333]/25 p-4 shadow-lg">
        <div>
          <h3 className="text-xl font-bold text-black gap-2 text-pretty leading-relaxed items-center flex place-items-center">
            Szkolenia
            <span className="bg-green-700 text-white px-2 py-1 text-xs rounded-full">
              {courses.length}
            </span>
          </h3>
          <p className="text-sm text-pretty leading-relaxed text-gray-700 text-justify text-clip">
            Oto lista dostępnych szkoleń.{" "}
            {isAdmin
              ? "Jako administrator, masz pełną kontrolę nad tymi zasobami – możesz dodawać nowe szkolenia, edytować istniejące oraz usuwać te, które są już nieaktualne lub niepotrzebne."
              : "Jako użytkownik możesz przeglądać dostępne szkolenia i zarejestrować się na te, które Cię interesują."}
          </p>
        </div>
        <Divider className="h-[1px] w-full" />
        <div className="flex flex-col gap-3">
          {isAdmin && (
            <div className="flex flex-col sm:flex-row gap-3 justify-end items-center">
              <Button
                onPress={addModal.onOpen}
                className="w-full lg:w-auto rounded text-white bg-green-700"
                endContent={<AddIcon />}
              >
                Dodaj Szkolenie
              </Button>
              <AddCourseForm addModal={addModal} />
            </div>
          )}

          {courses.length > 0 ? (
            <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
              {courses.map((course) => (
                <Card
                  key={course.id}
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
                          Szkolenie #{course.id}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <Divider className="h-[1px] w-full" />
                  <CardBody>
                    <Button
                      className="w-full lg:w-auto rounded text-white bg-green-700 text-small text-justify"
                      onClick={() => handleCourseClick(course)}
                    >
                      Sprawdź Informacje
                    </Button>
                  </CardBody>
                </Card>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      <Modal
        placement="center"
        backdrop="blur"
        scrollBehavior="inside"
        radius="sm"
        size="5xl"
        className="!bg-[#f5f1ec] border-1 shadow-lg "
        isOpen={detailModal.isOpen}
        onClose={detailModal.onClose}
      >
        <ModalContent>
          <ModalHeader>
            {selectedCourse ? selectedCourse.name : "Szczegóły Kursu"}
          </ModalHeader>
          <ModalBody>
            {selectedCourse && (
              <div className="flex flex-col gap-3 text-pretty leading-relaxed">
                <p className="flex flex-col">
                  <strong>Opis Szkolenia:</strong> {selectedCourse.description}
                </p>
                <p className="flex flex-col">
                  <strong>Data Szkolenia:</strong> {selectedCourse.date}
                </p>
                <p className="flex flex-col">
                  <strong>Zakończenie Szkolenia:</strong> {selectedCourse.endDate}
                </p>
                <p className="flex flex-col">
                  <strong>Plik Szkoleniowy:</strong>
                  <Link
                    href={selectedCourse.course_link}
                    color="success"
                    className="text-green-800"
                    size="sm"
                  >
                    {" "}
                    Plik do Pobrania
                  </Link>
                </p>
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            {isAdmin && (
              <div className="flex gap-3">
                <Button
                  color="success"
                  variant="flat"
                  className="rounded w-full bg-green-700 !text-white"
                  onPress={editModal.onOpen}
                >
                  Edytuj
                </Button>
                {/* Fixed courseId */}
                <EditCourseModal
                  courseId={selectedCourse?.id || 0}
                  isOpen={editModal.isOpen} 
                  onOpenChange={editModal.onOpenChange} 
                  onOpen={() => editModal.onOpen()} 
                  onClose={() => editModal.onClose()} 
                />
                <Button
                  color="danger"
                  variant="flat"
                  className="rounded w-full"
                  onClick={() =>
                    handleDeleteCourse(selectedCourse?.id.toString() || "0")
                  }
                >
                  Usuń
                </Button>
              </div>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
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
    className="lucide lucide-book-plus"
  >
    <path d="M12 7v6" />
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
    <path d="M9 10h6" />
  </svg>
);
