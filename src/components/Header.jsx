import React from "react";
import {Link} from "react-router-dom";
import logo from "../images/logo/logo.png";
import {CgProfile} from "react-icons/cg";

const Header = () => {
  return (
    <header className="py-[16px] sticky top-0 z-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="">
            <Link to="/">
              <img className="max-w-[108px]" src={logo} alt="microsoft logo" />
            </Link>
          </div>
          <div className="flex items-center">
            <ul className="flex items-center gap-x-[24px]">
              <li className="m">
                <Link
                  to="/"
                  className="text-navLink font-notoSans font-normal text-[16px] relative before:absolute before:-bottom-[5px] before:h-[2px] before:w-0 hover:before:w-[100%] before:bg-navLink before:ease-in-out before:duration-300"
                >
                  Windows Apps
                </Link>
              </li>
              <li className="">
                <Link
                  to="/"
                  className="text-navLink font-notoSans font-normal text-[16px] relative before:absolute before:-bottom-[5px] before:h-[2px] before:w-0 hover:before:w-[100%] before:bg-navLink before:ease-in-out before:duration-300"
                >
                  Developers
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-x-[12px]">
            <span className="text-navLink font-notoSans font-normal text-[16px] hidden md:block">
              Sign In
            </span>
            <span className="text-gray-300">
              <CgProfile size={32} />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
