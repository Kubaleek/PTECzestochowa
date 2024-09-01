import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table'; // https://v3.material-react-table.com/docs/guides/expanding-sub-rows
import { useMemo } from 'react';
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

export type DataType = {
  id: number;
  subRows?: DataType[];
};

export const data = [
  {
    id: 1,
  },
];

export default function Test1() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="bg-[#f5f1ec] flex flex-col gap-3 tems-center justify-between border-2 border-[#333]/25 p-4 shadow-lg">
        <div>
          <h3 className="text-xl font-bold text-black gap-2 text-pretty leading-relaxed items-center flex place-items-center">
            Szkolenia
            <span className="bg-green-700 text-white px-2 py-1 text-xs rounded-full">
              0
            </span>
          </h3>
          <p className="text-sm text-pretty leading-relaxed text-gray-700 text-justify text-clip">
            Oto lista dostępnych szkoleń. Jako administrator, masz pełną
            kontrolę nad tymi zasobami – możesz dodawać nowe szkolenia, edytować
            istniejące oraz usuwać te, które są już nieaktualne lub
            niepotrzebne.
          </p>
        </div>
        <div className="bg-white flex flex-col border-2 gap-3 p-3 border-[#333]/25 shadow-lg">
          <div className="flex justify-end items-center">
            <Button
              onPress={onOpen}
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
                  className="lucide lucide-book-plus">
                  <path d="M12 7v6" />
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                  <path d="M9 10h6" />
                </svg>
              }>
              Dodaj Szkolenie
            </Button>
            <Modal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              placement="center"
              classNames={{
                backdrop:
                  "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
              }}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Dodaj Szkolenie
                    </ModalHeader>
                    <ModalBody>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor
                        quam.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor
                        quam.
                      </p>
                      <p>
                        Magna exercitation reprehenderit magna aute tempor
                        cupidatat consequat elit dolor adipisicing. Mollit dolor
                        eiusmod sunt ex incididunt cillum quis. Velit duis sit
                        officia eiusmod Lorem aliqua enim laboris do dolor
                        eiusmod. Et mollit incididunt nisi consectetur esse
                        laborum eiusmod pariatur proident Lorem eiusmod et.
                        Culpa deserunt nostrud ad veniam.
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="danger"
                        className="w-full lg:w-auto rounded text-white bg-red-700"
                        onPress={onClose}>
                        Zamknij
                      </Button>
                      <Button
                        color="success"
                        className="w-full lg:w-auto rounded text-white bg-green-700"
                        onPress={onClose}>
                        Dodaj Szkolenie
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
          <div>
            <Divider className="h-[1px] w-full" />
            <div>
              {/* Tu będzie tabelka */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
