interface PartnerType {
    id: number;
    url: string;
    src: string;
    name: string;
}

const PartnersTypes: PartnerType[] = [
    {
        id: 1,
        url: "https://www.gov.pl/",
        src: "https://pte.pl/_next/image?url=https%3A%2F%2Fcms.pte.pl%2Fuploads%2F01_znak_podstawowy_kolor_biale_tlo_86926f7bc2.png&w=96&q=75",
        name: "Ministerstwo Edukacji i Nauki",
    },
    {
        id: 2,
        url: "https://www.deltologic.com/",
        src: "https://pte.pl/_next/image?url=https%3A%2F%2Fcms.pte.pl%2Fuploads%2Flogo_large_2000px_47d91cf6ef.png&w=128&q=75",
        name: "Deltologic",
    },
    {
        id: 3,
        url: "https://empiriaiwiedza.pl/",
        src: "https://pte.pl/_next/image?url=https%3A%2F%2Fcms.pte.pl%2Fuploads%2FLOGO_EMPIRIA_e7b1588992.png&w=96&q=75",
        name: "Fundacja Empiria i Wiedza",
    },
    {
        id: 4,
        url: "https://www.gpw.pl/fundacja-gpw",
        src: "https://pte.pl/_next/image?url=https%3A%2F%2Fcms.pte.pl%2Fuploads%2FFundacja_GPW_2b0ea7dea0.png&w=128&q=75",
        name: "Fundacja GPW",
    },
    {
        id: 5,
        url: "https://pie.net.pl",
        src: "https://pte.pl/_next/image?url=https%3A%2F%2Fcms.pte.pl%2Fuploads%2FPIE_logo_7d191d9f2c.png&w=128&q=75",
        name: "Polski Instytut Ekonomiczny",
    },
    {
        id: 6,
        url: "https://www.wib.org.pl",
        src: "https://pte.pl/_next/image?url=https%3A%2F%2Fcms.pte.pl%2Fuploads%2FWIB_logo_84d80a7fc8.png&w=128&q=75",
        name: "Warszawski Instytut Bankowości",
    },
    {
        id: 7,
        url: "https://www.kas.de/pl/web/polen",
        src: "https://pte.pl/_next/image?url=https%3A%2F%2Fcms.pte.pl%2Fuploads%2FKonrad_Adenauer_Stiftung_logo_b0a9c5e368.png&w=128&q=75",
        name: "Fundacja Konrada Adenauera w Polsce",
    },
    {
        id: 8,
        url: "https://inepan.pl",
        src: "https://pte.pl/_next/image?url=https%3A%2F%2Fcms.pte.pl%2Fuploads%2Fine_pan_logo_c85e7220cf.png&w=256&q=75",
        name: "INE PAN",
    },
    {
        id: 9,
        url: "https://nbp.pl/",
        src: "https://pte.pl/_next/image?url=https%3A%2F%2Fcms.pte.pl%2Fuploads%2FNBP_logo_png1_8f77e6dc3b.png&w=256&q=75",
        name: "Narodowy Bank Polski",
    },
];

export default PartnersTypes