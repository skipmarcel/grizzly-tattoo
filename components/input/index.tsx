import { cn } from "@/utils";
import React, { memo, forwardRef, Ref, ChangeEvent } from "react";
import { FieldError } from "react-hook-form";

interface InputProps {
  className?: string;
  id?: string;
  label?: string;
  textarea?: boolean;
  error?: any;
  onChange?: any;
  required?: boolean;
  name: string;
  value?: string;
  type?: string;
  phoneInput?: boolean;
  placeholder?: string;
  rows?: number;
  inputClassName?: string;
  messageClassName?: string;
  multiple?: boolean;
}

const formatPhoneNumber = (inputValue: string): string => {
  const digitsOnly = inputValue?.replace(/\D/g, "");
  const firstThreeDigits = digitsOnly?.slice(0, 3);
  const nextThreeDigits = digitsOnly?.slice(3, 6);
  const lastFourDigits = digitsOnly?.slice(6, 10);

  let formattedPhoneNumber = "";

  if (digitsOnly?.length > 6) {
    formattedPhoneNumber = `(${firstThreeDigits}) ${nextThreeDigits}-`;
  } else if (digitsOnly?.length > 3) {
    formattedPhoneNumber = `(${firstThreeDigits}) ${nextThreeDigits}`;
  } else if (digitsOnly?.length > 0) {
    formattedPhoneNumber = `(${firstThreeDigits}`;
  }

  formattedPhoneNumber += lastFourDigits;

  return formattedPhoneNumber;
};

const Input = forwardRef<Ref<any>, InputProps>((props, ref: any) => {
  const {
    className,
    id,
    label,
    textarea,
    name = "",
    error,
    required,
    type,
    phoneInput,
    value,
    onChange,
    inputClassName,
    messageClassName,
    ...rest
  } = props;
  const Element = textarea ? "textarea" : "input";

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    const formattedValue = phoneInput ? formatPhoneNumber(value) : value;

    if (phoneInput) {
      onChange?.({
        target: {
          name,
          value: formattedValue.replace(/\D/g, "").slice(0, 10),
        },
      });
    } else {
      onChange?.(e);
    }
  };

  return (
    <div className={cn("relative", className)}>
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
          {required && <span className="text-red-700"> *</span>}
        </label>
      )}
      <Element
        className={cn("input", textarea && "textarea", inputClassName)}
        ref={ref}
        name={name}
        type={type}
        onChange={handleChange}
        value={phoneInput && value ? formatPhoneNumber(value) : value}
        {...rest}
      />
      {error && (
        <p className={cn("input-error-message", messageClassName)}>
          {error.message}
        </p>
      )}
    </div>
  );
});

export default memo(Input);
