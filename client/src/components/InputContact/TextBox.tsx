import Tooltip from "./Tooltip";

interface IProps {
    type?: string;
    placeholder?: string;
    label?: string;
    name?: string;
    error?: string;
    tooltipContent?: string; 
}

const TextBox: React.FC<IProps> = ({ type, placeholder, label, name, error, tooltipContent }) => {
    return (
        <div className="relative flex flex-col gap-2">
            {label && (
                <label htmlFor={name} className="text-[16px] font-bold text-gray-700">
                    {label} - {error && <span className="text-[14px] text-rose-500">{error}</span>}
                </label>
            )}
            {tooltipContent ? (
                <Tooltip content={tooltipContent}>
                    <input type={type} id={name} name={name} placeholder={placeholder} className="w-full text-[14px] placeholder:text-[12px] placeholder:text-[#505050] border-2 border-[#272626]/25 focus:border-[#17822e] focus:outline-[#17822e] px-3 py-1.5 transition-all duration-200 ease" />
                </Tooltip>
            ) : (
                <input type={type} id={name} name={name} placeholder={placeholder} className="w-full text-[14px] placeholder:text-[12px] placeholder:text-[#505050] border-2 border-[#272626]/25 focus:border-[#17822e] focus:outline-[#17822e] px-3 py-1.5 transition-all duration-200 ease" />
            )}
        </div>
    );
};

export default TextBox;
