"use client";
import Link from "next/link";
import Image from "next/image";
import Navlinks from "./NavbarLinks";
import { usePathname } from "next/navigation";
import PTECzestochowaLogo from "../../assets/PTECzęstochowa/Logo_PTE_pionowe_Czestochowa_0ab5a76b3d.png";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState(false);

  const VARIANTS = {
    top: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        top: ["35%", "50%", "50%"],
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        top: ["50%", "50%", "35%"],
      },
    },
    middle: {
      open: {
        rotate: ["0deg", "0deg", "-45deg"],
      },
      closed: {
        rotate: ["-45deg", "0deg", "0deg"],
      },
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
  }

  const AnimatedHamburgerButton = () => (
    <motion.button initial={false} animate={"closed"} onClick={() => {setMobileMenuOpen((prev) => !prev);}} className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20">
          <motion.span variants={VARIANTS.top} className="absolute h-[2px] w-10 bg-[#178223]" style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}/>
          <motion.span variants={VARIANTS.middle} className="absolute h-[2px] w-10 bg-[#178223]" style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}/>
          <motion.span variants={VARIANTS.bottom} className="absolute h-[2px] w-5 bg-[#178223]" style={{ x: "-50%", y: "50%", bottom: "35%", left: "calc(50% + 10px)" }}/>
    </motion.button>
  );

  return (
    <>
      <nav className="bg-[#17822e] hidden lg:flex flex-col sticky top-0 px-7 justify-center items-center z-50 border border-[#333]/15 shadow">
        <div className="max-w-[1320px] flex justify-between relative items-center py-3 w-full mx-auto">
          <ul className="flex flex-row gap-4">
            {Navlinks.map((item) => (
              <FlyoutLink key={item.id} href={"#"} FlyoutContent={item.links}>
                {item.title}
              </FlyoutLink>
            ))}
          </ul>
          <Link
            href="https://panel.pte.pl/adm_program/overview.php?id="
            className="text-white hover:underline flex justify-center relative w-fit h-fit group items-center border-2 border-[#fff] rounded-lg pt-custom-t pr-custom-r pb-custom-b pl-custom-l">
            Panel PTE
          </Link>
        </div>
      </nav>
      <nav className="lg:hidden shadow w-full bg-[#f9f2eb] border-b-2 border-[#333]/25 fixed z-50 top-0">
        <div className="flex flex-row justify-between items-center">
          <Link href={"/"} className="bg-[#f9f2eb] py-3 pr-2 pl-2">
            <Image src={PTECzestochowaLogo} alt="PTECzestochowaLogo" width={180} height={200} loading="lazy" />
          </Link>
          <AnimatedHamburgerButton />
        </div>
        {isMobileMenuOpen && (
          <div className="z-40 fixed top-0 left-0 bg-[#f8f4f2] h-screen overflow-auto w-full">
            <div className="flex justify-end items-end">
              <AnimatedHamburgerButton />
            </div>
              <ul className="list-none w-full flex-col flex gap-4 text-center px-16 pb-6">
                {Navlinks.map((item) => (
                  <li key={item.id} className="space-y-3">
                    <h2 className="text-[28px] font-bold">{item.title}</h2>
                    {item.links.map((link) => (
                      <li key={link.name} className="w-full">
                        <Link href={link.href} className={`text-[#2d2f2d] no-underline text-[14px] text-center w-full block`}>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </li>
                ))}
              </ul>
          </div>
        )}
      </nav>
    </>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent, }: { children: React.ReactNode; href: string; FlyoutContent?: Array<{ name: string; href: string }>;}) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <li onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="relative">
      <button type="button" className="relative text-white">
        {children}
        <span style={{ transform: open ? "scaleX(1)" : "scaleX(0)" }} className="absolute -bottom-2 -left-2 -right-2 h-px origin-left scale-x-0 rounded-full bg-white transition-transform duration-300 ease-out" />
      </button>
      <AnimatePresence>
        {open && FlyoutContent && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.3, ease: "easeOut" }} className="absolute top-12 bg-white shadow-lg border border-[#080808]/25" style={{ minWidth: "250px" }}>
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="p-2 space-y-1">
              {FlyoutContent.map((link) => (
                <Link key={link.name} href={link.href} className={`flex flex-col transition-all ease-out duration-150 p-2 text-[14px] ${pathname === link.href ? "bg-[#17822e] text-[#FFF]" : "hover:bg-[#17822e] hover:text-[#fff]"}`}>
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default Navbar;