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

export default function CompletedModule() {
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
            Twoje Ukończone Szkolenia
            <span className="bg-green-700 text-white px-2 py-1 text-xs rounded-full">
              0
            </span>
          </h3>
          <p className="text-sm text-pretty leading-relaxed text-gray-700 text-justify text-clip">
            Oto twoje ukończone szkolenia, które odbyłeś. Możesz teraz odebrać
            swój certyfikat.
          </p>
        </div>
        <Divider className="h-[1px] w-full" />
      </div>
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
        <Card
          shadow="lg"
          className="bg-[#f5f1ec] border-2 border-[#333]/25 rounded"
        >
          <CardHeader className="flex flex-col justify-start sm:flex-row items-start gap-3">
            <div className="flex flex-col gap-2">
              <CourseIcon />
              <div className="flex flex-col">
                <p className="text-small font-medium text-justify">Test</p>
                <p className="text-small text-default-500">Szkolenie #1</p>
              </div>
            </div>
          </CardHeader>
          <Divider className="h-[1px] w-full" />
          <CardBody className="flex flex-col gap-1">
            <p className="flex flex-col">
              <strong>Status Szkolenia:</strong>Ukończony
            </p>
            <p className="flex flex-col">
                <strong>Data Ukończenia Szkolenia:</strong>
                25 września 2024
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
            </p>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
