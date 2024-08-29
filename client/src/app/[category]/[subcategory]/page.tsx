"use client"
import Navbar from "@/components/common/Navbar";
import { Params } from "./ts/types";
import Footer from "@/components/common/Footer";
import Aside from "@/components/Blog/Aside";
import Details from "@/components/Blog/Details";

export default function SubPage({ params } : {params: Params}) {
    return (
        <>
            <Navbar />
            <main className='main max-w-[1800px] mx-auto justify-center items-center p-6'>
                <div className="grid grid-cols-12 gap-6 lg:gap-12">
                    <Aside />
                    <Details params={params} />
                </div>
                <hr className="h-[2px] w-full bg-[#17822e] mt-6" />
            </main>
            <Footer />
        </>
    );
}