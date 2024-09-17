"use client";
import HeroInfos from "./ts/HeroInfo";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden flex flex-col gap-3 sm:gap-6">
      <h1 className="flex items-center">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square" className="inline-block text-[#17822e] text-[12px] text-sm mr-3 h-3 align-middle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"></path>
        </svg>
        <span className="text-[28px] font-bold m-0">Inicjatywy</span>
      </h1>
      <div className="bg-white rounded-lg relative p-6 border border-[#333]/25 shadow">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center w-full">
          {HeroInfos.map((item) => (
            <a key={item.alt} href={item.href} className="flex items-center justify-center">
              <Image src={item.src} alt={item.alt} className="rounded-lg hover:scale-110 transition-all ease duration-300"/>
            </a>
          ))}
        </div>
      </div>
      <hr className="h-[2px] w-full bg-[#17822e] mt-6" />
    </section>
  );
}
