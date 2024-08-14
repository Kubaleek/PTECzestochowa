import { motion } from 'framer-motion';

export default function Detail({ children }: { children: React.ReactNode }) {
    return (
        <section className='col-span-12 lg:col-span-8 xl:col-span-9'>
            <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='mb-20 h-fit bg-white rounded-lg w-full mt-4 p-3 shadow border border-[#333]/25'>
                {children}
            </motion.article>
        </section>
    );
}
