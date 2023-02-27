import React from "react";
import {Link} from "react-router-dom";
import img from "../images/logo/apps.4784.13634052595610511.c45457c9-b4af-46b0-8e61-8d7c0aec3f56.png";

const TopAppsCard = () => {
  return (
    <div className="top__card flex items-center justify-between my-[16px] shadow-cardShadow rounded-[4px] cursor-pointer z-[2] hover:-translate-y-[2px] hover:shadow-cardHoverShadow p-[10px] hover:duration-300 hover:ease-in-out">
      <div className="">
        <Link to="#" className="flex items-center justify-start">
          <div className="w-[100px]">
            <img src={img} alt="app image" className="w-[100% object-cover]" />
          </div>
          <div className="font-notoSans">
            <span className="top__card__title text-[16px] text-secondary font-bold relative before:absolute before:-bottom-0 before:h-[1px] before:w-0 before:bg-navLink">
              Prime Video for Windows
            </span>
            <span className="text-[12px] text-cardText block">
              Entertainment
            </span>
            <div className="text-[16px] text-secondary">★★★★★ 50k</div>
            <span className="text-secondary text-[16px] font-semibold">
              Free
            </span>
          </div>
        </Link>
      </div>
      <div className="hidden sm:block py-[6px] px-[10px] border-[1px] border-cardBtnBorder rounded-[4px] shadow-cardBtnShadow ">
        <button className="text-[14px] text-secondary border-none outline-none w-[100%%]">
          Get in Store app
        </button>
      </div>
    </div>
  );
};

export default TopAppsCard;
