import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import DynamicFormInput from "@/components/Blog/Contact/FormsInput/DynamicInput";
import { Button } from "@nextui-org/react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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

  const [courseStatus, setCourseStatus] = useState<string>("");

  const onSubmit = (data: AssignCourseFormData) => {
    console.log("Dane formularza:", data);
    onClose();
  };

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <FormControl variant="standard" color="success" fullWidth>
          <InputLabel htmlFor="courseStatus">Wybierz Szkolenie</InputLabel>
          <Select
            id="courseSelect"
            native>
            <option aria-label="None" value="" />
            <option value="Szkolenie">Szkolenie</option>
            <option value="Szkolenie2">Szkolenie2</option>
          </Select>
        </FormControl>
        <FormControl variant="standard" color="success" fullWidth>
          <InputLabel htmlFor="courseStatus">Wybierz Użytkownika</InputLabel>
          <Select
            id="courseSelect"
            native>
            <option aria-label="None" value="" />
            <option value="Jan Kowalski">Jan Kowalski</option>
            <option value="Janek Testowy">Janek Testowy</option>
          </Select>
        </FormControl>
        <FormControl variant="standard" color="success" fullWidth>
            <InputLabel htmlFor="courseStatus">Status Ukończenia</InputLabel>
            <Select
              id="courseStatus"
              value={courseStatus}
              onChange={(e) => {
                setCourseStatus(e.target.value);
              }}
              native
            >
              <option aria-label="None" value="" />
              <option value="Nieukończony">Nieukończony</option>
              <option value="Ukończony">Ukończony</option>
            </Select>
          </FormControl>

          {courseStatus === "Ukończony" && (
            <DynamicFormInput
              label="Certyfikat Ukończenia Szkolenia"
              name="courseFile"
              control={control}
              register={register}
              validation={{ required: "Plik Certyfikatu jest wymagany" }}
              error={errors.courseFile}
              type="file"
            />
          )}
                    <DynamicFormInput
            label="Zakończenie Szkolenia"
            placeholder="Wprowadź zakończenie daty szkolenia"
            name="courseEndDate"
            control={control}
            register={register}
            validation={{ required: "Data jest wymagana" }}
            error={undefined}
            type="text"
          />
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
