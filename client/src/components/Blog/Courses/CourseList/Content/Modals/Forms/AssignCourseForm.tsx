import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@nextui-org/react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useGetAssignData } from "@/services/courseHooks";

type AssignCourseFormProps = {
  onClose: () => void;
};

type AssignCourseFormData = {
  courseName: string;
  courseDescription: string;
  courseDate: string;
  courseEndDate: string;
  courseFile: FileList;
  courseType: string;
};

const AssignFormCourse: React.FC<AssignCourseFormProps> = ({ onClose }) => {
  const methods = useForm<AssignCourseFormData>();
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
  } = methods;
  const { data, error, isLoading } = useGetAssignData(); // Fetch courses

  const [courseStatus, setCourseStatus] = useState<string>("");
  const courses = data?.courses || [];
  const users = data?.user || [];

  const onSubmit = (data: AssignCourseFormData) => {
    console.log("Dane formularza:", data);
    onClose();
  };

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <FormControl variant="standard" color="success" fullWidth>
          <InputLabel htmlFor="courseStatus">Wybierz Szkolenie</InputLabel>
          <Select id="courseSelect" native>
            <option aria-label="None" value="" />
            {
              courses.map((course) => (
                <option key={course.id} value={course.name}>{course.name}</option>
              ))
            }
          </Select>
        </FormControl>
        <FormControl variant="standard" color="success" fullWidth>
          <InputLabel htmlFor="courseStatus">Wybierz Użytkownika</InputLabel>
          <Select id="courseSelect" native>
            <option aria-label="None" value="" />
            {
              users.map((user) => (
                <option key={user.id} value={user.username}>{user.username}</option>
              ))
            }
          </Select>
        </FormControl>
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
