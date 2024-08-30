import { NavItem } from "../common/ts/types";
import { useNavsQuery } from "@/services/queryHooks";
import slugify from "slugify";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Skeleton } from "@nextui-org/skeleton";


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
            <div className="flex flex-col gap-3">
              <Skeleton className="h-6 w-3/4 bg-[#ccc]" />
              <Skeleton className="h-6 w-2/3 bg-[#ccc]" />
              <Skeleton className="h-6 w-1/2 bg-[#ccc]" />
              <Skeleton className="h-6 w-4/5 bg-[#ccc]" />
              <Skeleton className="h-6 w-2/3 bg-[#ccc]" />
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
