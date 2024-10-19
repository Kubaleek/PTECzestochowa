"use client"; // Add this line to make the component a Client Component

import Link from "next/link";
import { NavItem } from './ts/types';
import Logo from "../../../public/assets/PTECzęstochowa/Logo_PTE_pionowe_Czestochowa_0ab5a76b3d.png";
import Image from "next/image";
import { useNavsQuery } from "@/services/queryHooks";
import slugify from 'slugify';
import { usePathname, useSearchParams } from "next/navigation";
import { Skeleton } from "@nextui-org/skeleton";
import { Suspense } from "react";


export default function Footer() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Uzyskujemy bieżące id z parametrów zapytania
  const currentId = searchParams.get('id');
  const currentIdNumber = currentId ? Number(currentId) : null;


  const { data, error, isLoading } = useNavsQuery();

  // Uzyskanie tablicy elementów nawigacyjnych
  const navItems: NavItem[] = data?.data || [];

  const groupedNavItems = navItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, NavItem[]>);

    return (
      <Suspense>

        <footer className={`${pathname === "/" ? 'max-w-[1360px]' : 'max-w-[1800px]'} mx-auto gap-6 justify-center items-center p-6 max-w-[1360px]`}>
            {isLoading ? (
              <div className="flex flex-col gap-6">
              <div className={`grid md:grid-cols-4 gap-6 ${pathname === "/" ? 'lg:grid-cols-5' : 'lg:grid-cols-6'}`}>
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <Skeleton className="h-5 w-32 bg-[#ccc]" />
                    <Skeleton className="h-3 w-full bg-[#ccc]" />
                    <Skeleton className="h-3 w-full bg-[#ccc]" />
                    <Skeleton className="h-3 w-full bg-[#ccc]" />
                  </div>
                ))}
              </div>
              <Skeleton className="h-4 w-1/2 self-end bg-[#ccc]" />
              </div>
            ) : error ? (
                <div className="flex items-center p-4 mb-4 text-red-800 border-4 border-red-300 bg-red-50 rounded-lg w-full">
                  <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    {" "}
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <div className="ms-3 text-sm font-medium">
                    Błąd podczas pobierania danych nawigacji...
                  </div>
                </div>
            ) : (
                <>
                <div className="footerDesktop md:flex hidden flex-col gap-3">
                  <div className={`grid md:grid-cols-4 gap-6 ${pathname === "/" ? 'lg:grid-cols-7' : 'lg:grid-cols-7'}`}>
                  {Object.keys(groupedNavItems).map((category) => (
                    <div key={category}>
                      <h4 className="text-lg font-bold mb-2">{category.toLowerCase()}</h4>
                      <ul className="space-y-1">
                        {groupedNavItems[category].map((item) => {
                          const itemUrl = `/${slugify(item.category.toLowerCase())}?id=${item.id}`;
                          return(
                          <li key={item.id}>
                            <Link key={item.id} href={itemUrl} className="text-xs text-[#2d2f2d] hover:underline transition-all ease-in duration-300">
                              {item.subtitle.replace("-", " ")}
                            </Link>
                          </li>
                          )
                      })}
                      </ul>
                    </div>
                  ))}
                  </div>
                  <div className="f__copyright p-2">
                    <p className="text-end text-sm">&copy; Polskie Towarzystwo Ekonomiczne Oddział Częstochowa - Wszelkie prawa zastrzeżone | <Link href={"/aktualnosci?id=7"}  className="text-[#17822e] font-bold" aria-label="politykaPrywatności">Polityka prywatności</Link></p>
                  </div>
                </div>
                <div className="footerMobile md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Image src={Logo} alt="Logo_PTE_pionowe_Czestochowa" width={440} height={418}/>
                  <p className="text-end text-[14px]">&copy; Polskie Towarzystwo Ekonomiczne Oddział Częstochowa - Wszelkie prawa zastrzeżone | <Link href={"/aktualnosci?id=7"} className="text-[#17822e] font-bold" aria-label="politykaPrywatności">Polityka prywatności</Link></p>
                </div>
                </>
            )}
        </footer>
        </Suspense>

    );
}