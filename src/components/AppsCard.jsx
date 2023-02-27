import React from "react";
import {Link} from "react-router-dom";
import img from "../images/logo/apps.42667.14618985536919905.4b30e4f3-f7a1-4421-840c-2cc97b10e8e0.png";

const AppsCard = () => {
  return (
    <div className="card w-[130px] lg:w-[150px] h-[290px] relative shadow-cardShadow rounded-[4px] cursor-pointer z-[2] hover:-translate-y-[2px] hover:shadow-cardHoverShadow hover:ease-in-out hover:duration-300">
      <div className="w-[60%] rounded-[10%] mx-auto my-[22px] overflow-hidden">
        <img src={img} alt="apps image" className="w-[100%] object-cover " />
      </div>

      <Link to="#" className="mx-[2px] px-[5%] block font-notoSans">
        <span className="text-[16px] text-secondary font-bold inline-block">
          Prime Video for Windows
        </span>
        <span className="text-[12px] text-cardText">Entertainment</span>
        <div className="text-[16px] text-secondary">★★★★★</div>
        <span className="card__price block absolute z-0 bottom-[3%]">Free</span>
      </Link>
      <div className="card__btn hidden absolute left-[7%] bottom-[3%] w-[86%] py-[6px] px-[10px] border-[1px] border-cardBtnBorder rounded-[4px] shadow-cardBtnShadow z-[11] hover:ease-in-out hover:duration-300">
        <button className="text-[14px] text-secondary border-none outline-none w-[100%%]">
          Get in Store app
        </button>
      </div>
    </div>
  );
};

export default AppsCard;
