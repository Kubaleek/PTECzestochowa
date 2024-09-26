import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@nextui-org/react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DynamicFormInput from "@/components/Blog/Contact/FormsInput/DynamicInput";

type AddUserFormProps = {
    onClose: () => void;
  };

  type AddUsersFormData = {

  };

export const AddUserForm: React.FC<AddUserFormProps> = ({ onClose }) => {
    const methods = useForm<AddUsersFormData>();
    const {
      handleSubmit,
      formState: { errors },
      control,
      register,
    } = methods;

    const onSubmit = (data: AddUsersFormData) => {
      console.log("Dane formularza:", data);
      onClose();
    };
    return (
        <>
        <FormProvider {...methods}>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
            </form>
        </FormProvider>
        </>
    )
}