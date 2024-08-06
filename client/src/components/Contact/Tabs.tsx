import React, { useState } from 'react';

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
                            index === activeTab ? 'bg-[#17822e] text-white font-semibold border-[#17822e]' : 'text-gray-800'
                        } flex-1 p-2 rounded-md focus:outline-none focus:shadow-outline-[#17822e] transition-all duration-300`}
                        onClick={() => setActiveTab(index)}>
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className='rounded-lg shadow mt-3 border p-4'>
                {tabs[activeTab].content}
            </div>
        </>
    );
};

export default Tabs;
