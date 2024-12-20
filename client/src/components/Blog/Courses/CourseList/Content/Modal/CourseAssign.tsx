import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useAssignMutation, useGetAssignData } from "@/services/courseHooks";
import DynamicFormInput from "@/components/Blog/Contact/FormsInput/DynamicInput";

type AssignModalType = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

type AssignCourseFormData = {
  userId: number;
  courseId: number;
  certificate: FileList;
  status: string;
  dateCompleted: string;
};

const AssignCourse: React.FC<{ assginModal: AssignModalType }> = ({
  assginModal,
}) => {
  const [courseStatus, setCourseStatus] = useState<string>("");
  const methods = useForm<AssignCourseFormData>();
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
  } = methods;

  const { data, error, isLoading } = useGetAssignData(); // Fetch courses
  const { mutate: assignCourse } = useAssignMutation({
    onSuccess: () => {
      console.log("Kurs przydzielony pomyślnie");
    },
    onError: (error) => {
      console.error("Wystąpił błąd podczas przydzielenia kursu:", error);
    },
  });

  const courses = data?.courses || [];
  const users = data?.user || [];

  const onSubmit = async (data: AssignCourseFormData) => {
    const certificateFile = data.certificate?.[0]; // Get the first file from the list

    // Step 1: Upload the certificate if it exists
    let certificatePath = "";
    if (certificateFile && courseStatus === "Ukończony") {
      try {
        const formData = new FormData();
        formData.append("file", certificateFile);
        formData.append("fileType", "certificate");

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const res = await response.json();

        if (!res.success || !res.filePath) {
          console.error("File upload failed:", res.message);
          return;
        }

        certificatePath = res.filePath;
      } catch (e) {
        console.error("Error during file upload:", e);
        return;
      }
    }

    try {
      assignCourse({
        userId: data.userId,
        courseId: data.courseId,
        certificate: certificatePath || "",
        status: data.status,
        dateCompleted: "21 Września 2024",
      });

      assginModal.onOpenChange(false);
      window.location.reload();
    } catch (e) {
      console.error("Error in course assignment:", e);
    }
  };

  return (
    <Modal
      isOpen={assginModal.isOpen}
      onOpenChange={assginModal.onOpenChange}
      placement="center"
      backdrop="blur"
      scrollBehavior="inside"
      radius="sm"
      className="!bg-[#f5f1ec] border-1 shadow-lg"
    >
      <ModalContent>
        <ModalHeader>Przydziel Szkolenie</ModalHeader>
        <ModalBody className="mt-0">
          <FormProvider {...methods}>
            <form
              className="flex flex-col gap-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormControl variant="standard" color="success" fullWidth>
                <InputLabel htmlFor="courseId">Wybierz Szkolenie</InputLabel>
                <Select id="courseId" native {...register("courseId")}>
                  <option aria-label="None" value="" />
                  {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.name}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl variant="standard" color="success" fullWidth>
                <InputLabel htmlFor="userId">Wybierz Użytkownika</InputLabel>
                <Select id="userId" native {...register("userId")}>
                  <option aria-label="None" value="" />
                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.username}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl variant="standard" color="success" fullWidth>
                <InputLabel htmlFor="status">Status Ukończenia</InputLabel>
                <Select
                  id="status"
                  native
                  {...register("status")}
                  value={courseStatus}
                  onChange={(e) => setCourseStatus(e.target.value)}
                >
                  <option aria-label="None" value="" />
                  <option value="Nieukończony">Nieukończony</option>
                  <option value="Ukończony">Ukończony</option>
                </Select>
              </FormControl>

              {courseStatus === "Ukończony" && (
                <DynamicFormInput
                  label="Certyfikat Ukończenia Szkolenia"
                  name="certificate"
                  control={control}
                  register={register}
                  validation={{ required: "Plik Certyfikatu jest wymagany" }}
                  error={errors.certificate}
                  type="file"
                />
              )}

              <div className="justify-end flex items-center py-4">
                <Button
                  type="submit"
                  color="success"
                  className="w-full lg:w-auto rounded text-white bg-green-700"
                >
                  Przydziel Szkolenie
                </Button>
              </div>
            </form>
          </FormProvider>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AssignCourse;
