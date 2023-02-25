import React from "react";
import {Link, NavLink} from "react-router-dom";
import {links} from "./../data/data";

const Sidebar = () => {
  return (
    <div>
      <div className="">
        <ul className="">
          {links.links.map((item) => (
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
            <li
              key={item.name}
              className=""
            >
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
