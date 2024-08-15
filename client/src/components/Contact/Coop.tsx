import FileBox from "../InputContact/FileBox";
import TextareaBox from "../InputContact/TextareaBox";
import TextBox from "../InputContact/TextBox";
import CheckBox from "../InputContact/Checkbox";

export default function Coop({ label } : {label: string}) {
    return (
        <>
            <h3 className="text-[24px] font-bold mb-1">{label}</h3>
            <hr className="h-[5px] max-w-[50px] bg-[#17822e]"></hr>
            <form className="mt-4 grid grid-cols-1 xl:grid-cols-2 gap-3 xl:gap-6">
                    <TextBox tooltipContent="Wpisz swoje imię. Pamiętaj, że musisz zacząć od dużej litery i nie możesz wprowadzać większej liczby nazw (np. oddzielając spacjami)" placeholder="Wpisz swoje imię" type="text" name="name" label="Imię" error="Pole jest wymagane" />
                    <TextBox tooltipContent="Wpisz swoje nazwisko. Pamiętaj, że musisz zacząć od dużej litery. Jeśli masz nazwisko połączone, musisz je wpisać z myślnikami." placeholder="Wpisz swoje nazwisko" type="text" name="lastName" label="Nazwisko" error="Pole jest wymagane" />
                    <TextBox tooltipContent="E-mail musi zawierać znak (@) i domenę serwera (np. twój@example.com)" placeholder="Wpisz swoje email" type="email" name="email" label="Email" error="Pole jest wymagane" />
                    <TextBox tooltipContent="Numer telefonu należy wpisać w standardzie ogólnym, np. XXX-XXX-XXX, +(XX)X XX XX XX, +(XX) XXX-XXX-XXX i tak dalej." placeholder="Wpisz swoje telefon" type="text" name="tel" label="Telefon" error="Pole jest wymagane" />
                    <TextareaBox tooltipContent="Pełny tekst Twojej wiadomości do nas. Należy pamiętać, że ten formularz nie spełnia żadnego ze standardów formatowania. Jeśli chcesz wysłać nam dłuższą wiadomość, sugerujemy przesłanie jej do nas w formacie pdf lub doc." placeholder="Pełny tekst Twojej wiadomości do nas. Należy pamiętać, że ten formularz nie spełnia żadnego ze standardów formatowania. Jeśli chcesz wysłać nam dłuższą wiadomość, sugerujemy przesłanie jej do nas w formacie pdf lub doc." name="message" label="Twoja Wiadomość" error="Pole jest wymagane" />
                    <FileBox label="Załącz Plik" info={"Maksymalny bezpieczny rozmiar pliku to około 20 MB."} name="file" />
                    <CheckBox id="rodo" name="rodo" label="Wyrażam zgodę na wykorzystanie moich danych osobowych w celu kontaktu ze strony PTE Częstochowa" tooltipContent="Należy zaznaczyć, jeśli chcesz przekazać nam wiadomość" error="Pole jest wymagane" />
                    <button type="submit" className="mt-2 select-none rounded-lg bg-green-700 py-3 px-6 text-center align-middle text-[14px] font-bold uppercase text-white shadow-lg transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Wyślij Wiadomość</button>
            </form>
        </>
    );
}