import React from 'react';
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
import { useCourseByUserQuery, useCoursesQuery, useDeleteCourseMutation } from "@/services/courseHooks";
import { CoursesResponse } from '@/components/Home/ts/types'; 

export default function Users() {
    return (
    <div className="bg-[#f5f1ec] flex flex-col gap-3 items-center justify-between border-2 border-[#333]/25 p-4 shadow-lg">
        <div>
          <h3 className="text-xl font-bold text-black gap-2 text-pretty leading-relaxed items-center flex place-items-center">
            Użytkownicy
            <span className="bg-green-700 text-white px-2 py-1 text-xs rounded-full">
              0
            </span>
          </h3>
          <p className="text-sm text-pretty leading-relaxed text-gray-700 text-justify text-clip">
            Poniżej znajduje się lista użytkowników. Jako administrator, masz możliwość zarządzania ich danymi – możesz dodawać nowych użytkowników, edytować istniejące profile oraz usuwać konta, które nie są już aktywne.
          </p>
        </div>
        <Divider className="h-[1px] w-full" />
      </div>
    );
}