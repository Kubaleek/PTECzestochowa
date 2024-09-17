import { Tooltip } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

export const FileInput = ({
  label,
  tooltipContent,
  register,
  error,
  name,
  validation,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Tooltip
        classNames={{ base: ["before:bg-green-800"] }}
        placement="top-start"
        className="bg-green-800 text-white shadow-lg"
        content={tooltipContent}
      >
        <Input
          type="file"
          label={label}
          {...register(name, validation)}
          className={`border rounded shadow ${
            error ? "border-red-800" : "border-gray-300"
          } !bg-transparent hover:outline-none !outline-none`}
          isClearable
        />
      </Tooltip>
      {error && <p className="text-red-500 font-semibold">{error.message}</p>}
    </div>
  );
};

export default FileInput;
