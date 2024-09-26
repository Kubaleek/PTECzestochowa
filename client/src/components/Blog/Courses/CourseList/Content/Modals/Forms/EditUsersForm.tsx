import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import DynamicFormInput from "@/components/Blog/Contact/FormsInput/DynamicInput";
import { Button } from "@nextui-org/react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { useEditCourseMutation } from "@/services/courseHooks";
type EditUsersFormProps = {
  onClose: () => void;
};

type EditUsersFormData = {
    email: string;
    fullname: string;
};

const EditUsersForm: React.FC<EditUsersFormProps> = ({ onClose }) => {
  const methods = useForm<EditUsersFormData>();
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = (data: EditUsersFormData) => {};

  return (
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
            Edytuj Użytkownika
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default EditUsersForm;
