import React, { useState } from "react";

interface Tab {
  title: string;
  content: React.ReactNode;
  icon: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col sm:flex-row justify-start gap-3">
        {tabs.map((tab, index) => (
          <button key={index} className={`gap-3 text-[#17822e] uppercase p-4 inline-flex text-md shadow-lg items-center place-items-center rounded focus:outline-none font-bold bg-[#f9f2eb]/55 hover:bg-[#f9f2eb] border border-black/25 ${ activeTab === index ? "bg-[#f5f1ec]" : ""} transition-all duration-200 ease-linear`} onClick={() => setActiveTab(index)}> {tab.icon} {tab.title}
          </button>
        ))}
      </div>
      <div className="">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
