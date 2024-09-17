import { useForm, Controller } from "react-hook-form";
import DynamicInput from "./DynamicInput";
import { Button, Divider } from "@nextui-org/react";
import TextareaBox from "./TextareaBox";
import FileInput from "./FileInput";
import CheckInput from "./CheckInput";

export default function General({ formType  } : any) {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data : any) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-xl sm:text-2xl text-pretty leading-relaxed">Wiadomość Ogólna</h3>
          <Divider className="h-[1px] max-w-full" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DynamicInput
            type="text"
            label="Imię i Nazwisko"
            placeholder="Wpisz swoje imię i nazwisko"
            tooltipContent={
              <div className="px-1 py-2 max-w-md">
                {" "}
                <div className="text-tiny text-justify text-pretty leading-relaxed">
                  {" "}
                  Wpisz swoje imię, zaczynając od dużej litery i pamiętaj, żeby
                  nie używać spacji ani innych znaków poza literami. Następnie
                  wpisz swoje nazwisko, zaczynając od dużej litery. Jeśli masz
                  nazwisko połączone, użyj myślników między częściami nazwiska.{" "}
                </div>{" "}
              </div>
            }
            register={register}
            validation={{ required: "Pole jest wymagane" }}
            error={errors.name}
            name="name"
          />
          <DynamicInput
            type="email"
            label="Email"
            placeholder="Wpisz swoje email"
            tooltipContent={
              <div className="px-1 py-2 max-w-md">
                {" "}
                <div className="text-tiny text-justify text-pretty leading-relaxed">
                  {" "}
                  E-mail musi zawierać znak (@) i domenę serwera (np.
                  twój@example.com){" "}
                </div>{" "}
              </div>
            }
            register={register}
            validation={{ required: "Pole jest wymagane" }}
            error={errors.email}
            name="email"
          />
        </div>
        <DynamicInput
          type="tel"
          label="Telefon"
          placeholder="Wpisz swoj telefon"
          tooltipContent={
            <div className="px-1 py-2 max-w-md">
              {" "}
              <div className="text-tiny text-justify text-pretty leading-relaxed">
                {" "}
                Numer telefonu należy wpisać w standardzie ogólnym, np.
                XXX-XXX-XXX, +(XX)X XX XX XX, +(XX) XXX-XXX-XXX i tak dalej.{" "}
              </div>{" "}
            </div>
          }
          register={register}
          validation={{ required: "Pole jest wymagane" }}
          error={errors.tel}
          name="tel"
        />
        <TextareaBox
          label="Wiadomość"
          tooltipContent={
            <div className="px-1 py-2 max-w-md">
              {" "}
              <div className="text-tiny text-justify text-pretty leading-relaxed">
                {" "}
                Pełny tekst Twojej wiadomości do nas. Należy pamiętać, że ten
                formularz nie spełnia żadnego ze standardów formatowania. Jeśli
                chcesz wysłać nam dłuższą wiadomość, sugerujemy przesłanie jej
                do nas w formacie pdf lub doc.
              </div>{" "}
            </div>
          }
          register={register}
          validation={{ required: "Pole jest wymagane" }}
          error={errors.message}
          name="message"
          placeholder="Pełny tekst Twojej wiadomości do nas."
        />
        <FileInput
          label="Wybierz plik"
          tooltipContent={
            <div className="px-1 py-2 max-w-md">
              <div className="text-tiny text-justify text-pretty leading-relaxed">
                Maksymalny bezpieczny rozmiar pliku to około 20 MB.
              </div>
            </div>
          }
          register={register}
          validation={{ required: "Plik jest wymagany" }}
          error={errors.file}
          name="file"
        />
        <CheckInput
          label="Wyrażam zgodę na wykorzystanie moich danych osobowych w celu kontaktu ze strony PTE Częstochowa"
          tooltipContent={<div className="px-1 py-2 max-w-md">Należy zaznaczyć, jeśli chcesz przekazać nam wiadomość</div>}
          control={control}
          validation={{ required: "Musisz zaakceptować warunki" }}
          error={errors.checkbox}
          name="checkbox"
        />
        <Button
          color="success"
          type="submit"
          className="bg-green-800 text-white rounded">
          Wyślij Wiadomość
        </Button>
      </form>
    </>
  );
}
