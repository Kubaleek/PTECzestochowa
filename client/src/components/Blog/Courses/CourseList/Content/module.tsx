import React from 'react';
import { EditCourseForm } from "./Modals/EditCourse";
import { AddCourseForm } from "./Modals/AddCourse";
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
import { useCoursesQuery, useDeleteCourseMutation } from "@/services/courseHooks"; 
import { Course, CoursesResponse } from '@/components/Home/ts/types'; 

export default function Test1() {
  const { data: session, status } = useSession(); // Use useSession to manage session state
  const addModal = useDisclosure();
  const editModal = useDisclosure();
  const detailModal = useDisclosure();
  const [selectedCourse, setSelectedCourse] = React.useState<Course>();
  const isAdmin = session?.user?.role === 'administrator'; // Sprawdzenie, czy użytkownik jest administratorem

  const {
    data: CourseResponse,
    error,
    isLoading,
  } = useCoursesQuery(); // Fetch courses
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

  const handleCourseClick = (course:Course) => {
    setSelectedCourse(course);
    detailModal.onOpen();
  };

  const CourseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-plus">
      <path d="M12 7v6" />
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="M9 10h6" />
    </svg>
  );

  return (
    <>
    
    </>
  );
}

