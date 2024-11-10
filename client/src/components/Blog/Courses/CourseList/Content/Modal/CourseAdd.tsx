import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import DynamicFormInput from "@/components/Blog/Contact/FormsInput/DynamicInput";
import { useAddCourseMutation } from "@/services/courseHooks";

type CourseFormProps = {
    onClose: () => void;
  };
  
  type CourseFormData = {
    courseName: string;
    courseDescription: string;
    courseDate: string;
    courseFile: FileList;
  };
  

type AddModalType = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

const CourseAdd: React.FC<{ addModal: AddModalType }> = ({ addModal }) => {
  const methods = useForm<CourseFormData>();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = methods;

  const { mutate: addCourse } = useAddCourseMutation({
    onSuccess: () => {
      console.log("Kurs dodany pomyślnie"),
      window.location.reload();
    },
    onError: (error) =>
      console.error("Wystąpił błąd podczas dodawania kursu:", error),
  });

  const createFormData = (data: CourseFormData): FormData => {
    const formData = new FormData();
    const file = data.courseFile?.[0];

    if (!file) throw new Error("No file to upload.");

    formData.append("file", file);
    formData.append("name", data.courseName);
    formData.append("description", data.courseDescription);
    formData.append("date", data.courseDate);
    formData.append("fileType", "course");

    return formData;
  };

  const onSubmit = async (data: CourseFormData) => {
    try {
      const formData = createFormData(data);
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const res = await response.json();

      if (!res.success || !res.filePath) {
        throw new Error("File upload failed: " + res.message);
      }

      await addCourse({
        name: data.courseName,
        description: data.courseDescription,
        date: data.courseDate,
        file: res.filePath,
      });

      addModal.onOpenChange(false);
    } catch (e) {
      console.error("Error in file upload:", e);
    }
  };

  return (
    <Modal
      isOpen={addModal.isOpen}
      onOpenChange={addModal.onOpenChange}
      placement="center"
      scrollBehavior="inside"
      backdrop="blur"
      radius="sm"
      size="md"
      className="bg-[#f5f1ec]"
    >
      <ModalContent>
        <ModalHeader>Dodaj Szkolenie</ModalHeader>
        <ModalBody className="mt-0">
          <FormProvider {...methods}>
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-3">
                <DynamicFormInput
                  label="Nazwa Szkolenia"
                  placeholder="Wprowadź nazwę szkolenia"
                  name="courseName"
                  control={control}
                  register={methods.register}
                  validation={{ required: "Nazwa jest wymagana" }}
                  error={errors.courseName}
                  type="text"
                />
                <DynamicFormInput
                  label="Opis Szkolenia"
                  placeholder="Wprowadź opis szkolenia"
                  name="courseDescription"
                  control={control}
                  register={methods.register}
                  validation={{ required: "Opis jest wymagany" }}
                  error={errors.courseDescription}
                  type="textarea"
                />
                <DynamicFormInput
                  label="Data Szkolenia"
                  placeholder="Wprowadź datę szkolenia"
                  name="courseDate"
                  control={control}
                  register={methods.register}
                  validation={{ required: "Data jest wymagana" }}
                  error={errors.courseDate}
                  type="text"
                />
                <DynamicFormInput
                  label="Plik Szkolenia"
                  name="courseFile"
                  control={control}
                  register={methods.register}
                  validation={{ required: "Plik jest wymagany" }}
                  error={errors.courseFile}
                  type="file"
                />
              </div>
              <div className="justify-end flex items-center py-4">
                <Button
                  type="submit"
                  color="success"
                  className="w-full lg:w-auto rounded text-white bg-green-700"
                >
                  Dodaj Szkolenie
                </Button>
              </div>
            </form>
          </FormProvider>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CourseAdd;
