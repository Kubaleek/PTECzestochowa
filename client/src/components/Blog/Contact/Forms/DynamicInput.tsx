import { Tooltip } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

const DynamicInput = ({
  label,
  placeholder,
  tooltipContent,
  register,
  validation,
  error,
  name,
  type,
}  : any) => {
  const getValidationRules = () => {
    switch (type) {
      case "email":
        return {
          ...validation,
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Niepoprawny format e-maila",
          },
        };
      case "tel":
        return {
          ...validation,
          pattern: {
            value: /^[+]?[0-9]{1,4}?[-.\s]?[0-9]{1,15}$/,
            message: "Niepoprawny numer telefonu",
          },
        };
      default:
        return validation;
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Tooltip
        classNames={{ base: ["before:bg-green-800"] }}
        placement="top-start"
        className="bg-green-800 text-white shadow-lg"
        content={tooltipContent}
      >
        <Input
          type={type}
          label={label}
          placeholder={placeholder}
          {...register(name, getValidationRules())} // Dodanie reguł walidacji
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

export default DynamicInput;
