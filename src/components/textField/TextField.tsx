import React from "react";

interface Props {
  name?: string;
  id?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  onBlur?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  error?: string;
  value?: string;
}
const TextField: React.FC<Props> = ({
  name,
  placeholder,
  type,
  onBlur,
  error,
  onChange,
  className,
  value,
  id,
}) => {
  return (
    <div
      className="w-full p-2 flex  shadow-sm rounded-md bg-white"
      data-testid="input-Element"
    >
      <input
        data-testid="input-Element-input"
        className="w-full  focus:outline-none"
        name={name}
        id={id}
        onBlur={onBlur}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default TextField;
