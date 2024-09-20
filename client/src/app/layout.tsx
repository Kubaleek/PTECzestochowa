 

import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import ReactQueryProvider from '../utils/ReactQueryProvider';
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});


export const metadata: Metadata = {
  title: 'Polskie Towarzystwo Ekonomiczne - Oddział w Częstochowie',
  description: 'Polskie Towarzystwo Ekonomiczne - Oddział w Częstochowie',
  authors: [
    { name: 'Kuba `Kubalek` Król' },
    { name: 'danyPL' },
  ],
  keywords: 'PTE, Polskie Towarzystwo Ekonomiczne, Ekonomia, Strona Internetowa, Biznes, Podstawy Przedsiębiorczości',
  robots: 'index,follow',
};

interface IProps {
  children: React.ReactNode;
}

export default function RootLayout({ children}: IProps) {
  return (
    <html lang="pl" className='bg-[#f8f4f2]'>
      <body className={`${inter.className}  bg-[#f8f4f2] text-[#2d2d2d] text-xs sm:text-sm !text-pretty !leading-relaxed relative`}>
        <ReactQueryProvider>
          <Toaster position={'bottom-right'}/>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
