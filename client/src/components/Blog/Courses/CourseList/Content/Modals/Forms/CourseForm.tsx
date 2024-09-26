import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import DynamicFormInput from "@/components/Blog/Contact/FormsInput/DynamicInput";
import { Button } from "@nextui-org/react";
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

const CourseForm: React.FC<CourseFormProps> = ({ onClose }) => {
  const { mutate: addCourse } = useAddCourseMutation({
    onSuccess: () => {
      // Zaktualizuj cache lub wyświetl powiadomienie o sukcesie
      console.log("Kurs dodany pomyślnie");
    },
    onError: (error) => {
      console.error("Wystąpił błąd podczas dodawania kursu:", error);
    },
  });
  
  // Aby wywołać dodanie kursu:

  const methods = useForm<CourseFormData>();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = methods;

  const onSubmit = (data: CourseFormData) => {
    
    addCourse({
      name:data.courseName,
      description:data.courseDescription,
      date:data.courseDate,
      link:data.courseFile
    });
    console.log(data)
    onClose(); // Zamknięcie modala po przesłaniu
    window.location.reload();
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
  );
};

export default CourseForm;
