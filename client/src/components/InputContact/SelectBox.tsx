import Tooltip from "./Tooltip";

interface IProps {
    label?: string;
    name?: string;
    options?: string[];
    tooltipContent?: string;
}

const SelectBox: React.FC<IProps> = ({ label, name, options = [], tooltipContent }) => {
    return (
        <div className="relative flex flex-col gap-2">
            {label && (
                <label htmlFor={name} className="text-[16px] font-bold text-gray-700">
                    {label}
                </label>
            )}
            {tooltipContent ? (
                <Tooltip content={tooltipContent}>
                    <select name={name} id={name} className="w-full text-[14px] placeholder:text-[12px] placeholder:text-[#505050] border-2 border-[#272626]/25 focus:border-[#17822e] focus:outline-[#17822e] px-3 py-1.5 transition-all duration-200 ease">
                        {options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </Tooltip>
            ) : (
                <select name={name} id={name} className="w-full text-[14px] placeholder:text-[12px] placeholder:text-[#505050] border-2 border-[#272626]/25 focus:border-[#17822e] focus:outline-[#17822e] px-3 py-1.5 transition-all duration-200 ease">
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
};

export default SelectBox;
