import React from 'react';
import { Tabs, Tab } from '@nextui-org/react';
import Test1 from './Content/Test1';
import Test2 from './Content/Test2';

export const Panel: React.FC = () => {
  return (
    <div className="bg-green-700 bg-opacity-95 rounded shadow-lg p-1">
      <div className="bg-white rounded p-2 flex flex-col gap-3">
        <div className="bg-[#f5f1ec] flex flex-col md:flex-row justify-between gap-1 border-2 border-[#333]/25 p-2 shadow-lg">
          <h3 className="text-xl font-bold text-black gap-2 text-pretty leading-relaxed items-center flex place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 lucide lucide-book-open-check">
              <path d="M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z" />
              <path d="m16 12 2 2 4-4" />
              <path d="M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3" />
            </svg>
            Szkolenia
            <span className="bg-green-700 text-white px-2 py-1 text-xs rounded-3xl">
              0
            </span>
          </h3>
        </div>
        <hr className="h-[2px] w-full bg-[#17822e]" />
        <div className="rounded max-w-full bg-[#f5f1ec] border-2 border-[#333]/25 p-2 shadow-lg">
          <div className="bg-white flex flex-col gap-3 p-2 border-2 border-[#333]/25 shadow-lg">
            <Tabs aria-label="Options" color="primary" variant="underlined" classNames={{ tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider", cursor: "w-full bg-[#17822e]", tab: "max-w-fit h-12", tabContent: "group-data-[selected=true]:text-[#17822e]"}}>
              <Tab title="Szkolenia">
                <div>
                  <Test1 />
                </div>
              </Tab>
              <Tab title="Użytkownicy">
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
