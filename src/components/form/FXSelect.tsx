import { Select, SelectItem } from "@nextui-org/select";
import { useFormContext } from "react-hook-form";

import { IInput } from "@/src/types";

interface IProps extends IInput {
  options: {
    key: string;
    label: string;
  }[];
}

const FXSelect = ({
  label,
  options,
  name,
  variant = "bordered",
  disabled,
}: IProps) => {
  const {
    register,
    formState: {},
  } = useFormContext();

  return (
    <Select
      className="min-w-full sm:min-w-[225px]"
      label={label}
      {...register(name)}
      isDisabled={disabled}
      variant={variant}
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};

export default FXSelect;
