import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@nextui-org/react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useAssignMutation, useGetAssignData } from "@/services/courseHooks";
import DynamicFormInput from "@/components/Blog/Contact/FormsInput/DynamicInput";

type AssignCourseFormProps = {
  onClose: () => void;
};

type AssignCourseFormData = {
  userId: number;
  courseId: number;
  certificate: string;
  status: string;
  dateCompleted: FileList;
};

const AssignFormCourse: React.FC<AssignCourseFormProps> = ({ onClose }) => {
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
      // Zaktualizuj cache lub wyświetl powiadomienie o sukcesie
      console.log("Kurs dodany pomyślnie");
    },
    onError: (error) => {
      console.error("Wystąpił błąd podczas dodawania kursu:", error);
    },
  });
  const courses = data?.courses || [];
  const users = data?.user || [];

  const onSubmit = (data: AssignCourseFormData) => {
    assignCourse({
      userId: data.userId,
      courseId: data.courseId,
      certificate: "test.png",
      status: data.status,
      dateCompleted: "21 Września 2024",
    });
    console.log("Test");
    onClose();
    window.location.reload();
  };

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
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
          <Select id="status" native {...register("status")}>
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
  );
};

export default AssignFormCourse;