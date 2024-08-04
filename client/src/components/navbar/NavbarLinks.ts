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
            { href: "/o-pte/1-5-podatku", name: "1,5% podatku" },
            { href: "/o-pte/wydawnictwo", name: "Wydawnictwo" },
            { href: "/o-pte/biuro-zarzadu-krajowego", name: "Biuro Zarządu Krajowego" },
        ],
    },
    {
        id: 3,
        title: "Członkostwo",
        links: [
            { href: "/o-pte/czlonkostwo-w-pte", name: "Członkostwo w PTE" },
            { href: "/o-pte/status", name: "Statut" },
            { href: "/o-pte/korzysci-czlonkostwa", name: "Korzyści członkostwa" },
            { href: "/o-pte/prezesi-honorowi", name: "Prezesi honorowi" },
            { href: "/o-pte/panel-czlonkowski", name: "Panel członkowski" },
            { href: "/o-pte/czlonkowie-honorowi", name: "Członkowie honorowi" },
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


















// <Link href={"/"} className="flex items-center pr-5">
// <svg version="1.1" viewBox="139.31 0 92.39 92.39" xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" style={{ zIndex: 1 }}>
// <path id="mark" d="m 159.2838,1.6227 h 52.0768 l 18.7535,19.3304 V 71.7312 L 211.3606,90.7731 H 158.9953 L 140.9632,72.1641 V 20.5202 Z M 158.3279,0 h 53.9728 l 19.4362,20.034 V 72.6608 L 212.3007,92.3959 H 158.0289 L 139.3404,73.1094 V 19.5853 Z m 2.0744,3.5217 h 49.8582 l 17.9545,18.5068 v 48.615 L 210.2605,88.874 H 160.1261 L 142.8621,71.0578 V 21.6141 Z m 1.7896,3.0385 h 46.3086 l 16.6761,17.1892 V 68.903 L 208.5003,85.8356 H 161.9354 L 145.9007,69.2879 V 23.3645 Z m 0.2995,49.062 0.0345,12.9317 c 2e-4,0.0236 -1e-4,0.0865 0.0374,0.0796 0.315,-0.0575 3.4404,1.9553 1.811,2.3231 h -11.9375 c -0.9584,-0.7835 2.5356,-2.4873 2.7094,-2.4829 l 0.002,-40.4845 c 0,-0.0168 -0.002,-0.0349 -0.0104,-0.0401 -0.404,-0.2688 -1.4161,-0.4681 -1.6291,-1.61 l 9.967,-0.0118 c 1.402,-0.0346 3.1725,0.0512 3.8756,0.2212 3.0516,0.7383 5.0129,2.1187 6.6311,3.949 1.5889,1.797 3.2308,4.3501 3.9136,7.6819 0.4922,2.4021 0.5229,3.3976 0.1612,5.2122 -0.8424,4.2238 -3.1261,7.3829 -4.9724,8.7956 -2.857,2.1859 -6.141,3.3049 -10.6087,3.4445 l -1e-4,-0.01 z m -0.0652,-24.5174 0.0529,19.8688 0.1044,0.0443 2e-4,0.006 c 4.3544,0.9166 8.3632,-5.121 8.2183,-9.3688 -0.1486,-4.355 -2.1995,-7.8568 -5.4019,-10.4275 -0.223,-0.1789 -1.6305,-0.457 -2.9739,-0.1224 z m 26.5053,-11.7084 0.005,57.115 c 0,0.4721 2.129,1.142 2.193,3.1987 l -12.9306,-0.0405 c -0.3296,-1.0531 1.0156,-2.3631 2.5857,-3.3743 L 180.7455,19.2421" style={{ fill: "rgb(255, 255, 255)", fillRule: "evenodd" }}></path>
// </svg>
// <div>
//   <p>Oddział w</p>
//   <p>Częstochowie</p>
// </div>
// </Link>