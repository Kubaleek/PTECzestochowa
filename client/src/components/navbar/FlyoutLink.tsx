import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

type FlyoutLinkProps = {
  children: React.ReactNode;
  href: string;
  FlyoutContent?: { name: string; href: string }[];
};

const FlyoutLink: React.FC<FlyoutLinkProps> = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative">
      <button type="button" className="relative text-white">
        {children}
        <span style={{ transform: open ? "scaleX(1)" : "scaleX(0)" }} className="absolute -bottom-2 -left-2 -right-2 h-px origin-left scale-x-0 rounded-full bg-white transition-transform duration-300 ease-out" />
      </button>

      <AnimatePresence>
        {open && FlyoutContent && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.3, ease: "easeOut" }} className="absolute top-12 bg-white shadow-lg border border-[#080808]/25 overflow-hidden" style={{ maxWidth: "100%", minWidth: "180px" }}>
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="p-2 space-y-1 overflow-hidden w-full">
              {FlyoutContent.map((link) => (
                <Link key={link.name} href={link.href} className={`flex flex-col transition-all ease-out duration-150 p-2 text-[14px] ${pathname === link.href ? "bg-[#17822e] text-[#FFF]" : "hover:bg-[#17822e] hover:text-[#fff]"}`}>
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default FlyoutLink;