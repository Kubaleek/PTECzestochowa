import { Tabs, Tab } from "@nextui-org/react";
import ContactData from "./Info";

const tabContents = [
  {
    title: "Wiadomość Ogólna",
    description: "Co musi zawierać wiadomość",
    items: [
      "Imię i Nazwisko",
      "Email",
      "Telefon",
      "Twoja wiadomość",
      "Załącznik pliku",
    ],
    icon: (
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
        aria-label="Wiadomość Ogólna"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01" />
        <path d="M12 10h.01" />
        <path d="M16 10h.01" />
      </svg>
    ),
  },
  {
    title: "Propozycja Współpracy",
    description: "Co musi zawierać wiadomość",
    items: [
      "Imię i Nazwisko",
      "Email",
      "Telefon",
      "Twoja wiadomość",
      "Załącznik pliku",
    ],
    icon: (
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
        aria-label="Propozycja Współpracy"
      >
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
        <path d="m21 3 1 11h-2" />
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
        <path d="M3 4h8" />
      </svg>
    ),
  },
  {
    title: "Zgłoszenie na Kongres",
    description: "Co musi zawierać wiadomość",
    items: [
      {
        title: "Forma grzecznościowa",
        options: ["Ms.", "Mrs.", "Miss", "Mr."],
      },
      "Stopień akademicki",
      "Imię",
      "Drugie Imię",
      "Nazwisko",
      "Przynależność",
      "Tytuł publikacji",
      {
        title: "Forma prezentacji",
        options: [
          "Pełne zakwaterowanie (200 EURO)", 
          "Bez zakwaterowania (170 EURO)", 
          "Rabat (150 EURO)", 
          "Sama publikacja (50 EURO)"],
      },
      "Podsumowanie publikacji",
      "Email",
      "Telefon",
      {
        title: "Pole danych faktury",
        options: [
          "Nazwa instytucji lub nazwa płatnika", 
          "Nazwa ulicy", 
          "Numer majątku", 
          "Numer regionalny",
          "Kod pocztowy",
          "Miasto",
          "Identyfikator podatkowy",
          "Potwierdzający Identyfikator podatkowy"
        ],
      },
      "Twoja wiadomość",
      "Plik z umową na przetwarzanie danych osobowych",
      "Plik z oświadczeniem o publikacji autora(ów)",
      "Plik z oświadczeniem Ghostwriting",
      "Plik publikacji",
    ],
    icon: (
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
        aria-label="Zgłoszenie na Kongres"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      </svg>
    ),
  },
  {
    title: "Kursy",
    description: "Co musi zawierać wiadomość",
    items: [
      {
        title: "Wybierz tematykę kursu",
        options: [
          "Szkolenie gospodarcze", 
          "Szkolenie rachunkowe", 
          "Szkolenie kadrowe", 
          "Zasady pracy i obowiązki kasjerów walutowo – złotowych",
          "Zasady pracy i obowiązki kasjerów złotowych",
          "Przeciwdziałanie wprowadzaniu do obrotu finansowego wartości majątkowych pochodzących z nielegalnych lub nieujawnionych źródeł",
          "Korekty dokumentacji płacowych i konsekwencje dla rozliczeń z zakładem ubezpieczeń społecznych i urzędem skarbowym",
          "Zmiany w zasadach ustalania prawa i wypłacania zasiłków z ubezpieczenia chorobowego i wypadkowego wprowadzone od nowego roku",
          "Zmiany w zasadach ustalania obowiązków ubezpieczeń społecznych wykonujących umowy cywilnoprawne",
          "Inne"
        ],
      },
      "Imię i Nazwisko",
      "Email",
      "Plik z umową na przetwarzanie danych osobowych",
    ],
    icon: (
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
        aria-label="Kursy"
      >
        <path d="M16 2v2" />
        <path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
        <path d="M8 2v2" />
        <circle cx="12" cy="11" r="3" />
        <rect x="3" y="4" width="18" height="18" rx="2" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <div className="bg-white flex flex-col">
      <Tabs
        aria-label="Opcje"
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
        {tabContents.map((tab, index) => (
          <Tab key={index} title={tab.icon}>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <ContactData />
              <div className="px-4 py-4 flex flex-col gap-3">
                <h3 className="font-bold text-xl text-pretty">
                  {tab.description}
                </h3>
                <p className="text-small sm:text-lg font-medium text-pretty">
                  Tytuł Wiadomości: {tab.title}
                </p>
                <ul className="list-disc pl-6 text-base text-gray-700 space-y-2">
                  {tab.items.map((item, idx) => (
                    <li key={idx} className="text-base font-medium">
                      {typeof item === "string" ? (
                        item
                      ) : (
                        <div>
                          <span className="font-semibold">{item.title}:</span>
                          <ul className="list-none pl-4 mt-1 text-gray-600 space-y-1">
                            {item.options.map((option, subIdx) => (
                              <li key={subIdx}>- {option}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600">
                  Wysyłając wiadomość, zgadzasz się na wykorzystanie Twoich danych osobowych w celu kontaktu ze strony PTE Częstochowa.
                </p>
              </div>
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
