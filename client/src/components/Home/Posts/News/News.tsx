import Link from "next/link";

export default function News() {
    return (
        <>
           <div className="grid grid-cols-1 gap-4">
              <Link href={""} className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 border-2 group group border-[#17822e]/50 opacity-70 p-3 rounded-lg hover:opacity-100 lg:hover:bg-[#f9f2eb] lg:hover:border-[#17822e] transition-all ease duration-500">
                <p className="hidden sm:flex flex-col justify-center text-center lg:group-hover:text-[#17822e] transition-all ease duration-500">
                    <span className="font-medium text-[36px]">26</span>
                    <span className="text-[14px]">września</span>
                </p>
                <h3 className="hidden sm:flex text-[14px] lg:group-hover:underline text-justify">
                    Międzynarodowa Konferencja Naukowa pt. „Systemy zabezpieczenia społecznego wobec wyzwań demograficznych, ekonomicznych i technologicznych”
                </h3>
                <div className="flex flex-col gap-1 sm:hidden">
                    <h3 className="text-[12px] text-justify">Międzynarodowa Konferencja Naukowa pt. „Systemy zabezpieczenia społecznego wobec wyzwań demograficznych, ekonomicznych i technologicznych”</h3>
                    <p className="text-[12px] font-semibold">czwartek, 5 września 2024</p>
                </div>
              </Link>
          </div>
        </>
    );
}