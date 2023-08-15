import React from "react";

interface Props {
  headerText?: string;
  text?: string;
  btntype?: any;
  onClickbtn?: () => void;
}
const Button: React.FC<Props> = ({ btntype, text, onClickbtn }) => {
  return (
    <button
      type={btntype}
      onClick={onClickbtn}
      className="pt-2 pb-2 pr-4 pl-4  rounded-md text-white bg-[#11632F]"
    >
      {text}
    </button>
  );
};

export default Button;
