import React from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@nextui-org/react";
import { useForm, FormProvider } from "react-hook-form";
import DynamicFormInput from "@/components/Blog/Contact/FormsInput/DynamicInput";
import { useEditCourseMutation } from "@/services/courseHooks";

type EditCourseModalProps = {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  courseId: number;
};

type EditCourseFormData = {
  courseName: string;
  courseDescription: string;
  courseDate: string;
  courseEndDate: string;
  courseFile: FileList;
  courseType: string;
};

const EditCourseModal: React.FC<EditCourseModalProps> = ({
  isOpen,
  onOpenChange,
  courseId,
}) => {
  const methods = useForm<EditCourseFormData>();
  const { handleSubmit, control, register, formState: { errors } } = methods;

  const editCourseMutation = useEditCourseMutation({
    onSuccess: () => {
      console.log("Course successfully updated!");
      onOpenChange(false); // Close the modal on success
    },
    onError: (error: any) => {
      console.error("Error updating course:", error);
    },
  });

  const onSubmit = (data: EditCourseFormData) => {
    const courseDataWithId = {
      id: courseId, 
      ...data,
    };

    editCourseMutation.mutate(courseDataWithId);
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
        <ModalHeader>
          Edytuj Szkolenie
        </ModalHeader>
        <ModalBody className="mt-0">
          <FormProvider {...methods}>
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-3">
                <DynamicFormInput
                  label="Nazwa Szkolenia"
                  placeholder="Wprowadź nazwę szkolenia"
                  name="courseName"
                  control={control}
                  register={register}
                  validation={{ required: "Nazwa jest wymagana" }}
                  error={errors.courseName}
                  type="text"
                />
                <DynamicFormInput
                  label="Opis Szkolenia"
                  placeholder="Wprowadź opis szkolenia"
                  name="courseDescription"
                  control={control}
                  register={register}
                  validation={{ required: "Opis jest wymagany" }}
                  error={errors.courseDescription}
                  type="textarea"
                />
                <DynamicFormInput
                  label="Data Szkolenia"
                  placeholder="Wprowadź datę szkolenia"
                  name="courseDate"
                  control={control}
                  register={register}
                  validation={{ required: "Data jest wymagana" }}
                  error={errors.courseDate}
                  type="text"
                />
                <DynamicFormInput
                  label="Zakończenie Szkolenia"
                  placeholder="Wprowadź zakończenie daty szkolenia"
                  name="courseEndDate"
                  control={control}
                  register={register}
                  validation={{ required: "Data jest wymagana" }}
                  error={errors.courseEndDate}
                  type="text"
                />
                <DynamicFormInput
                  label="Plik Szkolenia"
                  name="courseFile"
                  control={control}
                  register={register}
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
                  Edytuj Szkolenie
                </Button>
              </div>
            </form>
          </FormProvider>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditCourseModal;
