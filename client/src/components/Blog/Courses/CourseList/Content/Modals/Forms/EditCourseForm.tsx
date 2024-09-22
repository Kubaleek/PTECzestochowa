import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import DynamicFormInput from "@/components/Blog/Contact/FormsInput/DynamicInput";
import { Button } from "@nextui-org/react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

type EditCourseFormProps = {
  onClose: () => void;
};

type EditCourseFormData = {
  courseName: string;
  courseDescription: string;
  courseDate: string;
  courseEndDate: string;
  courseFile: FileList;
  courseType: string;
};

const EditFormCourse: React.FC<EditCourseFormProps> = ({ onClose }) => {
  
  const methods = useForm<EditCourseFormData>();
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
  } = methods;

  const [courseStatus, setCourseStatus] = useState<string>("");

  const onSubmit = (data: EditCourseFormData) => {
    console.log("Dane formularza:", data);
    onClose();
  };

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <DynamicFormInput
            label="Nazwa Szkolenia"
            placeholder="Wprowadź nazwę szkolenia"
            name="courseName"
            control={control}
            register={register}
            validation={{ required: "Nazwa jest wymagana" }}
            error={undefined}
            type="text"
          />
          
          <DynamicFormInput
            label="Opis Szkolenia"
            placeholder="Wprowadź opis szkolenia"
            name="courseDescription"
            control={control}
            register={register}
            validation={{ required: "Opis jest wymagany" }}
            error={undefined}
            type="textarea"
          />
          
          <DynamicFormInput
            label="Data Szkolenia"
            placeholder="Wprowadź datę szkolenia"
            name="courseDate"
            control={control}
            register={register}
            validation={{ required: "Data jest wymagana" }}
            error={undefined}
            type="text"
          />
          
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
  );
};

export default EditFormCourse;
