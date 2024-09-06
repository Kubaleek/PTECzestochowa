import { Checkbox, Tooltip } from "@nextui-org/react";
import { Controller } from "react-hook-form";

export const CheckInput = ({
  label,
  tooltipContent,
  control,
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
        content={tooltipContent}>
        <div className="flex items-center gap-2">
          <Controller
            name={name}
            control={control}
            rules={validation}
            render={({ field }) => (
              <Checkbox
                isSelected={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
                isDisabled={validation?.disabled}>
                {label}
              </Checkbox>
            )}
          />
        </div>
      </Tooltip>
      {error && <p className="text-red-500 font-semibold">{error.message}</p>}
    </div>
  );
};

export default CheckInput;
