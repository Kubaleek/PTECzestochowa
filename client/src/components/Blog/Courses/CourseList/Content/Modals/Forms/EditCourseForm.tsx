import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import DynamicFormInput from "@/components/Blog/Contact/FormsInput/DynamicInput";
import { Button } from "@nextui-org/react";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { useEditCourseMutation } from "@/services/courseHooks";

type EditCourseFormProps = {
  onClose: () => void;
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

const EditFormCourse: React.FC<EditCourseFormProps> = ({ onClose, courseId }) => {
  const methods = useForm<EditCourseFormData>();
  const { handleSubmit, control, register, formState: { errors } } = methods;

  const [courseStatus, setCourseStatus] = React.useState<string>("");

  const editCourseMutation = useEditCourseMutation({
    onSuccess: () => {
      console.log("Course successfully updated!");
    },
    onError: (error: any) => {
      console.error("Error updating course:", error);
    },
  });
  const onSubmit = (data: EditCourseFormData) => {
    const courseDataWithId = {
      id: courseId, // Add courseId here
      ...data,
    };
  
    // Log the data being submitted to check the values
  
    editCourseMutation.mutate(courseDataWithId);
    window.location.reload()
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
          
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="courseStatus">Status Ukończenia</InputLabel>
            <Select
              id="courseStatus"
              value={courseStatus}
              onChange={(e) => setCourseStatus(e.target.value)}
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
              name="courseFileCert"
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
