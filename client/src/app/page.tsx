import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import MapCityContent from "@/components/Home/MapCityContent";
import Partners from "@/components/Home/Partners";
import LastArticles from "@/components/Home/lastArticles";
import LastPosts from "@/components/Home/lastPosts";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Suspense } from "react";
import { options } from './api/auth/[...nextauth]/options'; 
import { getServerSession } from "next-auth/next";
export default async function Home() {

  return (
    <>
    <Suspense fallback={<div>Loading..</div>}>

     <Header />
      <Navbar />
      <main className="flex flex-col max-w-[1360px] mx-auto justify-center gap-6 p-6">
          <Hero />
          <LastArticles /> 
          <LastPosts />
          <Partners />
          <MapCityContent />
      </main>
      <Footer />
      </Suspense>

    </>
  );
}
