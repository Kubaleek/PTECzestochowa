import React from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { Button } from "@nextui-org/react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import DynamicFormInput from "@/components/Blog/Contact/FormsInput/DynamicInput";
import { useAddUserMutation } from "@/services/usersHook"; // Sprawdź, czy import jest poprawny

type AddUserFormProps = {
  onClose: () => void;
};

type AddUsersFormData = {
  email: string;
  fullname: string;
  password: string;
  userRole: string;
};

export const AddUserForm: React.FC<AddUserFormProps> = ({ onClose }) => {
  const methods = useForm<AddUsersFormData>();
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
  } = methods;

const { mutate: addUser, error } = useAddUserMutation({
  onSuccess: () => {
    console.log("Użytkownik dodany pomyślnie");
    onClose(); // Move the onClose call here
  },
  onError: (error) => {
    console.error("Wystąpił błąd podczas dodawania użytkownika:", error);
  },
});

  const onSubmit = (data: AddUsersFormData) => {
    addUser({
      email: data.email,
      username: data.fullname,
      password: data.password,
      role: data.userRole,
    });
    console.log("Test")
    window.location.reload()
    onClose();
  };

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <DynamicFormInput
          label="Email"
          placeholder="Wpisz Email użytkownika"
          name="email"
          control={control}
          register={methods.register}
          validation={{ required: "Email jest wymagany" }}
          error={errors.email}
          type="email"
        />
        <DynamicFormInput
          label="Imię i Nazwisko"
          placeholder="Wpisz Imię i Nazwisko użytkownika"
          name="fullname"
          control={control}
          register={methods.register}
          validation={{ required: "Imię i Nazwisko są wymagane" }}
          error={errors.fullname}
          type="text"
        />
        <DynamicFormInput
          label="Hasło Użytkownika"
          placeholder="Wpisz Hasło (wymagane jest 8 znaków)."
          name="password"
          control={control}
          register={methods.register}
          validation={{ required: "Hasło jest wymagane" }}
          error={errors.password}
          type="password"
        />

        <FormControl variant="standard" color="success" fullWidth>
          <InputLabel htmlFor="userAddRole">Role</InputLabel>
          <Select id="userAddRole" native>
            <option aria-label="None" value="" />
            <option value="użytkownik">Użytkownik</option>
            <option value="administrator">Administrator</option>
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
  );
};
