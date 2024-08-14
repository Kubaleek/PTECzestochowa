import General from "./Contact/General";
import Coop from "./Contact/Coop";
import Tabs from "./Tabs";
import Ticket from "./Contact/Ticket";
import Course from "./Contact/Course";


export default function Contact() {

    const tabs = [
        { title: 'Wiadomość Ogólna', content: <General label="Wiadomość Ogólna" /> },
        { title: 'Propozycja Współpracy', content: <Coop label="Propozycja Współpracy" /> },
        { title: 'Zgłoszenie na kongres', content: <Ticket label="Zgłoszenie na kongres" /> },
        { title: 'Kursy', content: <Course label="Kursy" /> },
    ];

    return (
        <>
            <p className="text-[16px] text-justify font-medium">
                Aby skontaktować się z PTE Częstochowa, wybierz jedną z następujących form kontaktu:
            </p>
            <Tabs tabs={tabs} />
        </>
    );
}
