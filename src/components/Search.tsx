import React from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  name?: string;
  onBlur?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  value?: string;
}

const Search: React.FC<Props> = ({ onChange, value }) => {
  return (
    <div className="w-full p-2 flex justify-between items-center shadow-sm rounded-md bg-white">
      <BsSearch className=" mr-5" />
      <input
        type="text"
        className="w-full  focus:outline-none"
        onChange={onChange}
        placeholder="search"
        value={value}
      />
    </div>
  );
};

export default Search;
