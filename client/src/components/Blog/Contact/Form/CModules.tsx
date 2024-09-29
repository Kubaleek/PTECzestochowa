import { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import DynamicFormInput from "../FormsInput/DynamicInput";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { toast } from 'react-hot-toast';

interface FormData {
    fullname: string;
    email: string;
    consent: boolean;
    consent2: boolean;
    message: string;
    file: FileList;
  }


export default function CModules() {
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
    }

    return (
        <FormProvider {...methods}>
          <div className="flex flex-col">
            <h3 className="font-bold text-xl sm:text-2xl text-pretty leading-relaxed">
              Kursy
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-3">
                <DynamicFormInput label="Imię i Nazwisko" placeholder="Wpisz swoje imie i nazwisko" register={register} validation={{ required: "Imię i nazwisko jest wymagane" }} error={errors.fullname} name="fullname" control={control} type="text"/>
                <DynamicFormInput label="Email" placeholder="Wpisz swój email" register={register} validation={{ required: "Email jest wymagany" }} error={errors.email} name="email" control={control} type="email" />
              </div>
              <DynamicFormInput label="Plik z umową na przetwarzanie danych osobowych" register={register} validation={{required: "Plik z umową na przetwarzanie danych osobowych jest wymagane"}} error={errors.file} name="file" control={control} type="file" />
              <div className="flex flex-col gap-2">
                <DynamicFormInput label="Wyrażam zgodę na przesyłanie mi ofert reklamowych i promocyjnych od PTE" register={register} validation={{}} error={undefined} name="consent2" control={control} type="checkbox" />
                <DynamicFormInput label="Wyrażam zgodę na wykorzystanie moich danych osobowych w celu kontaktu ze strony PTE Częstochowa" register={register} validation={{ required: "Musisz zaakceptować warunki" }} error={errors.consent} name="consent" control={control} type="checkbox" />
              </div>
              <Button type="submit" name="submit" color="success" variant="contained" endIcon={<SendIcon />} disabled={loading}>
                {loading ? "Wysyłanie..." : "Wyślij Wiadomość"}
              </Button>
            </form>
          </div>
        </FormProvider>
    );
}