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
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Test1() {
  // Hooki dla różnych modali
  const addModal = useDisclosure();
  const editModal = useDisclosure();

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
        <Divider className="h-[1px] w-full" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-end items-center">
          <Button
            onPress={addModal.onOpen}
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
            isOpen={addModal.isOpen}
            onOpenChange={addModal.onOpenChange}
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
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Magna exercitation reprehenderit magna aute tempor
                      cupidatat consequat elit dolor adipisicing. Mollit dolor
                      eiusmod sunt ex incididunt cillum quis. Velit duis sit
                      officia eiusmod Lorem aliqua enim laboris do dolor
                      eiusmod. Et mollit incididunt nisi consectetur esse
                      laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                      deserunt nostrud ad veniam.
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
        <Divider className="h-[1px] w-full" />
        <div className="gap-2 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
          <Card
            shadow="lg"
            className="bg-[#f5f1ec] border-2 border-[#333]/25 rounded">
            <CardHeader className="flex flex-col just sm:flex-row items-center gap-3">
              <div className="flex flex-col gap-2">
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
                  className="h-6 w-6 lucide lucide-book-open-check">
                  {" "}
                  <path d="M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z" />{" "}
                  <path d="m16 12 2 2 4-4" />{" "}
                  <path d="M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3" />
                </svg>
                <div className="flex flex-col">
                  <p className="text-small font-medium text-justify">
                    Zasady pracy i obowiążki kasjerów walutowo-złotowych
                  </p>
                  <p className="text-small text-default-500">Szkolenie #1</p>
                </div>
              </div>
            </CardHeader>
            <Divider className="h-[1px] w-full" />
            <CardBody>
              <Accordion
                className="px-0"
                isCompact={true}
                keepContentMounted={true}
                fullWidth={true}>
                <AccordionItem
                  key={1}
                  aria-label="CourseDetail-1"
                  title="Sprawdż Informacje"
                  className="text-small text-justify">
                  <div className="flex flex-col gap-3">
                    <p className="flex flex-col">
                      <span className="font-medium text-medium">
                        Opis Szkolenia:{" "}
                      </span>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsum iste ab dicta tempore totam, asperiores hic sunt
                        quos repudiandae, laboriosam commodi perspiciatis labore
                        quas earum nam esse quidem? Rerum, debitis.
                      </span>
                    </p>
                    <p className="flex flex-col">
                      <span className="font-medium text-medium">
                        Data Szkolenia:{" "}
                      </span>
                      <span>24 wrześia 2024</span>
                    </p>
                    <p className="flex flex-col">
                      <span className="font-medium text-medium">
                        Plik Szkoleniowy:{" "}
                      </span>
                      <span>Link do Kursów typu pdf np</span>
                    </p>
                    <p className="flex flex-col">
                      <span className="font-medium text-medium">
                        Status Szkolenia:{" "}
                      </span>
                      <span>Status Szkolenia</span>
                    </p>
                    <p className="flex flex-col">
                      <span className="font-medium text-medium">
                        Data Zakończenia Szkolenia:{" "}
                      </span>
                      <span>31 września 2024</span>
                    </p>
                    <p className="flex flex-col">
                      <span className="font-medium text-medium">
                        Certyfikat Szkolenia:{" "}
                      </span>
                      <span>Niedostępny</span>
                    </p>
                    <div className="flex gap-3">
                      <Button
                        color="primary"
                        variant="flat"
                        className="rounded w-full"
                        onPress={editModal.onOpen}>
                        Edytuj
                      </Button>
                      <Modal
                        isOpen={editModal.isOpen}
                        onOpenChange={editModal.onOpenChange}
                        placement="center"
                        classNames={{
                          backdrop:
                            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                        }}>
                        <ModalContent>
                          {(onClose) => (
                            <>
                              <ModalHeader className="flex flex-col gap-1">
                                Edytuj Szkolenie
                              </ModalHeader>
                              <ModalBody>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Nullam pulvinar risus non
                                  risus hendrerit venenatis. Pellentesque sit
                                  amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Nullam pulvinar risus non
                                  risus hendrerit venenatis. Pellentesque sit
                                  amet hendrerit risus, sed porttitor quam.
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
                                  Edytuj Szkolenie
                                </Button>
                              </ModalFooter>
                            </>
                          )}
                        </ModalContent>
                      </Modal>
                      <Button
                        color="danger"
                        variant="flat"
                        className="rounded w-full">
                        Usuń
                      </Button>
                    </div>
                  </div>
                </AccordionItem>
              </Accordion>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
