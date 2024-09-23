import React from 'react';
import { EditCourseForm } from "./Modals/EditCourse";
import { AddCourseForm  } from "./Modals/AddCourse";
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
import { useCoursesQuery } from "@/services/courseHooks";

export default function Test1() {
  const { data: session } = useSession();
  const addModal = useDisclosure();
  const editModal = useDisclosure();
  
  const detailModal = useDisclosure();
  const [selectedCourse, setSelectedCourse] = React.useState(null);

  const {
    data: CourseResponse,
    error,
    isLoading,
  } = useCoursesQuery();
  const courses = CourseResponse?.data || [];

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    detailModal.onOpen();
  };

  return (
    <>
      <div className="bg-[#f5f1ec] flex flex-col gap-3 tems-center justify-between border-2 border-[#333]/25 p-4 shadow-lg">
        <div>
          <h3 className="text-xl font-bold text-black gap-2 text-pretty leading-relaxed items-center flex place-items-center">
            Szkolenia
            <span className="bg-green-700 text-white px-2 py-1 text-xs rounded-full">
              {courses.length}
            </span>
          </h3>
          <p className="text-sm text-pretty leading-relaxed text-gray-700 text-justify text-clip">
            Oto lista dostępnych szkoleń. Jako administrator, masz pełną
            kontrolę nad tymi zasobami – możesz dodawać nowe szkolenia, edytować
            istniejące oraz usuwać te, które są już nieaktualne lub
            niepotrzebne.
          </p>
        </div>
        <Divider className="h-[1px] w-full" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-end items-center">
          <Button
            onPress={addModal.onOpen} 
            className="w-full lg:w-auto rounded text-white bg-green-700"
            endContent={<AddIcon />}
          >
            Dodaj Szkolenie
          </Button>
          <AddCourseForm addModal={addModal} />
        </div>
        <Divider className="h-[1px] w-full" />
        {courses.length > 0 ? (
          <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            {courses.map(course => (
              <Card key={course.id} shadow="lg" className="bg-[#f5f1ec] border-2 border-[#333]/25 rounded">
                <CardHeader className="flex flex-col just sm:flex-row items-center gap-3">
                  <div className="flex flex-col gap-2">
                    <CourseIcon />
                    <div className="flex flex-col">
                      <p className="text-small font-medium text-justify">{course.name}</p>
                      <p className="text-small text-default-500">Szkolenie #{course.id}</p>
                    </div>
                  </div>
                </CardHeader>
                <Divider className="h-[1px] w-full" />
                <CardBody>
                  <Button className="w-full lg:w-auto rounded text-white bg-green-700 text-small text-justify" onClick={() => handleCourseClick(course)} >Sprawdź Informacje</Button>
                </CardBody>
              </Card>
            ))}
          </div>
        ) : (
          <div>No courses found.</div>
        )}
      </div>

      <Modal placement="center"
      backdrop="blur"
      scrollBehavior="inside"
      radius="sm"
      size='3xl'
      className="!bg-[#f5f1ec] border-1 shadow-lg" isOpen={detailModal.isOpen} onClose={detailModal.onClose}>
        <ModalContent>
          <ModalHeader>
            {selectedCourse ? selectedCourse.name : "Szczegóły Kursu"}
          </ModalHeader>
          <ModalBody>
            {selectedCourse && (
              <div className="flex flex-col gap-3">
                <p><strong>Opis Szkolenia:</strong> {selectedCourse.description}</p>
                <p><strong>Data Szkolenia:</strong> {selectedCourse.date}</p>
                <p>
                  <strong>Plik Szkoleniowy:</strong>
                  <Link href={selectedCourse.course_link} color="success"> Plik do Pobrania</Link>
                </p>
                <p><strong>Status Szkolenia:</strong> {selectedCourse.course_status}</p>
                <p><strong>Certyfikat Szkolenia:</strong> {selectedCourse.certificate ? "Dostępny" : "Niedostępny"}</p>
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <div className="flex gap-3">
                  <Button
                    color="success"
                    variant="flat"
                    className="rounded w-full"
                    onPress={editModal.onOpen}
                  >
                    Edytuj
                  </Button>
                  <EditCourseForm editModal={editModal} />
                  <Button
                    color="danger"
                    variant="flat"
                    className="rounded w-full"
                  >
                    Usuń
                  </Button>
                </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const AddIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-plus">
    <path d="M12 7v6" />
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
    <path d="M9 10h6" />
  </svg>
);

const CourseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 lucide lucide-book-open-check">
    <path d="M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z" />
    <path d="m16 12 2 2 4-4" />
    <path d="M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3" />
  </svg>
);
