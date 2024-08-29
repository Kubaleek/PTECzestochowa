import React from 'react';
import { Tabs, Tab } from '@nextui-org/react';
import Test1 from './Content/Test1';
import Test2 from './Content/Test2';

export const Panel: React.FC = () => {
  return (
    <div className="bg-green-700 bg-opacity-95 rounded shadow-lg p-1">
      <div className="bg-white rounded p-2 flex flex-col gap-3">
        <div className="rounded max-w-full bg-[#f5f1ec] border-2 border-[#333]/25 p-2 shadow-lg">
          <div className="bg-white flex flex-col gap-1 p-2 border-2 border-[#333]/25 shadow-lg">
            <Tabs aria-label="Options" color="primary" variant="underlined" classNames={{ tabList: "gap-3 w-full relative rounded-none p-0 border-b border-divider", cursor: "w-full bg-[#17822e]", tab: "max-w-fit h-12", tabContent: "group-data-[selected=true]:text-[#17822e]"}}>
              <Tab title={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 lucide lucide-book-open-check"> <path d="M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z"/> <path d="m16 12 2 2 4-4"/> <path d="M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3"/></svg>
              }>
                <div>
                  <Test1 />
                </div>
              </Tab>
              <Tab title={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 lucide lucide-users">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              }>
                <div>
                  <Test2 />
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
