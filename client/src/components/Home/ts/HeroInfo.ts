import Hero1 from "../../../assets/PTE/Hero1.webp";
import Hero2 from "../../../assets/PTE/Hero2.webp";
import Hero3 from "../../../assets/PTE/Hero3.webp";
import Hero4 from "../../../assets/PTE/Hero4.webp";
import Hero5 from "../../../assets/PTE/Hero5.webp";
import Hero6 from "../../../assets/PTE/Hero6.webp";
import Hero7 from "../../../assets/PTE/Hero7.webp";
import Hero8 from "../../../assets/PTE/Hero8.webp";
import Hero9 from "../../../assets/PTE/Hero9.webp";
import Hero10 from "../../../assets/PTE/Hero10.webp";

import { StaticImageData } from 'next/image';

export type HeroInfosType = {
    id: number;
    href: string;
    src: string | StaticImageData;
    alt: string;
}

const HeroInfos: HeroInfosType[] = [
    {
        id: 1,
        href: "https://owe.pte.pl/",
        src: Hero1,
        alt: "OWE",
    },
    {
        id: 2,
        href: "https://ekonomista.pte.pl/",
        src: Hero2,
        alt: "Ekonomista",
    },
    {
        id: 3,
        href: "",
        src: Hero3,
        alt: "Biuletyn",
    },
    {
        id: 4,
        href: "",
        src: Hero4,
        alt: "Kongres",
    },
    {
        id: 5,
        href: "https://ksiazkiekonomiczne.pte.pl",
        src: Hero5,
        alt: "Ksiegarnia",
    },
    {
        id: 6,
        href: "",
        src: Hero6,
        alt: "Czwartki u Ekonomistów",
    },
    {
        id: 7,
        href: "",
        src: Hero7,
        alt: "Konkurs",
    },
    {
        id: 8,
        href: "",
        src: Hero8,
        alt: "Wynajem",
    },
    {
        id: 9,
        href: "",
        src: Hero9,
        alt: "Konkurs Podręcznik",
    },
    {
        id: 10,
        href: "",
        src: Hero10,
        alt: "REE2024",
    },
]

export default HeroInfos;