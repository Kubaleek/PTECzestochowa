import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Polskie Towarzystwo Ekonomiczne - Oddział w Częstochowie",
  description: "Polskie Towarzystwo Ekonomiczne - Oddział w Częstochowie",
  authors: [
    { name: "Kubalek" },
    { name: "danyPL" }
  ],
  keywords: "PTE, Polskie Towarzystwo Ekonomiczne, Ekonomia, Strona Internetowa, Biznes, Podstawy Przedsiębiorczości",
  robots: "index,follow",
};

interface IProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: IProps) {
  return (
    <html lang="pl">
      <body className={`bg-[#f8f4f2] text-[#2d2d2d]`}>
        {children}
      </body>
    </html>
  );
}