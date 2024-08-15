"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import LineSection from "../../LineSection";
import ArticlesInfos from "./ArticlesInfo";
import SocialMedia from "./Social Media/SocialMedia";
import Image from "next/image";

export default function Articles() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section ref={ref} initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }} transition={{ duration: 0.8 }}>
      <div className="grid grid-cols-12 lg:gap-12">
        <div className="col-span-12 lg:col-span-7 xl:col-span-8">
          <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }} transition={{ duration: 0.8 }} className="flex items-center mb-5">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square" className="inline-block text-[#17822e] text-[12px] text-sm mr-3 h-3 align-middle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor" d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"></path>
            </svg>
            <span className="text-[26px] font-bold m-0">Aktualności</span>
          </motion.h2>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="grid grid-cols-1 sm:grid-cols-1 gap-2">
            {ArticlesInfos.map((item) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-[#f8f8f8] rounded-lg relative mb-4 overflow-hidden p-3 bg-opacity-50 border border-[#333]/25 shadow">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                  <div>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }} transition={{ duration: 0.6 }}>
                      <Image src={item.src} alt="Aktualności" className="rounded-lg object-cover transform h-full" width={500} height={500} loading="lazy"/>
                    </motion.div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }} transition={{ duration: 0.5 }} className="text-[16px] font-semibold text-[#2d2f2d]">
                      {item.title}
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-[12px] text-justify p-0 break-normal break-words">
                      {item.date}
                    </motion.p>
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-[12px] text-justify p-0 break-normal break-words">
                      {item.text}
                    </motion.p>
                    <Link href={""} className="underline text-[#2d2f2d]">
                      Czytaj dalej
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <SocialMedia />
      </div>
      <LineSection />
    </motion.section>
  );
}
