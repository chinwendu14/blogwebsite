import React from "react";
import Search from "../search/Search";

interface Props {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  value?: string;
}

const Header: React.FC<Props> = ({ value, onChange }) => {
  return (
    <>
      <div className="pb-4 pl-8 pr-4 pt-4 flex justify-between items-center bg-[#11632F]">
        <div className="max-w-1/2">
          <h1 className="text-white ">BLOG</h1>
        </div>
        <div className="max-w-md md:w-full ">
          <Search value={value} onChange={onChange} />
        </div>
      </div>
    </>
  );
};

export default Header;
