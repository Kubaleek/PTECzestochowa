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
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            </form>
        </FormProvider>
    )
}

export default AssignFormCourse;
