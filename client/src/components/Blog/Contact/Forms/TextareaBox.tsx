import { Textarea, Tooltip } from "@nextui-org/react";

export const TextareaBox = ({
    label,
    placeholder,
    tooltipContent,
    register,
    validation,
    error,
    name,
}) => {
    return (
        <div className="flex flex-col gap-2">
            <Tooltip
                classNames={{ base: ["before:bg-green-800"] }}
                placement="top-start"
                className="bg-green-800 text-white shadow-lg"
                content={tooltipContent}
            >
                <Textarea
                    label={label}
                    placeholder={placeholder}
                    className={`border rounded shadow ${
                        error ? "border-red-800" : "border-gray-300"
                      } !bg-transparent hover:outline-none !outline-none `}
                    {...register(name, validation)}
                />
            </Tooltip>
            {error && <p className="text-red-500 font-semibold">{error.message}</p>}
        </div>
    );
};

export default TextareaBox;
