import Navbar from "@/components/Navbar/Navbar";
import "../globals.css";
import Footer from "@/components/Footer";
import LineSection from "@/components/LineSection/LineSection";
interface IProps {
  children: React.ReactNode;
}

export default function SubPageLayout({ children }: IProps) {
  return (
    <>
      {children}
    </>
  );
}
