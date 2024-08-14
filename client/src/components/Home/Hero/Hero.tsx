// import Image from "next/image";
import HeroInfos from "./HeroInfo";
import LineSection from "../../LineSection";
import Image from "next/image";

export default function Hero() {
    return (
        <>
            <section>
                <h1 className="flex items-center mb-5">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square" className="inline-block text-[#17822e] text-[12px] text-sm mr-3 h-3 align-middle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path   fill="currentColor"   d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"></path></svg>
                    <span className="text-[26px] font-bold m-0">Inicjatywy</span>
                </h1>
                <div className="bg-white rounded-lg relative mb-9 p-6 border border-[#333]/15 shadow">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center w-full">
                        {HeroInfos.map(((item) => (
                            <a key={item.alt} href={item.href}>
                                <Image src={item.src} alt={item.alt} sizes="100vw"/>
                            </a>
                        )))
                        }
                    </div>
                </div>
                <LineSection />
            </section>
        </>
    );
}