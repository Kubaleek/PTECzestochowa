import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from '@tanstack/react-query';
import NavWrapper from "./NavbarMobile";
import { NavItem } from "./ts/types";
import { useNavsQuery } from "@/services/queryHooks";
const Navbar: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const pathname = usePathname();

  const { data, error, isLoading } = useNavsQuery();

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
  return (
    <>
      <nav className="hidden lg:flex mx-auto bg-[#17822e] sticky top-0 w-full z-50 border border-[#333]/15 shadow px-5 py-3">
        <div className="container max-w-[1320px] mx-auto flex justify-between items-center">
        {isLoading ? (
            <div className="text-white flex justify-center items-center">
              <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-2 text-[#fff] animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" /> 
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
              </svg>
              Ładowanie...
            </div>
          ) : error ? (
            <p className="text-white text-justify">Błąd podczas pobierania danych nawigacji...</p>
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
                            <Link key={item.id} href={`/${item.subtitle.toLowerCase().replace(/\s+/g, '-')}`} className={`flex flex-col transition-all ease-out duration-150 p-2 text-xs ${pathname === `/${item.subtitle.toLowerCase().replace(/\s+/g, '-')}` ? "bg-[#17822e] text-[#FFF]" : "hover:bg-[#17822e] hover:text-[#fff]"}`}>
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
      </nav>
      <NavWrapper />
    </>
  );
};

export default Navbar;
