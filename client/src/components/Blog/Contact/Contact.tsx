import { Tabs, Tab, Divider } from "@nextui-org/react";
import { useState } from "react";
import General from "./Form/General";
import ContactData from "./Info";

export default function Contact() {
  return (
    <div className="bg-white flex flex-col">
      <Tabs aria-label="Options" color="primary" variant="underlined" classNames={{   tabList:     "gap-3 w-full relative rounded-none p-0 pb-0 ml-1 border-b border-divider",   cursor: "w-full bg-[#17822e]",   tab: "max-w-fit h-12",   tabContent: "group-data-[selected=true]:text-[#17822e]", }}>
        <Tab
          title={<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="lucide lucide-message-square-more">  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />  <path d="M8 10h.01" />  <path d="M12 10h.01" />  <path d="M16 10h.01" /></svg>}>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <ContactData />
                <General />
            </div>
        </Tab>
      </Tabs>
    </div>
  );
}
