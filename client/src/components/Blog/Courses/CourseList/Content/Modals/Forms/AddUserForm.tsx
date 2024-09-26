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
  email: string;
  fullname: string;
  password: string;
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
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <DynamicFormInput
            label="Email"
            placeholder="Wpisz Email użytkownika"
            name="email"
            control={control}
            register={methods.register}
            validation={{ required: "email jest wymagany" }}
            error={errors.email}
            type="email"
          />
          <DynamicFormInput
            label="Imie i Nazwisko"
            placeholder="Wpisz Imie i Nazwisko użytkownika"
            name="fullname"
            control={control}
            register={methods.register}
            validation={{ required: "Imię i Nazwisko jest wymagany" }}
            error={errors.fullname}
            type="text"
          />

          <DynamicFormInput
            label="Hasło Użytkownika"
            placeholder="Wpisz Hasło (wymagane jest 8 znaków)."
            name="password"
            control={control}
            register={methods.register}
            validation={{ required: "Hasło jest wymagany" }}
            error={errors.password}
            type="password"
          />
          <FormControl variant="standard" color="success" fullWidth required>
            <InputLabel htmlFor="userRole">Rola Użytkownika</InputLabel>
            <Select id="userRole" native>
              <option aria-label="None" value="" />
              <option value="Użytkownik">Użytkownik</option>
              <option value="Administrator">Administrator</option>
            </Select>
          </FormControl>
          <div className="justify-end flex items-center py-4">
            <Button
              type="submit"
              color="success"
              className="w-full lg:w-auto rounded text-white bg-green-700"
            >
              Dodaj Użytkownika
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};
