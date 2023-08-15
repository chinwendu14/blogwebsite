import React from "react";
import Button from "../button/Button";

interface Props {
  headerText?: string;
  text?: string;
  onClickheader?: () => void;
  onClickcomment?: () => void;
  onClickbtn?: () => void;
}

const Cards: React.FC<Props> = ({
  headerText,
  text,
  onClickcomment,
  onClickheader,
  onClickbtn,
}) => {
  return (
    <div className="shadow-sm rounded-md bg-white p-6 text-black flex  justify-between flex-col">
      <h1 className="mb-4 font-bold text-lg" onClick={onClickheader}>
        {headerText}
      </h1>
      <p>{text} ...</p>
      <div className="pt-5 flex  justify-end items-center  ">
        <p className="mr-2 underline text-[#11632F]" onClick={onClickcomment}>
          comments
        </p>
        <Button btntype="button" text=" Read More" onClickbtn={onClickbtn} />
      </div>
    </div>
  );
};

export default Cards;
