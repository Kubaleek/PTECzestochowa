"use client";
import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import LastArticles from "@/components/Home/lastArticles";
import Navbar from "@/components/common/Navbar";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="flex flex-col max-w-[1360px] mx-auto justify-center items-stretch gap-6 p-6">
        <Hero />
        <LastArticles /> 
      </main>
    </>
  );
}
