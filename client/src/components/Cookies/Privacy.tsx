"use client";

import { Button } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { setServerCookie } from './utils/cookie'; 

export const Privacy = () => {
  const [isAccepted, setAccepted] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const checkCookie = () => {
    const cookie = document.cookie.split('; ').find(row => row.startsWith('privacyAccepted='));
    return cookie ? true : false;
  };

  useEffect(() => {
    if (checkCookie()) {
      setAccepted(true);
    }
    setLoading(false);
  }, []);

  const handleAccept = async () => {
    setAccepted(true);
    await setServerCookie(); 
  };

  if (isLoading) {
    return null; 
  }

  if (isAccepted) {
    return null;
  }

  return (
    <div className="fixed bottom-0 right-0 p-4 bg-white shadow-2xl border-green-800 border w-full max-w-[500px] z-[5] rounded-sm md:w-[400px] sm:w-[300px] xs:w-[250px]">
      <div className="flex flex-col gap-3 h-full">
        <p className="font-medium leading-relaxed text-pretty text-xs sm:text-[0.8rem] xs:text-[0.7rem]">
          Ta strona korzysta z plików cookies w celu świadczenia najwyższej
          jakości usług. Dalsze korzystanie ze strony oznacza, że zgadzasz się
          na ich wykorzystywanie.
        </p>
        <div>
          <Button
            color="success"
            variant="flat"
            radius="none"
            onClick={handleAccept} // Wywołanie na kliknięcie
            size="md"
            className="bg-green-700 !text-white w-full sm:w-auto"
          >
            Zgadzam się
          </Button>
        </div>
      </div>
    </div>
  );
};
