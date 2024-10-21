import Image from "next/image";
import React from "react";

const Conferences = () => {
  return (
    <div className="bg-white flex flex-col gap-3">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
        <a href="/assets/Conferences/PROGRAM_Konferencji_ XVIII_KKBS_ 28-29.04.2022.pdf" className="flex flex-col gap-3"   target="_blank" rel="noopener noreferrer">
            <Image src="/assets/Conferences/PROGRAM_Konferencji_ XVIII_KKBS_ 28-29.04.2022.png" alt="PROGRAM_Konferencji_ XVIII_KKBS_ 28-29.04.2022" width={380} height={200} className="border-2" />
            <p className="text-tiny font-medium font-sans text-center sm:text-left">PROGRAM_Konferencji_ XVIII_KKBS_ 28-29.04.2022</p>
        </a>
      </div>
    </div>
  );
};

export default Conferences;
