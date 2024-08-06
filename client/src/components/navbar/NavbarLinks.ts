export type NavlinksTypes = {
    id: number;
    title: string;
    links: { href: string; name: string }[];
}

const Navlinks: NavlinksTypes[] = [
    {
        id: 1,
        title: "Aktualności",
        links: [
            { href: "/aktualnosci/posty", name: "Posty" },
            { href: "/aktualnosci/nowe-wydarzenia", name: "Nowe wydarzenia" },
            { href: "/aktualnosci/artykuly-i-opinie", name: "Artykuły i opinie" },
            { href: "/aktualnosci/patronaty-pte", name: "Patronaty PTE" },
            { href: "/aktualnosci/wynajem", name: "Wynajem" },
            { href: "/aktualnosci/ksiega-znaku", name: "Księga znaku" },
            { href: "/aktualnosci/polityka-prywatnosci-pte", name: "Polityka prywatności PTE" },
            { href: "/aktualnosci/rodo", name: "RODO" },
        ],
    },
    {
        id: 2,
        title: "O PTE",
        links: [
            { href: "/o-pte/o-nas", name: "O Nas" },
            { href: "/o-pte/about-pte", name: "About PTE" },
            { href: "/o-pte/wladze", name: "Władze" },
            { href: "/o-pte/prezesi-i-zalozyciele", name: "Prezesi i Założyciele" },
            { href: "/o-pte/historia-pte-w-czestochowie", name: "Historia PTE w Częstochowie" },
            { href: "/o-pte/sprawozdania", name: "Sprawozdania" },
            { href: "/o-pte/1-5-podatku", name: "1,5% podatku" },
            { href: "/o-pte/wydawnictwo", name: "Wydawnictwo" },
            { href: "/o-pte/biuro-zarzadu-krajowego", name: "Biuro Zarządu Krajowego" },
        ],
    },
    {
        id: 3,
        title: "Członkostwo",
        links: [
            { href: "/czlonkostwo/czlonkostwo-w-pte", name: "Członkostwo w PTE" },
            { href: "/czlonkostwo/status", name: "Statut" },
            { href: "/czlonkostwo/korzysci-czlonkostwa", name: "Korzyści członkostwa" },
            { href: "/czlonkostwo/prezesi-honorowi", name: "Prezesi honorowi" },
            { href: "/czlonkostwo/panel-czlonkowski", name: "Panel członkowski" },
            { href: "/czlonkostwo/czlonkowie-honorowi", name: "Członkowie honorowi" },
        ],
    },
    {
        id: 4,
        title: "Wydarzenia",
        links: [
            { href: "/wydarzenia/olimpiada-wiedzy-ekonomicznej", name: "Olimpiada Wiedzy Ekonomicznej" },
            { href: "/wydarzenia/kongres-mlodych-ekonomistow", name: "Kongres Młodych Ekonomistów" },
            { href: "/wydarzenia/konferencje-naukowe", name: "Konferencje Naukowe" },
            { href: "/wydarzenia/seminaria-rady-naukowej", name: "Seminaria Rady Naukowej" },
            { href: "/wydarzenia/czwartki-u-ekonomistow", name: "Czwartki u Ekonomistów" },
            { href: "/wydarzenia/forum-mysli-strategicznej", name: "Forum Myśli Strategicznej" },
            { href: "/wydarzenia/seminaria-naukowe-z-cyklu-sgr", name: "Seminaria naukowe z cyklu SGR" },
            { href: "/wydarzenia/konkurs-o-nagrode-pte-im-prof-edwarda-lipinskiego", name: "Konkurs o Nagrodę PTE im. prof. Edwarda Lipińskiego" },
            { href: "/wydarzenia/konkurs-na-najlepszy-podrecznik-akademicki-z-ekonomii", name: "Konkurs na najlepszy podręcznik akademicki z ekonomii" },
        ],
    },
    {
        id: 5,
        title: "Czasopisma",
        links: [
            { href: "/czasopisma/ekonomista", name: "Ekonomista" },
            { href: "/czasopisma/biuletyn-pte", name: "Biuletyn PTE" },
            { href: "/czasopisma/catallaxy", name: "Catallaxy" },
            { href: "/czasopisma/equilibrium", name: "Equilibrium" },
            { href: "/czasopisma/oeconomia-copernicana", name: "Oeconomia Copernicana" },
            { href: "/czasopisma/przeglad-ekonomiczny", name: "Przegląd Ekonomiczny" },
            { href: "/czasopisma/zeszyty-naukowe-pte-w-zielonej-gorze", name: "Zeszyty Naukowe PTE w Zielonej Górze" },
        ],
    },
    {
        id: 6,
        title: "Baza wiedzy",
        links: [
            { href: "/baza-wiedzy/pte-w-mediach", name: "PTE w mediach" },
            { href: "/baza-wiedzy/slownik-ekonomiczny", name: "Słownik ekonomiczny" },
            { href: "/baza-wiedzy/projekty", name: "Projekty" },
            { href: "/baza-wiedzy/noblisci-z-ekonomii", name: "Nobliści z ekonomii" },
            { href: "/baza-wiedzy/ekonomisci-polscy-w-swiecie", name: "Ekonomiści polscy w świecie" },
            { href: "/baza-wiedzy/ksiazki-ekonomiczne", name: "Książki Ekonomiczne" },
            { href: "/baza-wiedzy/monografie-naukowe-sgr", name: "Monografie naukowe SGR" },
            { href: "/baza-wiedzy/po-pandemiczne-trendy", name: "(Po)pandemiczne trendy" },
            { href: "/baza-wiedzy/wspomnienia", name: "Wspomnienia" },
            { href: "/baza-wiedzy/strona-archiwalna-pte", name: "Strona archiwalna PTE" },
        ],
    },
    {
        id: 7,
        title: "Szkolenia",
        links: [
            { href: "/szkolenia/szkolenia", name: "Szkolenia" },
        ],
    },
    {
        id: 8,
        title: "Kontakt",
        links: [
            { href: "/kontakt/kontakt", name: "Kontakt" },
        ],
    },
];

export default Navlinks