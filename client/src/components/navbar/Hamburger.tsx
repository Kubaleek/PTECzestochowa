// components/AnimatedHamburgerButton.tsx
import React from "react";
import { motion } from "framer-motion";

type Props = {
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const VARIANTS = {
  top: {
    open: { rotate: ["0deg", "0deg", "45deg"], top: ["35%", "50%", "50%"] },
    closed: { rotate: ["45deg", "0deg", "0deg"], top: ["50%", "50%", "35%"] }
  },
  middle: {
    open: { rotate: ["0deg", "0deg", "-45deg"] },
    closed: { rotate: ["-45deg", "0deg", "0deg"] }
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%"
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)"
    }
  }
};

const AnimatedHamburgerButton: React.FC<Props> = ({ isMobileMenuOpen, setMobileMenuOpen }) => (
  <motion.button initial={false} animate={isMobileMenuOpen ? "open" : "closed"} onClick={() => setMobileMenuOpen((prev) => !prev)} className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20" aria-label="Menu">
    <motion.span variants={VARIANTS.top} className="absolute h-[2px] w-10 bg-[#178223]" style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}/>
    <motion.span variants={VARIANTS.middle} className="absolute h-[2px] w-10 bg-[#178223]" style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}/>
    <motion.span variants={VARIANTS.bottom} className="absolute h-[2px] w-5 bg-[#178223]" style={{ x: "-50%", y: "50%", bottom: "35%", left: "calc(50% + 10px)" }}/>
  </motion.button>
);

export default AnimatedHamburgerButton;
