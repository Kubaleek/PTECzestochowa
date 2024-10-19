import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@nextui-org/react";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import DynamicFormInput from "@/components/Blog/Contact/FormsInput/DynamicInput";
import { useAddCourseMutation } from "@/services/courseHooks";

type AddCourseFormProps = {
  addModal: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onOpenChange: (open: boolean) => void;
  };
};

type CourseFormData = {
  courseName: string;
  courseDescription: string;
  courseDate: string;
  courseFile: FileList;
};

const AddCourseForm: React.FC<AddCourseFormProps> = ({ addModal }) => {
  const { isOpen, onOpenChange } = addModal;

  const { mutate: addCourse } = useAddCourseMutation({
    onSuccess: () => {
      console.log("Kurs dodany pomyślnie");
    },
    onError: (error) => {
      console.error("Wystąpił błąd podczas dodawania kursu:", error);
    },
  });

  const methods = useForm<CourseFormData>();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = methods;

  const onSubmit = async (data: CourseFormData) => {
    const file = data.courseFile?.[0]; // Get the first file from the list
    if (!file) {
      console.error("No file to upload.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", data.courseName);
      formData.append("description", data.courseDescription);
      formData.append("date", data.courseDate);
      formData.append("fileType", "course");

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const res = await response.json();

      if (!res.success || !res.filePath) {
        console.error("File upload failed:", res.message);
        return;
      }

      await addCourse({
        name: data.courseName,
        description: data.courseDescription,
        date: data.courseDate,
        file: res.filePath,
      });

      onOpenChange(false); // Close the modal after submission
    } catch (e) {
      console.error("Error in file upload:", e);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      backdrop="blur"
      scrollBehavior="inside"
      radius="sm"
      className="!bg-[#f5f1ec] border-1 shadow-lg"
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

export default AddCourseForm;
