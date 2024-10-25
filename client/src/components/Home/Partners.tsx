import PartnersInfo from "./ts/PartnersInfo";
import Image from "next/image";

export default function Partners() {
    return (
        <>
            <section>
                <h2 className="flex items-center mb-5">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square" className="inline-block text-[#17822e] text-[12px] text-sm mr-3 h-3 align-middle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path fill="currentColor" d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"></path></svg>
                    <span className="text-[26px] font-bold m-0">Partnerzy</span>
                </h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-8 items-center w-full pb-4">
                    {PartnersInfo.map(((item) => (
                        <a key={item.id} href={item.url} className="flex items-center justify-center">
                          <Image src={item.src} alt={item.name} width={120} height={100} className="rounded-lg hover:scale-110 transition-all ease duration-300" />
                        </a>
                    )))}
                </div>
                <hr className="h-[2px] w-full bg-[#17822e] mt-6" />
            </section>
        </>
    );
}