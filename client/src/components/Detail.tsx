import { motion } from 'framer-motion';

export default function Detail({ children }: { children: React.ReactNode }) {
    return (
        <section className='col-span-12 lg:col-span-8 xl:col-span-9'>
            <motion.article initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{duration: 0.6,ease: 'easeOut',bounce: 0.3,delay: 0.1}}className='mb-20 h-fit bg-white rounded-lg w-full mt-4 p-3 shadow border border-[#333]/25'>
                {children}
            </motion.article>
        </section>
    );
}
