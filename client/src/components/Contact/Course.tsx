import FileBox from "../InputContact/FileBox";
import TextareaBox from "../InputContact/TextareaBox";
import TextBox from "../InputContact/TextBox";
import SelectBox from "../InputContact/SelectBox";
import CheckBox from "../InputContact/Checkbox";

export default function Course({ label } : {label: string}) {

    const coursesTopic = ["Szkolenie gospodarcze","Szkolenie rachunkowe","Szkolenie kadrowe","Zasady pracy i obowiązki kasjerów walutowo – złotowych","Zasady pracy i obowiązki kasjerów złotowych","Przeciwdziałanie wprowadzaniu do obrotu finansowego wartości majątkowych pochodzących z nielegalnych lub nieujawnionych źródeł","Korekty dokumentacji płacowych i konsekwencje dla rozliczeń z zakładem ubezpieczeń społecznych i urzędem skarbowym","Zmiany w zasadach ustalania prawa i wypłacania zasiłków z ubezpieczenia chorobowego i wypadkowego wprowadzone od nowego roku","Zmiany w zasadach ustalania obowiązków ubezpieczeń społecznych wykonujących umowy cywilnoprawne","Inne"]

    return (
        <>
            <h3 className="text-[24px] font-bold mb-1">{label}</h3>
            <hr className="h-[5px] max-w-[50px] bg-[#17822e]"></hr>
            <form className="mt-3 grid grid-cols-1 xl:grid-cols-2 gap-3 xl:gap-6">
                <SelectBox label="Wybierz tematykę kursu" name="coursesTopic" options={coursesTopic} tooltipContent="Wybierz interesująca Cię tematykę kursu"/>
                <TextBox tooltipContent="Wpisz swoje imię. Pamiętaj, że musisz zacząć od dużej litery i nie możesz wprowadzać większej liczby nazw (np. oddzielając spacjami)" placeholder="Wpisz swoje imię" type="text" name="name" label="Imię" error="Pole jest wymagane" />
                <TextBox tooltipContent="Wpisz swoje nazwisko. Pamiętaj, że musisz zacząć od dużej litery. Jeśli masz nazwisko połączone, musisz je wpisać z myślnikami." placeholder="Wpisz swoje nazwisko" type="text" name="lastName" label="Nazwisko" error="Pole jest wymagane" />
                <TextBox tooltipContent="E-mail musi zawierać znak (@) i domenę serwera (np. twój@example.com)" placeholder="Wpisz swoje email" type="email" name="email" label="Email" error="Pole jest wymagane" />
                <FileBox label="Plik z umową na przetwarzanie danych osobowych" info={"Preferujemy zeskanowany plik zapisany w formacie PDF lub JPEG"} name="rodofile" error="Pole jest wymagane" />
                <div>
                    <div className="flex flex-col gap-3 mt-3">
                        <CheckBox id="newslatter" name="newslatter" label="Wyrażam zgodę na przesyłanie mi ofert reklamowych i promocyjnych od PTE" tooltipContent="Należy zaznaczyć, jeśli chcesz otrzymywać oferty reklamowe i promocyjne od PTE" />
                        <CheckBox id="rodo" name="rodo" label="Wyrażam zgodę na wykorzystanie moich danych osobowych w celu kontaktu ze strony PTE Częstochowa" tooltipContent="Należy zaznaczyć, jeśli chcesz przekazać nam wiadomość" error="Pole jest wymagane" />
                    </div>
                </div>
                <button type="submit" className="mt-2 select-none rounded-lg bg-green-700 py-3 px-6 text-center align-middle text-[14px] font-bold uppercase text-white shadow-lg transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Wyślij Wiadomość</button>
            </form>
        </>
    );
}