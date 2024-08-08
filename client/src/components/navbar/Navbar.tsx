"use client";
import Link from "next/link";
import Image from "next/image";
import Navlinks from "./NavbarLinks";
import { usePathname } from "next/navigation";
import PTECzestochowaLogo from "../../assets/PTECzęstochowa/Logo_PTE_pionowe_Czestochowa_0ab5a76b3d.png";
import React, { useState} from "react";
import NavbarLogo from "../NavbarLogo";
import AnimatedHamburgerButton from "./Hamburger";
import FlyoutLink from "./FlyoutLink";
import MobileMenu from "./MobileMenu";

type Navlink = {
  id: number;
  title: string;
  links: { name: string; href: string }[];
};

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isSubPage = usePathname() !== "/";

  return (
    <>
        <nav className={`${isSubPage ? 'Clg:flex' : 'lg:flex'} bg-[#17822e] hidden flex-col sticky top-0 w-full justify-center items-center z-50 border border-[#333]/15 shadow px-4`}>
          <div className="max-w-[1320px] flex justify-between relative items-center py-3 w-full mx-auto">
            {isSubPage && <NavbarLogo />}
            <ul className="flex flex-row gap-3 xl:gap-4">
              {Navlinks.map(({ id, title, links }: Navlink) => (
                <FlyoutLink key={id} href={"#"} FlyoutContent={links}>
                  {title}
                </FlyoutLink>
              ))}
            </ul>
            <Link href="https://panel.pte.pl/adm_program/overview.php?id=" className="text-white hover:underline flex justify-center relative w-fit h-fit group items-center border-2 border-[#fff] rounded-lg pt-custom-t pr-custom-r pb-custom-b pl-custom-l">
              Panel PTE
            </Link>
          </div>
        </nav>

        <nav className={`${isSubPage ? 'Clg:hidden' : 'lg:hidden'} shadow w-full bg-[#f9f2eb] border-b-2 border-[#333]/25 z-50`}>
          <div className="flex flex-row justify-between items-center">
            <Link href={"/"} className="bg-[#f9f2eb] py-3 pr-2 pl-2">
              <Image src={PTECzestochowaLogo} alt="PTECzestochowaLogo" width={150} height={80} />
            </Link>
            <AnimatedHamburgerButton isMobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
          </div>
          <MobileMenu isOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </nav>
    </>
  );
};

export default Navbar;
