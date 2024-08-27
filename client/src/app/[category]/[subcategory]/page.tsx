"use client"
import Navbar from "@/components/common/Navbar";
import { Params } from "./ts/types";
import Footer from "@/components/common/Footer";

export default function SubPage({ params } : {params: Params}) {
    return (
        <>
            <Navbar />
            <main className='max-w-[1800px] mx-auto justify-center items-center p-6'>

            </main>
            <Footer />
        </>
    );
}