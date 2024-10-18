import { Tabs, Tab } from "@nextui-org/react";
import ContactData from "./Info";

export default function Contact() {
  return (
    <div className="bg-white flex flex-col">
      <Tabs
        aria-label="Options"
        color="primary"
        variant="underlined"
        classNames={{
          tabList:
            "gap-3 w-full relative rounded-none p-0 pb-0 ml-1 border-b border-divider",
          cursor: "w-full bg-[#17822e]",
          tab: "max-w-fit h-12",
          tabContent: "group-data-[selected=true]:text-[#17822e]",
        }}
      >
        <Tab
          title={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-message-square-more"
            >
              {" "}
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />{" "}
              <path d="M8 10h.01" /> <path d="M12 10h.01" />{" "}
              <path d="M16 10h.01" />
            </svg>
          }
        >
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <ContactData />
            <div className="px-4 py-4 bg-white rounded-lg shadow-lg flex flex-col gap-3">
              <h3 className="font-bold text-xl text-pretty">
                Co musi zawierać wiadomość
              </h3>
              <p className="text-small sm:text-lg font-medium text-pretty">
                Tytuł Wiadomości: Wiadomość Ogólna
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-800">
                <li className="text-base font-medium">Imię i Nazwisko</li>
                <li className="text-base font-medium">Email</li>
                <li className="text-base font-medium">Telefon</li>
                <li className="text-base font-medium">Twoja wiadomość</li>
                <li className="text-base font-medium">Załącznik pliku</li>
              </ul>
              <p className="text-sm text-gray-600">
                Wysyłając wiadomość, zgadzasz się na wykorzystanie Twoich danych
                osobowych w celu kontaktu ze strony PTE Częstochowa.
              </p>
            </div>
          </div>
        </Tab>
        <Tab
          title={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-handshake"
            >
              <path d="m11 17 2 2a1 1 0 1 0 3-3" />
              <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
              <path d="m21 3 1 11h-2" />
              <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
              <path d="M3 4h8" />
            </svg>
          }
        >
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <ContactData />
            <div className="px-4 py-4 bg-white rounded-lg shadow-lg flex flex-col gap-3">
              <h3 className="font-bold text-xl text-pretty">
                Co musi zawierać wiadomość
              </h3>
              <p className="text-small sm:text-lg font-medium text-pretty">
                Tytuł Wiadomości: Propozycja Współpracy
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-800">
                <li className="text-base font-medium">Imię i Nazwisko</li>
                <li className="text-base font-medium">Email</li>
                <li className="text-base font-medium">Telefon</li>
                <li className="text-base font-medium">Twoja wiadomość</li>
                <li className="text-base font-medium">Załącznik pliku</li>
              </ul>
              <p className="text-sm text-gray-600">
                Wysyłając wiadomość, zgadzasz się na wykorzystanie Twoich danych
                osobowych w celu kontaktu ze strony PTE Częstochowa.
              </p>
            </div>
          </div>
        </Tab>
        <Tab
          title={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-contact"
            >
              <path d="M16 2v2" />
              <path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
              <path d="M8 2v2" />
              <circle cx="12" cy="11" r="3" />
              <rect x="3" y="4" width="18" height="18" rx="2" />
            </svg>
          }
        >
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <ContactData />
            <div className="p-4 bg-white rounded-lg shadow-lg flex flex-col gap-3">
              <h3 className="font-bold text-xl text-pretty">
                Co musi zawierać wiadomość
              </h3>
              <p className="text-small sm:text-lg font-medium text-pretty">
                Tytuł Wiadomości: Zgłoszenie na Kongres
              </p>
              <ul className="list-disc pl-6 text-base text-gray-700 space-y-2">
                <li>
                  <span className="font-semibold">Forma grzecznościowa:</span>
                  <ul className="list-none pl-4 mt-1 text-gray-600 space-y-1">
                    <li>- Ms.</li>
                    <li>- Mrs.</li>
                    <li>- Miss</li>
                    <li>- Mr.</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Stopień akademicki</span>
                </li>
                <li>
                  <span className="font-semibold">Imię</span>
                </li>
                <li>
                  <span className="font-semibold">Drugie Imię</span>
                </li>
                <li>
                  <span className="font-semibold">Nazwisko</span>
                </li>
                <li>
                  <span className="font-semibold">Przynależność</span>
                </li>
                <li>
                  <span className="font-semibold">Tytuł publikacji</span>
                </li>
                <li>
                  <span className="font-semibold">Formularz prezentacji:</span>
                  <ul className="list-none pl-4 mt-1 text-gray-600 space-y-1">
                    <li>- Wykład</li>
                    <li>- Plakat</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Podsumowanie publikacji</span>
                </li>
                <li>
                  <span className="font-semibold">Email</span>
                </li>
                <li>
                  <span className="font-semibold">Telefon</span>
                </li>
                <li>
                  <span className="font-semibold">Formularz prezentacji:</span>
                  <ul className="list-none pl-4 mt-1 text-gray-600 space-y-1">
                    <li>- Pełne zakwaterowanie (200 EURO)</li>
                    <li>- Bez zakwaterowania (170 EURO)</li>
                    <li>- Rabat (150 EURO)</li>
                    <li>- Sama publikacja (50 EURO)</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Pole danych faktury:</span>
                  <ul className="list-none pl-4 mt-1 text-gray-600 space-y-1">
                    <li>- Nazwa instytucji lub nazwa płatnika</li>
                    <li>- Nazwa ulicy</li>
                    <li>- Numer majątku</li>
                    <li>- Numer regionalny</li>
                    <li>- Kod pocztowy</li>
                    <li>- Miasto</li>
                    <li>- Identyfikator podatkowy</li>
                    <li>- Potwierdzający Identyfikator podatkowy</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Twoja wiadomość</span>
                </li>
                <li>
                  <span className="font-semibold">
                    Plik z umową na przetwarzanie danych osobowych
                  </span>
                </li>
                <li>
                  <span className="font-semibold">
                    Plik z oświadczeniem o publikacji autora(ów)
                  </span>
                </li>
                <li>
                  <span className="font-semibold">
                    Plik z oświadczeniem Ghostwriting
                  </span>
                </li>
                <li>
                  <span className="font-semibold">Plik publikacji</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                Wysyłając wiadomość, zgadzasz się na wykorzystanie Twoich danych
                osobowych w celu kontaktu ze strony PTE Częstochowa.
              </p>
            </div>
          </div>
        </Tab>
        <Tab
          title={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-book"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
            </svg>
          }
        >
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <ContactData />
            <div className="p-4 bg-white rounded-lg shadow-lg flex flex-col gap-3">
              <h3 className="font-bold text-xl text-pretty">
                Co musi zawierać wiadomość
              </h3>
              <p className="text-small sm:text-lg font-medium text-pretty">
                Tytuł Wiadomości: Kursy
              </p>
              <ul className="list-disc list-inside space-y-4 text-gray-800">
                <li className="text-base font-medium">
                  Wybierz tematykę kursu:
                  <ul className="list-none pl-6 mt-2 text-gray-600 space-y-2">
                    <li>- Szkolenie gospodarcze</li>
                    <li>- Szkolenie rachunkowe</li>
                    <li>- Szkolenie kadrowe</li>
                    <li>
                      - Zasady pracy i obowiązki kasjerów walutowo – złotowych
                    </li>
                    <li>- Zasady pracy i obowiązki kasjerów złotowych</li>
                    <li>
                      - Przeciwdziałanie wprowadzaniu do obrotu finansowego
                      wartości majątkowych pochodzących z nielegalnych lub
                      nieujawnionych źródeł
                    </li>
                    <li>
                      - Korekty dokumentacji płacowych i konsekwencje dla
                      rozliczeń z zakładem ubezpieczeń społecznych i urzędem
                      skarbowym
                    </li>
                    <li>
                      - Zmiany w zasadach ustalania prawa i wypłacania zasiłków
                      z ubezpieczenia chorobowego i wypadkowego wprowadzone od
                      nowego roku
                    </li>
                    <li>
                      - Zmiany w zasadach ustalania obowiązków ubezpieczeń
                      społecznych wykonujących umowy cywilnoprawne
                    </li>
                    <li>- Inne</li>
                  </ul>
                </li>
                <li className="text-base font-medium">Imię i Nazwisko</li>
                <li className="text-base font-medium">Email</li>
                <li className="text-base font-medium">
                  Plik z umową na przetwarzanie danych osobowych
                </li>
              </ul>
              <p className="text-sm text-gray-600">
                Wysyłając wiadomość, zgadzasz się na wykorzystanie Twoich danych
                osobowych w celu kontaktu ze strony PTE Częstochowa.
              </p>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
