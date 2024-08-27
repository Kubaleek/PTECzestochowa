import { NavItem } from "../common/ts/types";
import { useNavsQuery } from "@/services/queryHooks";
import slugify from "slugify";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Aside = () => {
  const pathname = usePathname();
  const { data, error, isLoading } = useNavsQuery();
  const navItems: NavItem[] = data?.data || [];
  const groupedNavItems = navItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, NavItem[]>);

  const filterNavItemsByCategory = (items: NavItem[], pathname: string) => {
    const categorySlug = pathname.split("/")[1]; // Pobieranie kategorii ze ścieżki (np. 'aktualnosci')
    return items.filter(
      (item) => slugify(item.category.toLowerCase()) === categorySlug
    );
  };

  return (
    <>
      <aside className="col-span-12 md:col-span-4 xl:col-span-3">
        <div className="w-full h-fit mb-0 flex flex-col gap-2">
          <p>
            <a
              href="/"
              className="flex flex-row items-center group lg:hover:underline transition-all ease duration-300 text-[16px]">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-left"
                className="svg-inline--fa fa-arrow-left fa-fw inline-block text-[#2d2f2d] text-[12px] mx-[3px] h-[1.25em] mr-2 transition-transform duration-300 group-hover:translate-x-[-2px] group-hover:text-[#17842f]"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"></path>
              </svg>
              Powrót do strony głównej
            </a>
          </p>
          {isLoading ? (
            <div className="text-black">
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 me-2 text-[#333] animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Ładowanie...
            </div>
          ) : error ? (
            <div className="flex items-center p-4 mb-4 text-red-800 border-4 border-red-300 bg-red-50 rounded-lg">
              <svg
                className="flex-shrink-0 w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                {" "}
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <div className="ms-3 text-sm font-medium">
                Błąd podczas pobierania danych nawigacji...
              </div>
            </div>
          ) : (
            <div className="p-3 px-4 relative rounded-lg border border-[#17842f] bg-white shadow-lg">
              {Object.entries(groupedNavItems).map(([category, items]) => {
                const filteredItems = filterNavItemsByCategory(items, pathname);
                if (filteredItems.length === 0) return null;
                return (
                  <div key={category} id={category} className="flex flex-col gap-2">
                    {filteredItems.map((e) => (
                        <Link key={e.subtitle}
                          href={`/${slugify(
                            e.category.toLowerCase()
                          )}/${slugify(e.subtitle.toLowerCase())}`}
                          className={`text-sm p-2 relative transition-all ease-linear duration-300 rounded ${
                            pathname ===
                            `/${slugify(e.category.toLowerCase())}/${slugify(
                              e.subtitle.toLowerCase()
                            )}`
                              ? "bg-[#17822e] text-[#FFF] font-bold"
                              : "hover:bg-[#17822e] hover:text-[#fff]"
                          }`}>
                          {e.subtitle}
                        </Link>
                    ))}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default Aside;
