"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { usePathname, useSearchParams } from "next/navigation";
import PTECzestochowaLogo from "../../assets/PTECzęstochowa/Logo_PTE_pionowe_Czestochowa_0ab5a76b3d.png";
import { NavItem } from "./ts/types";
import { useNavsQuery } from "@/services/queryHooks";
import slugify from "slugify";
const menuVariants: Variants = {
  open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  closed: { opacity: 0, x: "-100%", transition: { duration: 0.3 } },
};

const VARIANTS = {
  top: {
    open: { rotate: ["0deg", "0deg", "45deg"], top: ["35%", "50%", "50%"] },
    closed: { rotate: ["45deg", "0deg", "0deg"], top: ["50%", "50%", "35%"] },
  },
  middle: {
    open: { rotate: ["0deg", "0deg", "-45deg"] },
    closed: { rotate: ["-45deg", "0deg", "0deg"] },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

const AnimatedHamburgerButton: React.FC<{
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isMobileMenuOpen, setMobileMenuOpen }) => (
  <motion.button
    initial={false}
    animate={isMobileMenuOpen ? "open" : "closed"}
    onClick={() => setMobileMenuOpen((prev) => !prev)}
    className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
    aria-label="Menu">
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

const MobileMenu: React.FC<{ isOpen: boolean; setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>; }> = ({ isOpen, setMobileMenuOpen }) => {
  const { data, error, isLoading } = useNavsQuery();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Uzyskujemy bieżące id z parametrów zapytania
  const currentId = searchParams.get('id');
  const currentIdNumber = currentId ? Number(currentId) : null;

  // Uzyskanie tablicy elementów nawigacyjnych
  const navItems: NavItem[] = data?.data || [];

  // Grupowanie elementów według kategorii
  const groupedNavItems = navItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, NavItem[]>);

  return (
    <motion.div variants={menuVariants} initial="closed" animate={isOpen ? "open" : "closed"} className="z-40 fixed top-0 left-0 bg-[#f8f4f2] h-screen overflow-auto w-full">
      <div className="flex justify-end items-end">
        <AnimatedHamburgerButton isMobileMenuOpen={isOpen} setMobileMenuOpen={setMobileMenuOpen}/>
      </div>
      <ul className="list-none w-full flex-col flex gap-4 text-center pb-6">
          {Object.entries(groupedNavItems).map(([category, items]) => (
            <li key={category} className="flex flex-col gap-2">
              <h2 className="text-xl font-bold">{category}</h2>
              <div className="flex flex-col gap-2">
                {items.map((item) => (
                  <div key={item.id}>
                    <Link
                      href={`/${slugify(item.category.toLowerCase())}/${slugify(item.subtitle.toLowerCase())}`}
                      className={`text-sm flex flex-col transition-all ease-out duration-150 py-2 px-6 ${
                        pathname === `/${slugify(item.category.toLowerCase())}/${slugify(item.subtitle.toLowerCase())}`
                          ? "bg-[#17822e] text-[#FFF] font-bold"
                          : "hover:bg-[#17822e] hover:text-[#fff]"
                      }`}
                    >
                      {item.subtitle}
                    </Link>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
    </motion.div>
  );
};

const NavWrapper: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="lg:hidden shadow w-full bg-[#f9f2eb] border-b-2 border-[#333]/25 z-50">
      <div className="flex flex-row justify-between items-center">
        <Link href={"/"} className="bg-[#f9f2eb] py-3 pr-2 pl-2">
          <Image src={PTECzestochowaLogo} alt="PTECzestochowaLogo" width={150} height={80} />
        </Link>
        <AnimatedHamburgerButton isMobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </nav>
  );
};

export default NavWrapper;
