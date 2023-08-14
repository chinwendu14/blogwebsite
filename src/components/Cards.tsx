import React from "react";

interface Props {
  headerText?: string;
  text?: string;
}

const Cards: React.FC<Props> = ({ headerText, text }) => {
  return (
    <div className="shadow-sm rounded-md bg-white p-6 text-black">
      <h1 className="mb-4 font-bold text-lg">{headerText}</h1>
      <p>{text} ...</p>
      <div className="pt-5 flex  justify-end items-end  ">
        <button className="pt-2 pb-2 pr-4 pl-4  rounded-md text-white bg-[#11632F]">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Cards;
