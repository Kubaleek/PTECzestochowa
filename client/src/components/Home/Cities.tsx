import { CityTypes } from "./ts/types";
import { City } from "./ts/types";

const createCityContact = (
    name: string,
    email: string,
    tel: string,
    address: string,
    numberaccount: string,
    nip: string,
    krs: string,
    regon: string,
    url: string
): CityTypes => ({
    name,
    email,
    tel,
    address,
    numberaccount,
    nip,
    krs,
    regon,
    url,
});

const cityContacts: City = {
    Białystok: createCityContact(
        "Białystok",
        "pte@uwb.edu.pl",
        "+48 85 745 77 34",
        "ul. Warszawska 63, 15-062 Białystok",
        "07203000451110000002739550",
        "5420211640",
        "0000120932",
        "050041626",
        "https://pte.uwb.edu.pl/"
    ),
    Bydgoszcz: createCityContact(
        "Bydgoszcz",
        "biuro@pte.bydgoszcz.pl",
        "52 322 90 60",
        "ul. Długa 34, Bydgoszcz 85-034",
        "67109010720000000101847750",
        "5540312438",
        "0000065582",
        "090563606",
        "https://pte.bydgoszcz.pl/"
    ),
    Częstochowa: createCityContact(
        "Częstochowa",
        "czestochowa@pte.pl",
        "+48 509 928 888",
        "Ul. Pułaskiego 4/6 42-200 Częstochowa",
        "73102016640000320201661818",
        "573108787",
        "000009063",
        "150045353",
        "http://www.czestochowa.pte.pl"
    ),
    Gdańsk: createCityContact(
        "Gdańsk",
        "biuro@gdansk.pte.pl",
        "+48 58 301 52 46",
        "ul. Armii Krajowej 116/11, 81-824 Sopot",
        "03103016540000000055092201",
        "5830001988",
        "0000092579",
        "190582055",
        "https://gdansk.pte.pl/"
    ),
    Gliwice: createCityContact(
        "Gliwice",
        "biuro@ptegliwice.pl",
        "+48 32 331 30 82",
        "ul. Zwycięstwa, 13 44-100 Gliwice",
        "43102024010000040201717461",
        "6311029500",
        "0000058114",
        "272738730",
        "https://ptegliwice.pl/"
    ),
    Katowice: createCityContact(
        "Katowice",
        "katowice@pte.pl",
        "+48 601 585 975",
        "Ul. Koszarowa 6, lok. 167 i 167a, 40-068 Katowice",
        "31102023130000310201721422",
        "6340142222",
        "0000123128",
        "012114042",
        "https://ptekatowice.pl/"
    ),
    Kielce: createCityContact(
        "Kielce",
        "m.szplit@gmail.com",
        "+48 793 240 808",
        "ul. Jagiellońska 109A, p.103, 25-734 Kielce",
        "02849300040000005726790001",
        "9591318803",
        "0000069883",
        "291005434",
        "https://pte.pl/"
    ),
    Koszalin: createCityContact(
        "Koszalin",
        "poczta@pte-koszalin.pl",
        "+48 505 483 064",
        "ul. Kwiatkowskiego 6e, 75-343 Koszalin",
        "06160014621864971700000001",
        "6690501963",
        "0000033989",
        "330052211",
        "https://pte-koszalin.pl/"
    ),
    Kraków: createCityContact(
        "Kraków",
        "krakow@pte.pl",
        "+48 12 293 59 65",
        "ul. Rakowicka 27, 31-510 Kraków",
        "60859100070060043009670002",
        "6760077632",
        "0000073790",
        "350134583",
        "https://krakow.pte.pl/"
    ),
    Legnica: createCityContact(
        "Legnica",
        "pte.legnica@wp.pl",
        "76 852 38 72",
        "Rynek 28, 59-220 Legnica",
        "...",
        "6911765845",
        "0000087024",
        "390483826",
        "https://pte.pl/"
    ),
    Lublin: createCityContact(
        "Lublin",
        "lublin@pte.pl",
        "+48 81 538 46 91",
        "ul.Bursaki 12, 20-150 Lublin",
        "08102049000000870232294021",
        "9462646623",
        "0000406472",
        "061375400",
        "https://pte.umcs.lublin.pl/"
    ),
    Łódź: createCityContact(
        "Łódź",
        "sekretariat@pte.lodz.pl",
        "42 632 44 20",
        "ul. Wólczańska 51, 90-608 Łódź",
        "55102033520000160201069681",
        "7270125778",
        "0000138363",
        "470574168",
        "https://pte.lodz.pl/"
    ),
    Olsztyn: createCityContact(
        "Olsztyn",
        "pte@pteolsztyn.edu.pl",
        "89 527-58-25",
        "ul. 1 Maja 13, 10-117 Olsztyn",
        "93124055981111000050348093",
        "7391214038",
        "0000034707",
        "510565351",
        "https://pteolsztyn.edu.pl/"
    ),
    Opole: createCityContact(
        "Opole",
        "opole@pte.pl",
        "77 40 16 905",
        "ul. Ozimska 46a, 45-058 Opole",
        "50160014621862995910000001",
        "7542429105",
        "0000092679",
        "530917573",
        "https://www.pte.opole.pl/"
    ),
    Poznań: createCityContact(
        "Poznań",
        "info@poznan.pte.pl",
        "786 140 091",
        "ul. Piątkowska 122/3, 60-649 Poznań",
        "45124065951111001073032833",
        "7770004954",
        "0000119734",
        "631515968",
        "https://poznan.pte.pl/"
    ),
    Radom: createCityContact(
        "Radom",
        "pteradom@uthrad.pl",
        "+(48) 361-74-00",
        "ul. Chrobrego 31/162, 26-600 Radom",
        "35913200010000537520000010",
        "7962974364",
        "0000645700",
        "365833562",
        "https://pte.uniwersytetradom.pl/"
    ),
    Rzeszów: createCityContact(
        "Rzeszów",
        "pterzeszow@poczta.onet.pl",
        "17 853 36 49",
        "ul. Piłsudskiego 40 lok.11, 35-001 Rzeszów",
        "49916200002001001246890001",
        "8131017620",
        "0000004761",
        "690049658",
        "https://pte.rzeszow.pl/"
    ),
    Szczecin: createCityContact(
        "Szczecin",
        "pte@pte.szczecin.pl",
        "91 444 20 41",
        "ul. Mickiewicza 66, 71-101 Szczecin",
        "21124066541111001068839498",
        "8520001694",
        "0000116323",
        "012114906",
        "https://pte.szczecin.pl/"
    ),
    Toruń: createCityContact(
        "Toruń",
        "792037270",
        "792037270",
        "ul. Prosta 5, 87-100 Toruń",
        "87105012041000002291395422",
        "9561007980",
        "0000029861",
        "871050120",
        "https://torun.pte.pl/"
    ),
    Wrocław: createCityContact(
        "Wrocław",
        "biuro@pte.wroc.pl",
        "+48 71 372 27 39",
        "ul. Legionów 21, 50-437 Wrocław",
        "12102016640000320202120115",
        "8960004117",
        "0000044481",
        "022045372",
        "https://pte.wroc.pl/"
    ),
    ZarządKrajowy: createCityContact(
        "Zarząd Krajowy",
        "biuro@pte.pl",
        "+48 22 827 24 80",
        "ul. Nowy Świat 49, 00-042 Warszawa",
        "14124011001111000001122853",
        "5260000197",
        "0000097422",
        "000004585",
        "https://pte.pl/"
    ),
    Zielona_Góra: createCityContact(
        "Zielona Góra",
        "biuro@pte.zgora.pl",
        "+48 68 324 07 27",
        "ul. Jedności 58, 65-018 Zielona Góra",
        "03102016640000320202238019",
        "9730713772",
        "0000071173",
        "080121710",
        "https://pte.zgora.pl/"
    ),
};

export default cityContacts;
