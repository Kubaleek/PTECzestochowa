interface TooltipProps {
    content: string;
    children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
    return (
        <div className="relative flex items-center group w-full">
            {children}
            <div className="absolute  bottom-full mb-2 hidden group-hover:block bg-[#17822e] text-white text-xs rounded py-2 px-3">
                {content}
            </div>
        </div>
    );
};

export default Tooltip;
