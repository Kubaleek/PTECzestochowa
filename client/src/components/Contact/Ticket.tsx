import FileBox from "../InputContact/FileBox";
import SelectBox from "../InputContact/SelectBox";
import TextareaBox from "../InputContact/TextareaBox";
import TextBox from "../InputContact/TextBox";

export default function Ticket({ label } : {label: string}) {
    const salutation = ['Ms.', 'Mrs.', 'Miss', 'Mr.']
    const presentationType = ['Wykład', 'Plakat']
    const choosepaymentKind = ['Pełne zakwaterowanie (200 EURO)', 'Bez zakwaterowania (170 EURO)', 'Rabat (150 EURO)', 'Sama publikacja (50 EURO)']

    return (
        <>
            <h3 className="text-[24px] font-bold mb-1">{label}</h3>
            <hr className="h-[5px] max-w-[50px] bg-[#17822e]"></hr>
            <form className="flex flex-col gap-2 mt-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                    <SelectBox label="Forma grzecznościowa" name="salutation" options={salutation} tooltipContent="Wybierz formę powitania. Używamy go na dyplomie"/>
                    <TextBox tooltipContent="Proszę podać pełny stopień naukowy (oraz inżyniera, jeśli posiadasz), np. „Profesor”, „Doktor”, „Doktor Inżynier”" placeholder="Proszę podać pełny stopień naukowy (oraz inżyniera, jeśli posiadasz), np. „Profesor”, „Doktor”, „Doktor Inżynier”" type="text" name="academicDegree" label="Stopień akademicki" error="Pole jest wymagane" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
                    <TextBox tooltipContent="Wpisz swoje imię. Pamiętaj, że musisz zacząć od dużej litery i nie możesz wprowadzać większej liczby nazw (np. oddzielając spacjami)" placeholder="Wpisz swoje imię" type="text" name="name" label="Imię" error="Pole jest wymagane" />
                    <TextBox tooltipContent="Możesz wpisać tutaj swoje inne imiona i nazwiska (pole opcjonalne)" placeholder="Wpisz swoje drugie imię" type="text" name="secondName" label="Drugie Imię" />
                    <TextBox tooltipContent="Wpisz swoje nazwisko. Pamiętaj, że musisz zacząć od dużej litery. Jeśli masz nazwisko połączone, musisz je wpisać z myślnikami." placeholder="Wpisz swoje nazwisko" type="text" name="lastName" label="Nazwisko" error="Pole jest wymagane" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
                    <TextBox type="text" name="affilation" label="Przynależność" tooltipContent="Wpisz tutaj nazwę jednostki naukowej, którą reprezentujesz" placeholder="Wpisz tutaj nazwę jednostki naukowej, którą reprezentujesz" error="Pole jest wymagane" />
                    <TextBox type="text" name="publicationTitle" label="Tytuł publikacji" tooltipContent="Wpisz tutaj pełny tytuł publikacji" placeholder="Wpisz tutaj pełny tytuł publikacji" error="Pole jest wymagane" />
                    <SelectBox label="Formularz prezentacji:" name="presentationType" options={presentationType} tooltipContent="Wybierz sposób prezentacji swojego artykułu"/>
                </div>
                <TextareaBox tooltipContent="Wprowadź podsumowanie publikacji" placeholder="Wprowadź podsumowanie publikacji" name="publicationSummary" label="Podsumowanie publikacji" error="Pole jest wymagane" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
                    <TextBox tooltipContent="E-mail musi zawierać znak (@) i domenę serwera (np. twój@example.com)" placeholder="Wpisz swoje email" type="email" name="email" label="Email" error="Pole jest wymagane" />
                    <TextBox tooltipContent="Numer telefonu należy wpisać w standardzie ogólnym, np. XXX-XXX-XXX, +(XX)X XX XX XX, +(XX) XXX-XXX-XXX i tak dalej." placeholder="Wpisz swoje telefon" type="text" name="tel" label="Telefon" error="Pole jest wymagane" />
                    <SelectBox label="Formularz prezentacji:" name="choosepaymentKind" options={choosepaymentKind} tooltipContent="Wybrana płatność zostanie uwzględniona na fakturze."/>
                </div>
                <h3 className="text-[24px] font-bold mb-1">Pole danych faktury</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
                    <TextBox type="text" name="paymentUnit" label="Nazwa instytucji lub nazwa płatnika" tooltipContent="Nazwa instytucji lub nazwa płatnika" placeholder="Nazwa instytucji lub nazwa płatnika" error="Pole jest wymagane" />
                    <TextBox type="text" name="streetName" label="Nazwa ulicy" tooltipContent="Nazwa ulicy" placeholder="Nazwa ulicy" error="Pole jest wymagane" />
                    <TextBox type="text" name="streetNumber" label="Numer majątku" tooltipContent="Np. Numer nieruchomości, numer budynku, numer domu i tak dalej" placeholder="Np. Numer nieruchomości, numer budynku, numer domu i tak dalej" error="Pole jest wymagane" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
                    <TextBox type="text" name="streetLocalNumber" label="Numer regionalny" tooltipContent="Np. numer mieszkania, numer pokoju i tak dalej." placeholder="Np. numer mieszkania, numer pokoju i tak dalej." error="Pole jest wymagane" />
                    <TextBox type="text" name="zipCode" label="Kod pocztowy" tooltipContent="Kod pocztowy" placeholder="Kod pocztowy" error="Pole jest wymagane" />
                    <TextBox type="text" name="city" label="Miasto" tooltipContent="Np. Miasto, miejsce, wieś i tak dalej" placeholder="Np. Miasto, miejsce, wieś i tak dalej" error="Pole jest wymagane" />
                </div>
                <TextBox type="text" name="nipEU" label="Identyfikator podatkowy" tooltipContent="Wpisz swój identyfikator podatkowy" placeholder="Wpisz swój identyfikator podatkowy" error="Pole jest wymagane" />
                <FileBox label="Potwierdzający Identyfikator podatkowy" info={"Musisz przesłać nam zeskanowane potwierdzenie tożsamości podatkowej."} name="nipfile" error="Pole jest wymagane" />
                <TextareaBox tooltipContent="Pełny tekst Twojej wiadomości do nas. Należy pamiętać, że ten formularz nie spełnia żadnego ze standardów formatowania. Jeśli chcesz wysłać nam dłuższą wiadomość, sugerujemy przesłanie jej do nas w formacie pdf lub doc." placeholder="Pełny tekst Twojej wiadomości do nas. Należy pamiętać, że ten formularz nie spełnia żadnego ze standardów formatowania. Jeśli chcesz wysłać nam dłuższą wiadomość, sugerujemy przesłanie jej do nas w formacie pdf lub doc." name="message" label="Twoja Wiadomość" error="Pole jest wymagane" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                    <div className="flex flex-col gap-2">
                        <FileBox label="Plik z umową na przetwarzanie danych osobowych" info={"Preferujemy zeskanowany plik zapisany w formacie PDF lub JPEG"} name="rodofile" error="Pole jest wymagane" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <FileBox label="Plik z oświadczeniem Ghostwriting" info={"Preferujemy zeskanowany plik zapisany w formacie PDF lub JPEG"} name="ghostwritingfile" error="Pole jest wymagane" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <FileBox label="Plik z oświadczeniem o publikacji autora(ów)" info={"Preferujemy zeskanowany plik zapisany w formacie PDF lub JPEG"} name="autorfile" error="Pole jest wymagane" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <FileBox label="Plik publikacji" info={"Plik musi zostać zweryfikowany zgodnie z wymaganiami edytora"} name="publicationfile" error="Pole jest wymagane" />
                    </div>
                </div>
                <button type="submit" className="mt-2 select-none rounded-lg bg-green-700 py-3 px-6 text-center align-middle text-[14px] font-bold uppercase text-white shadow-lg transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Wyślij Wiadomość</button>
            </form>
        </>
    );
}