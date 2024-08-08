// components/MobileMenu.tsx
import React from "react";
import Link from "next/link";
import AnimatedHamburgerButton from "./Hamburger";
import Navlinks from "./NavbarLinks";

type Navlink = {
  id: number;
  title: string;
  links: { name: string; href: string }[];
};

type MobileMenuProps = {
  isOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setMobileMenuOpen }) => (
  <div className={`z-40 fixed top-0 left-0 bg-[#f8f4f2] h-screen overflow-auto w-full ${isOpen ? "" : "hidden"}`}>
    <div className="flex justify-end items-end">
      <AnimatedHamburgerButton isMobileMenuOpen={isOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </div>
    <ul className="list-none w-full flex-col flex gap-4 text-center px-16 pb-6">
      {Navlinks.map((item: Navlink) => (
        <li key={item.id} className="flex flex-col gap-4">
          <h2 className="text-[28px] font-bold">{item.title}</h2>
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

export default MobileMenu;
