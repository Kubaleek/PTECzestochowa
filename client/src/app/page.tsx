"use client";
import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import MapCityContent from "@/components/Home/MapCityContent";
import Partners from "@/components/Home/Partners";
import LastArticles from "@/components/Home/lastArticles";
import LastPosts from "@/components/Home/lastPosts";
import Navbar from "@/components/common/Navbar";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="flex flex-col max-w-[1360px] mx-auto justify-center items-stretch gap-6 p-6">
        <Hero />
        <LastArticles /> 
        <LastPosts />
        <Partners />
        <MapCityContent />
      </main>
    </>
  );
}
