import Coop from "./Contact/Coop";
import Course from "./Contact/Course";
import General from "./Contact/General";
import Tabs from "./Contact/Tabs";
import Ticket from "./Contact/Ticket";

export default function Contact() {

    const tabs = [
        { title: 'Wiadomość Ogólna', content: <General /> },
        { title: 'Propozycja Współpracy', content: <Coop />},
        { title: 'Zgłoszenie na kongres', content: <Ticket /> },
        { title: 'Kursy', content: <Course />},
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
