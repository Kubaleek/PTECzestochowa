import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
