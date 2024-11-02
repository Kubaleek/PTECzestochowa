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
import { useCompletedCoursesQuery } from "@/services/courseHooks";

export default function CompletedModule() {
  const { data: session, status } = useSession(); // Use useSession to manage session state

  const {
    data: CourseResponse,
    error,
    isLoading,
  } = useCompletedCoursesQuery(`${session?.user.id}`); // Fetch courses

  const courses = CourseResponse?.data || [];
  return (
    <>
      <div className="bg-[#fff] flex flex-col gap-3 justify-between border border-[#333]/25 p-4">
        <div>
          <h3 className="text-xl font-bold text-black gap-2 text-pretty leading-relaxed items-center flex place-items-center">
            Twoje Ukończone Szkolenia
            <span className="bg-green-700 text-white px-2 py-1 text-xs rounded-full">
              {courses.length}
            </span>
          </h3>
          <p className="text-sm text-pretty leading-relaxed text-gray-700 text-justify text-clip">
            Oto twoje ukończone szkolenia, które odbyłeś. Możesz teraz odebrać
            swój certyfikat.
          </p>
        </div>
        <Divider className="h-[1px] w-full" />
      </div>
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
                      <strong>Szkolenie:</strong>
                      {course.course_name}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="flex flex-col text-xs sm:text-small text-pretty leading-relaxed ">
                      <strong>Status Szkolenia:</strong>
                      {course.course_status}
                    </p>
                    <p className="flex flex-col text-xs sm:text-small text-pretty leading-relaxed ">
                      <strong>Data Ukończenia Szkolenia:</strong>
                      {course.date_completed}
                    </p>
                    <p className="flex flex-col text-xs sm:text-small text-pretty leading-relaxed ">
                      <strong>Certyfikat:</strong>
                      <Link
                        href={`${course.certificate}`}
                        color="success"
                        className="text-green-800 max-w-fit"
                        size="sm"
                      >
                        {" "}
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
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Brak ukończonych szkoleń.</p>
        )}
      </div>
    </>
  );
}
