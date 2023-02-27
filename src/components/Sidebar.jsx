import React from "react";
import {NavLink} from "react-router-dom";
import {links} from "./../data/data";
import {IoCloseOutline} from "react-icons/io5";
import {AiOutlineSearch} from "react-icons/ai"

const Sidebar = ({handleSidebarMenu}) => {
  return (
    <div className="max-lg:py-[20px] max-lg:pl-[40px] max-lg:pr-[20px] ">
      {/* close menu for mobile */}

      <div className="lg:hidden flex items-center justify-between px-[10px] pb-[25px]">
        <h2 className="font-notoSans text-[28px] text-primary font-semibold">
          Apps
        </h2>
        <span
          className="w-[25px] h-[25px] flex items-center justify-center rounded-full bg-cardText text-white"
          onClick={handleSidebarMenu}
        >
          <IoCloseOutline size={22} />
        </span>
      </div>

      {/* search for desktop */}
      <div className="hidden lg:block">
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

      {/* sidebar link */}

      <div className="max:md:h-[100%] max-lg:overflow-y-auto max-lg:mb-[20px]">
        <ul className="">
          {links.links.map((item) => (
            <li key={item.name} className="" onClick={handleSidebarMenu}>
              <NavLink
                to={`/${item.link}`}
                className={({isActive}) =>
                  isActive
                    ? "flex items-center bg-sideBarHover relative after:absolute after:top-[7px] after:left-[2px] after:h-[20px] after:w-[3px] after:bg-sideBarActive"
                    : "flex items-center hover:bg-sideBarHover hover:ease-in-out hover:duration-300"
                }
              >
                <img
                  src={item.icon}
                  alt="nav icon"
                  className="w-[16px]  mx-[10px] my-[8px] inline"
                />
                <span className="text-[14px] font-notoSans font-normal text-primary">
                  {item.name}
                </span>
              </NavLink>
            </li>
          ))}
          <p className="text-[14px] font-medium my-[12px] ml-[12px]">
            Categories
          </p>
          {links.categories.map((item) => (
            <li key={item.name} className="">
              <NavLink
                to={`/${item.link}`}
                className={({isActive}) =>
                  isActive
                    ? "flex items-center bg-sideBarHover relative after:absolute after:top-[7px] after:left-[2px] after:h-[20px] after:w-[3px] after:bg-sideBarActive"
                    : "flex items-center hover:bg-sideBarHover hover:ease-in-out hover:duration-300"
                }
              >
                <img
                  src={item.icon}
                  alt="nav icon"
                  className="w-[16px]  mx-[10px] my-[8px]"
                />
                <span className="text-[14px] font-notoSans font-normal text-primary">
                  {item.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
