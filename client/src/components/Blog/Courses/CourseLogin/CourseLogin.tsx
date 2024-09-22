import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import DynamicFormInput from "../../Contact/FormsInput/DynamicInput";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type LoginFormInputs = {
  email: string;
  password: string;
};

export const CoursesLogin = () => {
  const methods = useForm<LoginFormInputs>();
  const { register, handleSubmit, formState: { errors }, control } = methods;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: LoginFormInputs) => {
    setIsLoading(true);

    const result = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    setIsLoading(false);

    if (result?.error) {
      // Handle error and display error messages
      console.error(result.error);
      // Set your custom error handling here
    } else {
      router.push('/kursy?id=51');
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="w-full max-w-5xl bg-white shadow-lg flex flex-col lg:flex-row mb-4 border border-[#333]/50 rounded">
        <div className="w-full lg:w-2/5 bg-green-700 p-4 flex flex-col gap-3 text-white">
          <div className="flex items-center">
            <svg
              version="1.1"
              viewBox="139.31 0 92.39 92.39"
              xmlns="http://www.w3.org/2000/svg"
              width="36px"
              height="36px"
              fill="#fff"
              style={{ zIndex: 1 }}
            >
              <path
                id="mark"
                d="..."
                style={{ fill: "#fff", fillRule: "evenodd" }}
              />
            </svg>
            <div className="pl-2">
              <p className="m-0 font-arrus text-xs font-bold text-white">
                Oddział w
              </p>
              <p className="m-0 font-arrus text-xs font-bold text-white">
                Częstochowie
              </p>
            </div>
          </div>
          <hr />
          <p className="text-xs text-pretty leading-relaxed text-justify">
            Aby zobaczyć listę szkoleń, zaloguj się, używając tymczasowego hasła
            otrzymanego od PTE Częstochowa. Hasło będzie ważne do czasu jego
            zmiany. W razie problemów skontaktuj się z administratorem.
          </p>
          <hr />
          <p className="text-xs text-pretty leading-relaxed text-justify">
            Strona Szkolenia jest w trakcie budowy
          </p>
        </div>
        <div className="w-full lg:w-3/5 p-4 bg-[#f7f3ef]">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <DynamicFormInput
              label="Email"
              placeholder="Wpisz swój email"
              register={register}
              validation={{ required: "Email jest wymagany" }}
              error={errors.email}
              name="email"
              control={control}
              type="email"
            />
            <DynamicFormInput
              label="Hasło"
              placeholder="Wpisz swoje hasło"
              register={register}
              validation={{ required: "Hasło jest wymagane" }}
              error={errors.password}
              name="password"
              control={control}
              type="password"
            />
            <Button
              type="submit"
              color="success"
              variant="flat"
              className="w-full lg:w-auto rounded text-white bg-green-700"
              disabled={isLoading}
            >
              {isLoading ? "Logowanie..." : "Zaloguj się"}
            </Button>
          </form>
        </div>
      </div>
    </FormProvider>
  );
};
