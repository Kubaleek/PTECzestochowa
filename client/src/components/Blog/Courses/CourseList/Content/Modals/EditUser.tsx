import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import DynamicFormInput from "@/components/Blog/Contact/FormsInput/DynamicInput";
import { Button, Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { useEditUserMutation } from "@/services/usersHook";
import { TeditUser } from "@/components/Home/ts/types";

type EditUserProps = {
  editModal: {
    isOpen: boolean;
    onClose: () => void;
  };
  email: string;
  user: TeditUser;
};

type EditUsersFormData = {
  email: string;
  fullname: string;
  role: string;
};

const EditUser: React.FC<EditUserProps> = ({ editModal, email }) => {
  const methods = useForm<EditUsersFormData>();
  const { handleSubmit, control, register, formState: { errors } } = methods;

  // Use the custom mutation hook
  const { mutate: editUser, isPending, isError, error } = useEditUserMutation({
    onSuccess: () => {
      console.log("User edited successfully");
      editModal.onClose(); // Close the form on successful edit
    },
    onError: (error) => {
      console.error("Error editing user:", error);
    },
  });

  const onSubmit = (data: EditUsersFormData) => {
    // Call the mutation function with the form data
    editUser({
      new_email: data.email || email,
      email: email,
      username: data.fullname, // Assuming fullname is treated as the username
      role: data.role, // Pass the role as well
    });
    window.location.reload();
    editModal.onClose();
  };

  return (
    <Modal
      isOpen={editModal.isOpen}
      onClose={editModal.onClose}
      placement="center"
      backdrop="blur"
      scrollBehavior="inside"
      radius="sm"
      className="!bg-[#f5f1ec] border-1 shadow-lg"
    >
      <ModalContent>
        <ModalHeader>Edytuj Użytkownika</ModalHeader>
        <ModalBody className="mt-0">
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
                  {...register("role", { required: "Rola jest wymagana" })}
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
                  disabled={isPending}
                >
                  {isPending ? "Edytowanie..." : "Edytuj Użytkownika"}
                </Button>
              </div>
              {isError && <p className="text-red-500">{error?.message}</p>}
            </form>
          </FormProvider>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditUser;
