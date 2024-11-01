"use client"
import React, { useState, useEffect } from "react";
import Cities from "./Cities"
import Maps from "./Map";
import cityContacts from "./Cities";

export function CityBox({ city }: { city: string }) {
  const contact = cityContacts[city];
  return (
    <div className="bg-[#f8f8f8] rounded relative p-3 border border-[#333]/25 shadow-lg">
      <h3 className="text-xl sm:text-2xl font-semibold">{contact.name}</h3>
      <hr className="h-1 w-16 bg-[#4a4b4a] mt-1 mb-5" />
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          <p className="text-[14px] font-medium text-[#4a4b4a]">
            {contact.email}
          </p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <p className="text-[14px] font-medium text-[#4a4b4a]">
            {contact.tel}
          </p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <p className="text-[14px] font-medium text-[#4a4b4a]">
            {contact.address}
          </p>
        </div>
      </div>
      <hr className="h-0.5 w-full bg-[#4a4b4a]/25 my-3" />
        <div className="flex flex-col gap-3">
            <p className="text-sm text-pretty leading-relaxed font-medium text-[#4a4b4a]">
              Nr konta:{" "}
              <span>{contact.numberaccount}</span>
            </p>
            <p className="text-sm text-pretty leading-relaxed font-medium text-[#4a4b4a]">
              NIP: <span>{contact.nip}</span>
            </p>
            <p className="text-sm text-pretty leading-relaxed font-medium text-[#4a4b4a]">
              KRS: <span>{contact.krs}</span>
            </p>
            <p className="text-sm text-pretty leading-relaxed font-medium text-[#4a4b4a]">
              REGON: <span>{contact.regon}</span>
            </p>
            <p className="text-sm text-pretty leading-relaxed font-medium text-[#4a4b4a]">
              URL:{" "}
              <a href={contact.url} target="_blank" rel="noopener noreferrer">
                {contact.url}
              </a>
            </p>
        </div>
    </div>
  );
}


export default function MapCityContent() {
    const [selectedCity, setSelectedCity] = useState("Częstochowa");
    const [activeCircles, setActiveCircles] = useState([
      { cx: 351.327, cy: 442.747 },
      { cx: 351.327, cy: 442.747 },
    ]);

    const handleCityClick = (city: string) => {
        const cityId = `${city.replace(/ /g, "")}_C`;
        const cityElement = document.getElementById(cityId);
    
        if (cityElement) {
          const cx = parseFloat(cityElement.getAttribute("cx") || "0");
          const cy = parseFloat(cityElement.getAttribute("cy") || "0");

          setActiveCircles([
            { cx, cy },
            { cx, cy },
          ]);

          setSelectedCity(city);
        }
      };

      useEffect(() => {
        handleCityClick(selectedCity);
      }, [selectedCity]);

    return (
        <section>
            <h2 className="flex items-center mb-5">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square" className="inline-block text-[#17822e] text-[12px] text-sm mr-3 h-3 align-middle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path fill="currentColor" d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"></path></svg>
                <span className="text-[26px] font-bold m-0">Kontakt</span>
            </h2>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-4 xl:col-span-3">
                    <CityBox city={selectedCity} />
                </div>
                <div className="col-span-12 lg:col-span-8 xl:col-span-9 items-center justify-center flex flex-col gap-6">
                    <Maps activeCircles={activeCircles} />          
                    <div className="flex flex-wrap justify-center gap-3 lg:w-3/4">
                      {Object.keys(Cities).map((city) => (
                        <button key={city} type="button" className={`border px-2 py-1 text-[12px] rounded-lg lg:hover:scale-110 transition-all ease duration-300 ${selectedCity === city     ? "border-[#f79c1d] bg-white"     : "border-[#17822e] hover:border-[#f79c1d] hover:bg-white" }`} onClick={() => handleCityClick(city)}>
                          {Cities[city].name}
                        </button>
                      ))}
                    </div>
                </div>
            </div>
            <hr className="h-[2px] w-full bg-[#17822e] mt-6" />
        </section>
    );
}