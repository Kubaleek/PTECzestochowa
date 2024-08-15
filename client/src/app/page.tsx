"use client";
import Hero from "@/components/Home/Hero/Hero"
import Header from "@/components/Header";
import Navbar from "@/components/Navbar/Navbar";
import Articles from "@/components/Home/Articles/Articles";
import Posts from "@/components/Home/Posts/Posts";
import Partners from "@/components/Home/Partners/Partners";
import MapsContent from "@/components/Home/Map/MapContent";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="flex flex-col max-w-[1360px] mx-auto justify-center items-stretch gap-3 p-6">
        <Hero />
        <Articles />
        <Posts />
        <Partners />
        <MapsContent />
      </main>
      <Footer />
    </>
  );
}
