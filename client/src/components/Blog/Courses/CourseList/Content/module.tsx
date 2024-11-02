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
  useCoursesQuery,
  useDeleteCourseMutation,
} from "@/services/courseHooks";
import { Course, CoursesResponse } from "@/components/Home/ts/types";
import toast, { Toaster } from "react-hot-toast";
import CourseAdd from "./Modal/CourseAdd";
import { CourseEdit } from "./Modal/CourseEdit";

export default function Modules() {
  const { data: session, status } = useSession();
  const addModal = useDisclosure();
  const editModal = useDisclosure();
  const detailModal = useDisclosure();
  const [selectedCourse, setSelectedCourse] = React.useState<Course>();
  const isAdmin = session?.user?.role === "administrator";

  const { data: CourseResponse, error, isLoading } = useCoursesQuery();

  const courses = CourseResponse?.data || [];

  const deleteCourseMutation = useDeleteCourseMutation({
    onSuccess: () => {
      toast.success("Kurs został usunięty!");
      window.location.reload();
    },
    onError: (error: any) => {
      toast.error("Błąd podczas usuwania kursu: " + error.message);
    },
  });

  const handleDeleteCourse = (courseId: string) => {
    if (confirm("Czy na pewno chcesz usunąć ten kurs?")) {
      deleteCourseMutation.mutate(courseId);
    }
  };

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />

      <div className="bg-[#fff] flex flex-col gap-3 justify-between border border-[#333]/25 p-4">
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
      </div>

      {isAdmin && (
        <div className="flex flex-col sm:flex-row gap-3 justify-end items-center">
          <Button
            className="w-full lg:w-auto rounded text-white bg-green-700"
            onClick={addModal.onOpen}
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
            Dodaj Szkolenie
          </Button>
        </div>
      )}

      <div className="bg-[#fff] flex flex-col gap-3 justify-between border border-[#333]/25 p-4">
        {courses.length > 0 ? (
          <div className="flex flex-col gap-3">
            {courses.map((course) => (
              <div
                key={course.id}
                className="grid grid-cols-1 lg:grid-cols-2 border border-[#333]/25 shadow p-4 gap-3"
              >
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-xs text-green-800">
                      Szkolenie #{course.id}
                    </p>
                    <p className="flex flex-col text-xs sm:text-small text-pretty leading-relaxed ">
                      <strong>Szkolenie:</strong> {course.name}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="flex flex-col gap-1 text-xs sm:text-small text-pretty leading-relaxed">
                      <strong>Opis Szkolenia:</strong> {course.description}
                    </p>
                    <p className="flex flex-col gap-1 text-xs sm:text-small text-pretty leading-relaxed">
                      <strong>Data Szkolenia:</strong> {course.date}
                    </p>
                    <p className="flex flex-col gap-1 text-xs sm:text-small text-pretty leading-relaxed">
                      <strong>Koniec Szkolenia:</strong>{" "}
                      {course.endDate || "W trakcie"}
                    </p>
                    <p className="flex flex-col gap-1 text-xs sm:text-small text-pretty leading-relaxed">
                      <strong>Plik Szkoleniowy:</strong>{" "}
                      <Link
                        href={course.course_link}
                        color="success"
                        className="text-green-800 max-w-fit"
                        size="sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-download"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" x2="12" y1="15" y2="3" />
                        </svg>
                      </Link>
                    </p>
                  </div>
                </div>
                {isAdmin && (
                  <div className="flex justify-end items-center gap-2 px-0">
                    <Button
                      size="sm"
                      color="success"
                      variant="bordered"
                      onPress={editModal.onOpen}
                      radius="none"
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
                    <Button
                      size="sm"
                      color="danger"
                      variant="bordered"
                      radius="none"
                      onClick={() => handleDeleteCourse(course.id.toString())}
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
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Brak dostępnych szkoleń.</p>
        )}
      </div>

      <CourseAdd addModal={addModal} />
      <CourseEdit
        courseId={selectedCourse?.id || 0}
        editModal={editModal}/>
    </>
  );
}
