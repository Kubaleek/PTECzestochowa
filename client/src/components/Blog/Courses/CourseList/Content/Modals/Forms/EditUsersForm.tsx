import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import DynamicFormInput from "@/components/Blog/Contact/FormsInput/DynamicInput";
import { Button } from "@nextui-org/react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { useEditUserMutation } from "@/services/usersHook";
type EditUsersFormProps = {
  onClose: () => void; // This prop is required
  email:string;
};

type EditUsersFormData = {
  email: string;
  fullname: string;
  role: string; // Add role to the form data type
};

const EditUsersForm: React.FC<EditUsersFormProps> = ({ onClose,email }) => {
  const methods = useForm<EditUsersFormData>();
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = methods;

  // Use the custom mutation hook
  const { mutate: editUser, isLoading, isError, error } = useEditUserMutation({
    onSuccess: () => {
      console.log("User edited successfully");
      onClose(); // Close the form on successful edit
    },
    onError: (error) => {
      console.error("Error editing user:", error);
    },
  });

  const onSubmit = (data: EditUsersFormData) => {
    // Call the mutation function with the form data
    editUser({
      new_email:data.email || email,
      email: email,
      username: data.fullname, // Assuming fullname is treated as the username
      role: data.role, // Pass the role as well
    });
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
          validation={{ required: "email jest wymagany" }}
          error={errors.email}
          type="email"
        />
        <DynamicFormInput
          label="Imię i Nazwisko"
          placeholder="Wpisz Imię i Nazwisko użytkownika"
          name="fullname"
          control={control}
          register={methods.register}
          validation={{ required: "Imię i Nazwisko jest wymagane" }}
          error={errors.fullname}
          type="text"
        />
        <FormControl variant="standard" color="success" fullWidth required>
          <InputLabel htmlFor="userRole">Rola Użytkownika</InputLabel>
          <Select
            id="userRole"
            native
            {...register("role", { required: "Rola jest wymagana" })} // Register the role field
          >
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
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? "Edytowanie..." : "Edytuj Użytkownika"}
          </Button>
        </div>
        {isError && <p className="text-red-500">{error?.message}</p>} {/* Show error message if there's an error */}
      </form>
    </FormProvider>
  );
};

export default EditUsersForm;
