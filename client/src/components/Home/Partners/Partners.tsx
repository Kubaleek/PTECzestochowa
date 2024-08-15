import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LineSection from "../../LineSection";
import PartnersTypes from "./PartnersInfo";
import Image from "next/image";

const gridVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function Partners() {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });

  return (
    <section ref={ref}>
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }} transition={{ duration: 0.8 }} className="flex items-center mb-5">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square" className="inline-block text-[#17822e] text-[12px] text-sm mr-3 h-3 align-middle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"></path>
        </svg>
        <span className="text-[26px] font-bold m-0">Partnerzy</span>
      </motion.h2>
      <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-12 items-center w-full pb-3" initial="hidden" animate={inView ? "visible" : "hidden"} variants={gridVariants} transition={{ duration: 0.6, staggerChildren: 0.2 }}>
        {PartnersTypes.map((item) => (
          <motion.a key={item.id} href={item.url} className="flex justify-center items-center lg:justify-normal lg:items-start" variants={itemVariants} whileHover={{ scale: 1.1, transition: { duration: 0.3 } }} transition={{ duration: 0.3 }}>
            <Image src={item.src} alt={item.name} />
          </motion.a>
        ))}
      </motion.div>
      <LineSection />
    </section>
  );
}
