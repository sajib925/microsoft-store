import React from 'react'
import {HiBars3} from "react-icons/hi2";
import {AiOutlineSearch} from "react-icons/ai";

const Heading = ({handleSidebarMenu}) => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-[12px]">
      <div className="flex items-center gap-x-[12px] ">
        <span className="" onClick={handleSidebarMenu}>
          <HiBars3 size={22} />
        </span>
        <h1 className="font-notoSans text-[28px] text-primary font-semibold">
          Apps
        </h1>
      </div>
      <div className="w-[100%] border-searchBorder border-[1px] mb-[14px]  flex items-center justify-between active:shadow-searchShadow active:border-searchActiveBorder">
        <span className="ml-[8px] text-primary">
          <AiOutlineSearch size={20} />
        </span>
        <input
          type="text"
          placeholder="Search all apps"
          className="w-[100%] px-[11px] my-[2px] mx-[1px] outline-none"
        />
      </div>
    </div>
  );
}

export default Heading