"use client"

import { useRouter } from 'next/navigation';
import Navlinks from '../../../components/Navbar/NavbarLinks';
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';
import Aside from '@/components/Aside';
import Detail from '@/components/Detail';
import LineSection from '@/components/LineSection';
import SocialsButtons from '@/components/SocialsButtons';
import Contact from '@/components/Contact';
import Courses from '@/components/Courses/Courses';


type Params = {
    category: string;
    subcategory: string;
};

export default function CategoriesPages({ params }: { params: Params }) {
    const pathname = usePathname();

    const { category, subcategory } = params;
    const router = useRouter();

    const categorySection = Navlinks.find(section =>
        section.links.some(link => link.href.includes(`/${category}/`))
    );

    if (!categorySection || !categorySection.links.some(link =>
        link.href.includes(`/${category}/`) && link.href.includes(subcategory)
    )) {
        router.push('/404');
        return null;
    }

    
    return (
        <>
        <Navbar />
        <main className='max-w-[1800px] mx-auto justify-center items-stretch p-6'>
            <div className="grid grid-cols-12 gap-6 lg:gap-12">
                <Aside>
                    {categorySection.links.map((link) => (
                        <Link key={link.href} href={link.href} className={`text-[14px] relative transition-all ease duration-500 ${pathname === link.href ? 'underline text-[#17842f] font-bold' : 'lg:hover:underline lg:hover:text-[#17842f]'}`}>
                            {link.name} 
                        </Link>
                    ))}
                </Aside>
                <Detail>
                    <h2 className='m-0 text-[18px] md:text-[24px] font-bold text-[#17822e] break-words whitespace-normal'>Posty</h2>
                    <h1 className='text-xl md:text-3xl font-bold mt-0 mb-2 break-words whitespace-normal'>Śledź najnowsze wiadomości</h1>
                    <div className='flex flex-row gap-2'>
                        <SocialsButtons />
                    </div>
                    <div className='mt-3'>
                        {pathname === "/kontakt/kontakt" ? (
                            <Contact />
                        ) : pathname === "/szkolenia/szkolenia" ? (
                            <Courses />
                        ) : (
                            <p>Informacje jakieś</p>
                        )}
                    </div>
                </Detail>
            </div>
            <LineSection />
        </main>
        <Footer />
        </>
    );
}
