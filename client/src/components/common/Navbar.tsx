import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { homeAPI } from "../../services/homeAPI";
import { useQuery } from '@tanstack/react-query';
import LoadingButton from "./Loading";
import MobileMenu from "./NavbarMobile";

// Typy danych
interface NavItem {
  id: number;
  subtitle: string;
  category: string;
}

const Navbar: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const pathname = usePathname();

  // Pobieranie danych nawigacji
  const { data, error, isLoading } = useQuery({
    queryKey: ["navs"],
    queryFn: homeAPI.GetNavs,
  });
  
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

  const handleMouseEnter = (category: string) => setOpenCategory(category);
  const handleMouseLeave = () => setOpenCategory(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="hidden lg:flex mx-auto bg-[#17822e] sticky top-0 w-full z-50 border border-[#333]/15 shadow px-5 py-3">
      <div className="container max-w-[1320px] mx-auto flex justify-between items-center">
      {isLoading ? (
          <LoadingButton />
        ) : error ? (
          <p className="text-white text-justify">{error.message}</p>
        ) : (
          <ul className="flex flex-row gap-3 xl:gap-4">
            {Object.keys(groupedNavItems).map((category) => (
              <li key={category} onMouseEnter={() => handleMouseEnter(category)} onMouseLeave={handleMouseLeave} className="relative">
                <button type="button" className="relative text-white">
                  {category}
                  <span style={{ transform: openCategory === category ? "scaleX(1)" : "scaleX(0)" }}className="absolute -bottom-2 -left-2 -right-2 h-px origin-left scale-x-0 rounded-full bg-white transition-transform duration-300 ease-out"/>
                </button>
                <AnimatePresence>
                  {openCategory === category && (
                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.3, ease: "linear" }} className="absolute top-12 bg-white shadow-lg border border-[#080808]/25 overflow-hidden" style={{ maxWidth: "100%", minWidth: "200px" }}>
                      <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                      <div className="p-2 space-y-1 overflow-hidden w-full">
                        {groupedNavItems[category].map((item) => (
                          <Link key={item.id} href={`/${item.subtitle.toLowerCase().replace(/\s+/g, '-')}`} className={`flex flex-col transition-all ease-out duration-150 p-2 ${pathname === `/${item.subtitle.toLowerCase().replace(/\s+/g, '-')}` ? "bg-[#17822e] text-[#FFF]" : "hover:bg-[#17822e] hover:text-[#fff]"}`}>
                            {item.subtitle}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        )}
        <Link href="https://panel.pte.pl/adm_program/overview.php?id=" className="text-white hover:underline flex items-center border-2 border-[#fff] rounded-lg py-1.5 pr-2 pl-2" aria-label="Go to Panel PTE">
          Panel PTE
        </Link>
      </div>
      {/* <MobileMenu isOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} /> */}
    </nav>
  );
};

export default Navbar;
