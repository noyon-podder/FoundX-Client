import { Textarea } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

import { IInput } from "@/src/types";

interface IProps extends IInput {}

const FXTextarea = ({ label, name, variant = "bordered" }: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Textarea label={label} minRows={6} variant={variant} {...register(name)} />
  );
};

export default FXTextarea;
