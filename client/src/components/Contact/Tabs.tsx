import React, { useState } from "react";

interface ContactData {
  id: number;
  address: string;
  phone: string;
  email: string;
  NIP: string;
  REGON: string;
  KRS: string;
  bank: string;
}

const contactDetails: ContactData = {
  id: 1,
  address: "Ul. Pułaskiego 4/6 42-200 Częstochowa",
  phone: "+48 509 928 888",
  email: "czestochowa@pte.pl",
  NIP: "573108787",
  REGON: "150045353",
  KRS: "000009063",
  bank: "PKO Bank Polski: 73 1020 1664 0000 3202 0166 1818",
};

const contactInfo = [
  { label: "Adres", value: contactDetails.address },
  { label: "Telefon", value: contactDetails.phone },
  { label: "Email", value: contactDetails.email },
  { label: "NIP", value: contactDetails.NIP },
  { label: "REGON", value: contactDetails.REGON },
  { label: "KRS", value: contactDetails.KRS },
  { label: "Bank", value: contactDetails.bank },
];

interface Tab {
  title: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="mb-4 flex md:flex-row flex-col gap-2 md:gap-4 p-2 bg-white rounded-lg shadow mt-3 border">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              index === activeTab
                ? "bg-[#17822e] text-white font-semibold border-[#17822e]"
                : "text-gray-800"
            } flex-1 p-2 rounded-md focus:outline-none focus:shadow-outline-[#17822e] transition-all duration-300`}
            onClick={() => setActiveTab(index)}>
            {tab.title}
          </button>
        ))}
      </div>
      <div className="bg-white p-4 rounded-lg shadow border">
        <div className="grid grid-cols-1 gap-3">
          <div>
            <h3 className="text-[24px] font-bold mb-1">
              Informacje Kontaktowe
            </h3>
            <hr className="h-[5px] max-w-[50px] bg-[#17822e]"></hr>
            <div className="flex flex-col gap-2 mt-3">
              {contactInfo.map((item, index) => (
                <p key={index} className="text-[14px] font-medium text-[#4a4b4a]"> {item.label}: {item.value}</p>
              ))}
            </div>
          </div>
          <div>{tabs[activeTab].content}</div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
