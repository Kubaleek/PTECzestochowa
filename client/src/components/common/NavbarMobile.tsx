// components/MobileMenu.tsx
import React from "react";
import Link from "next/link";
import { homeAPI } from "../../services/homeAPI";
import { useQuery } from '@tanstack/react-query';
import { motion } from "framer-motion";

// Definicja typów dla nawigacji
type Navlink = {
    id: number;
    title: string;
    links: { name: string; href: string }[];
};

type Props = {
    isMobileMenuOpen: boolean;
    setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const VARIANTS = {
    top: {
        open: { rotate: ["0deg", "0deg", "45deg"], top: ["35%", "50%", "50%"] },
        closed: { rotate: ["45deg", "0deg", "0deg"], top: ["50%", "50%", "35%"] }
    },
    middle: {
        open: { rotate: ["0deg", "0deg", "-45deg"] },
        closed: { rotate: ["-45deg", "0deg", "0deg"] }
    },
    bottom: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            bottom: ["35%", "50%", "50%"],
            left: "50%"
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            bottom: ["50%", "50%", "35%"],
            left: "calc(50% + 10px)"
        }
    }
};

export const AnimatedHamburgerButton: React.FC<Props> = ({ isMobileMenuOpen, setMobileMenuOpen }) => (
    <motion.button
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        onClick={() => setMobileMenuOpen(prev => !prev)}
        className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
        aria-label="Menu"
    >
        <motion.span
            variants={VARIANTS.top}
            className="absolute h-[2px] w-10 bg-[#178223]"
            style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
            variants={VARIANTS.middle}
            className="absolute h-[2px] w-10 bg-[#178223]"
            style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
            variants={VARIANTS.bottom}
            className="absolute h-[2px] w-5 bg-[#178223]"
            style={{ x: "-50%", y: "50%", bottom: "35%", left: "calc(50% + 10px)" }}
        />
    </motion.button>
);

type MobileMenuProps = {
    isOpen: boolean;
    setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setMobileMenuOpen }) => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["navsMobile"],
        queryFn: homeAPI.GetNavs,
    });

    // Obsługa stanu ładowania i błędów
    if (isLoading) return <div>Ładowanie...</div>;
    if (error) return <div>Wystąpił błąd: {error.message}</div>;

    // Jeśli dane są dostępne, renderowanie menu
    return (
        <div className={`z-40 fixed top-0 left-0 bg-[#f8f4f2] h-screen overflow-auto w-full ${isOpen ? "" : "hidden"}`}>
            <div className="flex justify-end items-end p-4">
                <AnimatedHamburgerButton isMobileMenuOpen={isOpen} setMobileMenuOpen={setMobileMenuOpen} />
            </div>
            <ul className="list-none w-full flex-col flex gap-4 text-center px-16 pb-6">
                {data?.map((item: Navlink) => (
                    <li key={category} className="flex flex-col gap-4">
                        <h2 className="text-[28px] font-bold">{subtitle}</h2>
                        <div className="flex flex-col gap-2">
                            {item.links.map((link) => (
                                <div key={link.name}>
                                    <Link href={link.href} className="text-[#2d2f2d] no-underline text-[14px] text-center w-full block">
                                        {link.name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MobileMenu;
