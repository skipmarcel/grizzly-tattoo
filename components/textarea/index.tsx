import { ReactNode } from "react";
import { FormLabel } from "../ui/form";
import { Textarea as ShadTextarea } from "../ui/textarea";

type Props = {
  placeholder?: string;
  id: string;
  label?: ReactNode | string;
  rows?: number;
  onKeyDown?: any;
};

const Textarea = ({ placeholder, id, label, ...rest }: Props) => {
  return (
    <div className="grid w-full items-center gap-1.5">
      {label && <FormLabel>{label}</FormLabel>}
      <ShadTextarea id={id} placeholder={placeholder} {...rest} />
    </div>
  );
};

export default Textarea;
