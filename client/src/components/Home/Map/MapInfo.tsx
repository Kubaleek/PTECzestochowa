import React from "react";
import cityContacts from "./ContactData";

const CityContactDetails = ({ city }: { city: string }) => {
  const contact = cityContacts[city];
  
  return (
    <div className="bg-[#f8f8f8] rounded relative mb-4 p-3 border border-[#333]/30 shadow">
      <h2 className="text-[#2d2f2d] text-[24px] font-semibold">
        {contact.name}
      </h2>
      <hr className="h-0.5 w-16 bg-[#4a4b4a]/25 mt-1 mb-5" />
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center gap-2">
          <div className="border border-[#000]/75 rounded-full flex justify-center items-center p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <p className="text-[14px] font-medium text-[#4a4b4a]">
            {contact.email}
          </p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="border border-[#000]/75 rounded-full flex justify-center items-center p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <p className="text-[14px] font-medium text-[#4a4b4a]">
            {contact.tel}
          </p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="border border-[#000]/75 rounded-full flex justify-center items-center p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <p className="text-[14px] font-medium text-[#4a4b4a]">
            {contact.address}
          </p>
        </div>
      </div>
      <hr className="h-0.5 w-full bg-[#4a4b4a]/25 my-5" />
      <div className="flex flex-col gap-3">
        <p className="text-[14px] font-medium text-[#4a4b4a]">
          Nr konta:{" "}
          <span>{contact.numberaccount}</span>
        </p>
        <p className="text-[14px] font-medium text-[#4a4b4a]">
          NIP: <span>{contact.nip}</span>
        </p>
        <p className="text-[14px] font-medium text-[#4a4b4a]">
          KRS: <span>{contact.krs}</span>
        </p>
        <p className="text-[14px] font-medium text-[#4a4b4a]">
          REGON: <span>{contact.regon}</span>
        </p>
        <p className="text-[14px] font-medium text-[#4a4b4a]">
          URL:{" "}
          <a href={contact.url} target="_blank" rel="noopener noreferrer">
            {contact.url}
          </a>
        </p>
      </div>
    </div>
  );
};

export default CityContactDetails;
