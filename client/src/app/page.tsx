import React from "react";
import HeroInfos from "@/components/Home/ts/HeroInfo";
import PartnersInfo from "@/components/Home/ts/PartnersInfo";
import MapCityContent from "@/components/Home/MapCityContent";
import LastArticles from "@/components/Home/lastArticles";
import LastPosts from "@/components/Home/lastPosts";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Suspense } from "react";
import { options } from './api/auth/[...nextauth]/options'; 
import { getServerSession } from "next-auth/next";
import Image from "next/image";
import Link from "next/link";
import PTECzestochowaLogo from "../../public/assets/PTECzęstochowa/Logo_PTE_poziome_Czestochowa_e271bd3c00.png";
import PTESiedziba from "../../public/assets/PTECzęstochowa/pte_siedziba.jpg";


export default async function Home() {

  return (
    <>
    <Suspense fallback={<></>}>
      <header className="bg-[#fff]">
        <div className="max-w-[1320px] pt-0 hidden lg:flex mx-auto items-center justify-between">
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Link href={"/"} className="flex items-center">
                  <Image src={PTECzestochowaLogo} alt="PTECzestochowaLogo" loading="lazy" />
                </Link>
              </div>
              <div className="flex justify-center">
                <span>
                  <Image src={PTESiedziba} alt="PTE Siedziba" className="object-cover object-left-top max-w-xs" loading="lazy"  sizes="100vw" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Navbar />
      <main className="flex flex-col max-w-[1360px] mx-auto justify-center gap-6 p-6">
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
          <LastArticles /> 
          <LastPosts />
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
          <MapCityContent />
      </main>
      <Footer />
      </Suspense>

    </>
  );
}
