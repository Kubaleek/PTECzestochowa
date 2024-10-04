import { Tabs, Tab } from "@nextui-org/react";
import ContactData from "./Info";

export default function Contact() {
  return (
    <div className="bg-white flex flex-col">
      <Tabs aria-label="Options" color="primary" variant="underlined" classNames={{   tabList:     "gap-3 w-full relative rounded-none p-0 pb-0 ml-1 border-b border-divider",   cursor: "w-full bg-[#17822e]",   tab: "max-w-fit h-12",   tabContent: "group-data-[selected=true]:text-[#17822e]", }}>
        <Tab
          title={<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="lucide lucide-message-square-more">  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />  <path d="M8 10h.01" />  <path d="M12 10h.01" />  <path d="M16 10h.01" /></svg>}>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <ContactData />
            </div>
        </Tab>
        <Tab
          title={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="lucide lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>}>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <ContactData />
            </div>
        </Tab>
        <Tab
          title={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="lucide lucide-contact"><path d="M16 2v2"/><path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/><path d="M8 2v2"/><circle cx="12" cy="11" r="3"/><rect x="3" y="4" width="18" height="18" rx="2"/></svg>}>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <ContactData />
            </div>
        </Tab>
        <Tab
          title={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="lucide lucide-book"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>}>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <ContactData />
            </div>
        </Tab>
      </Tabs>
    </div>
    
  );
}
