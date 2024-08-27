
import Link from "next/link";
import { NavItem } from './ts/types';
import Logo from "../../assets/PTECzęstochowa/Logo_PTE_pionowe_Czestochowa_0ab5a76b3d.png";
import Image from "next/image";
import { useNavsQuery } from "@/services/queryHooks";
import slugify from 'slugify';

export default function Footer() {
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
        <footer className={`mx-auto gap-6 justify-center items-center p-6 max-w-[1360px]`}>
            {isLoading ? (
                <div className="text-black">
                  <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-2 text-[#333] animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                  </svg>
                  Ładowanie...
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
                  <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {Object.keys(groupedNavItems).map((category) => (
                    <div key={category}>
                      <h4 className="text-lg font-bold mb-2">{category}</h4>
                      <ul className="space-y-1">
                        {groupedNavItems[category].map((item) => (
                          <li key={item.id}>
                            <Link key={item.id} href={`/${slugify(item.category.toLowerCase())}/${slugify(item.subtitle.toLowerCase())}`} className="text-xs text-[#2d2f2d] hover:underline transition-all ease-in duration-300">
                              {item.subtitle}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  </div>
                  <div className="f__copyright p-2">
                    <p className="text-end text-sm">&copy; Polskie Towarzystwo Ekonomiczne Oddział Częstochowa - Wszelkie prawa zastrzeżone | <a href="/aktualnosci/polityka-prywatnosci-pte" className="text-[#17822e] font-bold" aria-label="politykaPrywatności">Polityka prywatności</a></p>
                  </div>
                </div>
                <div className="footerMobile md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Image src={Logo} alt="Logo_PTE_pionowe_Czestochowa" width={440} height={418}/>
                  <p className="text-end text-[14px]">&copy; Polskie Towarzystwo Ekonomiczne Oddział Częstochowa - Wszelkie prawa zastrzeżone | <Link href={"/aktualnosci/polityka-prywatnosci-pte"} className="text-[#17822e] font-bold" aria-label="politykaPrywatności">Polityka prywatności</Link></p>
                </div>
                </>
            )}
        </footer>
    );
}