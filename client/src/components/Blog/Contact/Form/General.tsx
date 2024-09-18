import { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import DynamicFormInput from "../FormsInput/DynamicInput";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface FormData {
  fullname: string;
  email: string;
  phone: string;
  consent: boolean;
  message: string;
}

export default function General() {
  const methods = useForm<FormData>(); 
  const [loading, setLoading] = useState(false); 

  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
  } = methods;

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true); 
    try {
      console.log(data);
      await new Promise((resolve) => setTimeout(resolve, 2000)); 
    } catch (error) {
      console.error("Błąd podczas wysyłania:", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-xl sm:text-2xl text-pretty leading-relaxed">
          Wiadomość Ogólna
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <DynamicFormInput label="Imię i Nazwisko" placeholder="Wpisz swoje imie i nazwisko" register={register} validation={{ required: "Imię i nazwisko jest wymagane" }} error={errors.fullname} name="fullname" control={control} type="text"/>
            <DynamicFormInput label="Email" placeholder="Wpisz swój email" register={register} validation={{ required: "Email jest wymagany" }} error={errors.email} name="email" control={control} type="email" />
          </div>
          <DynamicFormInput label="Telefon" placeholder="Wpisz swój telefon" register={register} validation={{ required: "Telefon jest wymagany" }} error={errors.phone} name="phone" control={control} type="tel"/>
          <DynamicFormInput label="Twoja Wiadomość" placeholder="Wpisz swoją wiadomość" register={register} validation={{ required: "Wiadomość jest wymagana" }} error={errors.message} name="message" control={control} type="textarea"/>
          <DynamicFormInput label="Wybierz plik" register={register} validation={{}} error={undefined} name="file" control={control} type="file" />
          <DynamicFormInput label="Wyrażam zgodę na wykorzystanie moich danych osobowych w celu kontaktu ze strony PTE Częstochowa" register={register} validation={{ required: "Musisz zaakceptować warunki" }} error={errors.consent} name="consent" control={control} type="checkbox" />
          <Button type="submit" name="submit" color="success" variant="contained" endIcon={<SendIcon />} disabled={loading}>
            {loading ? "Wysyłanie..." : "Wyślij Wiadomość"}
          </Button>
        </form>
      </div>
    </FormProvider>
  );
}
