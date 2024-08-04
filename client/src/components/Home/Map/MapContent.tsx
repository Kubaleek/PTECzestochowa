"use client";

import React, { useState, useEffect } from "react";
import LineSection from "@/components/LineSection/LineSection";
import CityContactDetails from "./MapInfo";
import cityContacts from "./ContactData";
import Map from "./Map";

export default function MapsContent() {
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
      <h1 className="flex items-center mb-9">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="square"
          className="inline-block text-[#17822e] text-[12px] text-sm mr-3 h-3 align-middle"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          {" "}
          <path
            fill="currentColor"
            d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"
          ></path>
        </svg>
        <span className="text-[26px] font-bold m-0">Kontakt</span>
      </h1>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3">
          <CityContactDetails city={selectedCity} />
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 items-center justify-center flex flex-col gap-6">
          <Map activeCircles={activeCircles} />
          <div className="flex flex-wrap justify-center gap-3 lg:w-3/4">
              {Object.keys(cityContacts).map((city) => (
                <button
                  key={city}
                  type="button"
                  className={`border px-2 py-1 text-[12px] rounded-lg lg:hover:scale-110 transition-all ease duration-300 ${
                    selectedCity === city
                      ? "border-[#f79c1d] bg-white"
                      : "border-[#17822e] hover:border-[#f79c1d] hover:bg-white"
                  }`}
                  onClick={() => handleCityClick(city)}
                >
                  {cityContacts[city].name}
                </button>
              ))}
            </div>
        </div>
      </div>
      <LineSection />
    </section>
  );
}
