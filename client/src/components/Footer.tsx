import Logo from "../assets/PTECzęstochowa/Logo_PTE_pionowe_Czestochowa_0ab5a76b3d.png";
import Image from "next/image";
import Navlinks from "./Navbar/NavbarLinks";

const Footer = () => {
  return (
    <>
    <footer className="hidden lg:flex flex-col gap-6 mx-auto max-w-[1360px] justify-center items-stretch p-6">
      <div className="grid lg:grid-cols-4 xl:grid-cols-8 gap-6">
        {Navlinks.map(((item) => (
            <div key={item.id}>
                <h2 className="text-[20px] text-[#2d2f2d] font-medium mb-3">{item.title}</h2>
                <ul className="flex flex-col gap-1">
                    {item.links.map(((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="text-[12px] text-[#2d2f2d] lg:hover:underline transition-all ease duration-300">
                              {link.name}
                            </a>
                        </li>
                    )))}
                </ul>
            </div>
        )))}
      </div>
      <div className="f__copyright p-2 mt-3">
        <p className="text-end text-[14px]">&copy; Polskie Towarzystwo Ekonomiczne Oddział Częstochowa - Wszelkie prawa zastrzeżone</p>
      </div>
    </footer>
    <footer className="lg:hidden flex flex-col gap-6 mx-auto max-w-[1360px] justify-center items-center p-6">
      <Image src={Logo} alt="Logo_PTE_pionowe_Czestochowa" width={500} height={500}/>
      <p className="text-end text-[14px]">&copy; Polskie Towarzystwo Ekonomiczne Oddział Częstochowa - Wszelkie prawa zastrzeżone</p>
    </footer>
    </>
  );
}

export default Footer;
