"use client";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Aside from "@/components/Blog/Aside";
import Details from "@/components/Blog/Details";
import { useParams, useSearchParams } from "next/navigation";

export default function SubPage() {
  const { category } = useParams();
  const searchParams = useSearchParams();

  const id = searchParams.get('id');
  const subid = searchParams.get('subid');

  // Ensure category and id are strings
  const categoryStr = Array.isArray(category) ? category[0] : category;

  return (
    <>
      <Navbar />
      <main className="main max-w-[1800px] mx-auto justify-center items-center p-6">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <Aside />
          <Details category={categoryStr} id={id} subid={subid}/>
        </div>
        <hr className="h-[2px] w-full bg-[#17822e] mt-6" />
      </main>
      <Footer />
    </>
  );
}
