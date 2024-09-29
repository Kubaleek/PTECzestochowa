import React, { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import DynamicFormInput from "../FormsInput/DynamicInput";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { toast } from "react-hot-toast";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

interface FormData {
  fullname: string;
  email: string;
  phone: string;
  consent: boolean;
  message: string;
  AcademicDegree: string;
  secondname?: string;
  affilation: string;
  publicationtitle: string;
  presentationtype: string;
  publicationSummary: string;
  choosepaymentkind: string;
  file1: FileList;
  file2: FileList;
  file3: FileList;
  file4: FileList;
  institutionName: string;
  streetName: string;
  propertyNumber: string;
  regionalNumber: string;
  postalCode: string;
  city: string;
  taxIdentifier: string;
  confirmingTaxIdentifier: string;
}

const AcademicDegreeData = ["Ms", "Mrs", "Miss", "Mr."];
const presentationTypeData = ["Wykład", "Plakat"];
const accommodationOptions = [
  "Pełne zakwaterowanie (200 EURO)",
  "Bez zakwaterowania (170 EURO)",
  "Rabat (150 EURO)",
  "Sama publikacja (50 EURO)",
];

export default function Congres() {
  const methods = useForm<FormData>();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
  };

  const onSaveInvoices: SubmitHandler<FormData> = async (data) => {
    
  };

  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
  } = methods;

  return (
    <>
      <FormProvider {...methods}>
        <div className="flex flex-col">
          <h3 className="font-bold text-xl sm:text-2xl text-pretty leading-relaxed">
            Zgłoszenie na kongres
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <FormControl variant="standard" color="success" fullWidth>
                <InputLabel htmlFor="AcademicDegree">
                  Forma grzecznościowa:
                </InputLabel>
                <Select
                  id="AcademicDegree"
                  {...register("AcademicDegree", {
                    required: "Forma grzecznościowa jest wymagana",
                  })}
                >
                  <MenuItem aria-label="None" value="" />
                  {AcademicDegreeData.map((degree, index) => (
                    <MenuItem key={index} value={degree}>
                      {degree}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <DynamicFormInput
                label="Stopień akademicki"
                placeholder="Proszę podać pełny stopień naukowy (oraz inżyniera, jeśli posiadasz), np. „Profesor”, „Doktor”, „Doktor Inżynier”"
                register={register}
                validation={{ required: "Stopień akademicki jest wymagany" }}
                error={errors.AcademicDegree}
                name="AcademicDegree"
                control={control}
                type="text"
              />
              <DynamicFormInput
                label="Imię i Nazwisko"
                placeholder="Wpisz swoje imię i nazwisko"
                register={register}
                validation={{ required: "Imię i nazwisko jest wymagane" }}
                error={errors.fullname}
                name="fullname"
                control={control}
                type="text"
              />
              <DynamicFormInput
                label="Drugie Imię"
                placeholder="Wpisz swoje drugie imię"
                register={register}
                validation={{}}
                error={undefined}
                name="secondname"
                control={control}
                type="text"
              />
              <DynamicFormInput
                label="Przynależność"
                placeholder="Wpisz nazwę jednostki naukowej, którą reprezentujesz"
                register={register}
                validation={{ required: "Przynależność jest wymagana" }}
                error={errors.affilation}
                name="affilation"
                control={control}
                type="text"
              />
              <DynamicFormInput
                label="Tytuł publikacji"
                placeholder="Wpisz pełny tytuł publikacji"
                register={register}
                validation={{ required: "Tytuł publikacji jest wymagany" }}
                error={errors.publicationtitle}
                name="publicationtitle"
                control={control}
                type="text"
              />
            </div>
            <FormControl variant="standard" color="success" fullWidth>
              <InputLabel htmlFor="presentationtype">
                Tematyka prezentacji:
              </InputLabel>
              <Select
                id="presentationtype"
                {...register("presentationtype", {
                  required: "Tematyka prezentacji jest wymagana",
                })}
              >
                <MenuItem aria-label="None" value="" />
                {presentationTypeData.map((type, index) => (
                  <MenuItem key={index} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <DynamicFormInput
              label="Podsumowanie publikacji"
              placeholder="Wprowadź podsumowanie publikacji"
              register={register}
              validation={{ required: "Podsumowanie publikacji jest wymagane" }}
              error={errors.publicationSummary}
              name="publicationSummary"
              control={control}
              type="textarea"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
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
                label="Telefon"
                placeholder="Wpisz swój telefon"
                register={register}
                validation={{ required: "Telefon jest wymagany" }}
                error={errors.phone}
                name="phone"
                control={control}
                type="tel"
              />
            </div>
            <FormControl variant="standard" color="success" fullWidth>
              <InputLabel htmlFor="choosepaymentkind">
                Formularz prezentacji:
              </InputLabel>
              <Select
                id="choosepaymentkind"
                {...register("choosepaymentkind", {
                  required: "Formularz prezentacji jest wymagany",
                })}
              >
                <MenuItem aria-label="None" value="" />
                {accommodationOptions.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              type="button"
              color="success"
              variant="outlined"
              className="w-full capitalize lg:w-auto rounded text-white bg-green-700 font-bold"
              onClick={onOpen}
            >
              Wypełnij Pole Faktury
            </Button>
            <DynamicFormInput
              label="Twoja Wiadomość"
              placeholder="Wpisz swoją wiadomość"
              register={register}
              validation={{ required: "Wiadomość jest wymagana" }}
              error={errors.message}
              name="message"
              control={control}
              type="textarea"
            />
            <DynamicFormInput
              label="Plik z umową na przetwarzanie danych osobowych"
              register={register}
              name="file1"
              control={control}
              validation={{ required: "Plik z umową jest wymagany" }}
              error={errors.file1}
              type="file"
            />
            <DynamicFormInput
              label="Plik z oświadczeniem o publikacji autora(ów)"
              register={register}
              name="file2"
              control={control}
              validation={{
                required: "Plik z oświadczeniem o publikacji jest wymagany",
              }}
              error={errors.file2}
              type="file"
            />
            <DynamicFormInput
              label="Plik z oświadczeniem Ghostwriting"
              register={register}
              name="file3"
              control={control}
              validation={{
                required: "Plik z oświadczeniem Ghostwriting jest wymagany",
              }}
              error={errors.file3}
              type="file"
            />
            <DynamicFormInput
              label="Plik publikacji"
              register={register}
              name="file4"
              control={control}
              validation={{ required: "Plik publikacji jest wymagany" }}
              error={errors.file4}
              type="file"
            />
            <Button
              type="submit"
              name="submit"
              color="success"
              variant="contained"
              endIcon={<SendIcon />}
              disabled={loading}
            >
              {loading ? "Wysyłanie..." : "Wyślij Wiadomość"}
            </Button>
          </form>
        </div>
      </FormProvider>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        backdrop="blur"
        scrollBehavior="inside"
        radius="sm"
        className="!bg-[#f5f1ec] border-1 shadow-lg"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Dane Faktury
              </ModalHeader>
              <ModalBody className="pt-0">
                <FormProvider {...methods}>
                  <form
                    onSubmit={handleSubmit(onSaveInvoices)}
                    className="flex flex-col gap-6"
                  >
                    <DynamicFormInput
                      label="Nazwa instytucji lub nazwa płatnika"
                      placeholder="Nazwa instytucji lub nazwa płatnika"
                      register={register}
                      validation={{
                        required:
                          "Nazwa instytucji lub nazwa płatnika jest wymagany",
                      }}
                      error={errors.institutionName}
                      name="institutionName"
                      control={control}
                      type="text"
                    />
                    <DynamicFormInput
                      label="Nazwa ulicy"
                      placeholder="Nazwa ulicy"
                      register={register}
                      validation={{
                        required: "Nazwa ulicy jest wymagany",
                      }}
                      error={errors.streetName}
                      name="institutionName"
                      control={control}
                      type="text"
                    />
                    <DynamicFormInput
                      label="Numer majątku"
                      placeholder="Np. Numer nieruchomości, numer budynku, numer domu i tak dalej"
                      register={register}
                      validation={{
                        required: "Numer majątku jest wymagany",
                      }}
                      error={errors.propertyNumber}
                      name="propertyNumber"
                      control={control}
                      type="text"
                    />
                    <DynamicFormInput
                      label="Numer regionalny"
                      placeholder="Np. numer mieszkania, numer pokoju i tak dalej."
                      register={register}
                      validation={{
                        required: "Numer regionalny jest wymagany",
                      }}
                      error={errors.regionalNumber}
                      name="regionalNumber"
                      control={control}
                      type="text"
                    />
                    <DynamicFormInput
                      label="Kod pocztowy"
                      placeholder="Kod pocztowy"
                      register={register}
                      validation={{
                        required: "Kod pocztowy jest wymagany",
                      }}
                      error={errors.postalCode}
                      name="postalCode"
                      control={control}
                      type="text"
                    />
                    <DynamicFormInput
                      label="Miasto"
                      placeholder="Np. Miasto, miejsce, wieś i tak dalej"
                      register={register}
                      validation={{
                        required: "Miasto jest wymagany",
                      }}
                      error={errors.city}
                      name="city"
                      control={control}
                      type="text"
                    />
                    <DynamicFormInput
                      label="Identyfikator podatkowy"
                      placeholder="Wpisz swój identyfikator podatkowy"
                      register={register}
                      validation={{
                        required: "Identyfikator podatkowy jest wymagany",
                      }}
                      error={errors.taxIdentifier}
                      name="taxIdentifier"
                      control={control}
                      type="text"
                    />
                    <DynamicFormInput
                      label="Potwierdzający Identyfikator podatkowy"
                      register={register}
                      validation={{
                        required:
                          "Potwierdzający Identyfikator podatkowy jest wymagane",
                      }}
                      error={errors.confirmingTaxIdentifier}
                      name="confirmingTaxIdentifier"
                      control={control}
                      type="file"
                    />
                  </form>
                </FormProvider>
              </ModalBody>
              <ModalFooter>
                <Button
                  type="submit"
                  name="savedata"
                  color="success"
                  variant="outlined"
                  className="capitalize"
                >
                  Zapisz Dane Faktury
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
