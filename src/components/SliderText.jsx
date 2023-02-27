import React from "react";

const SliderText = ({price, title, description, btn}) => {
  return (
    <div className="font-notoSans">
      {price ? (
        <p className="text-[14px] sm:text-[16px] text-sliderPrice cursor-pointer">
          {price}
        </p>
      ) : (
        ""
      )}
      <h3 className="text-[16px] sm:text-[20px] md:text-[36px] font-semibold  text-white py-[5px] cursor-pointer">
        {title}
      </h3>
      <p className="text-[14px] sm:text-[16px] font-semibold  text-sliderDescription mb-[20px] sm:mb-[25px] md:mb-[40px] cursor-pointer">
        {description}
      </p>
      <button className="text-[14px] bg-sliderBtnBg text-white py-[5px] px-[8px] sm:px-[12px] border-2 border-sliderBtnBg hover:bg-sliderBtnHoverBg hover:ease-in-out hover:duration-300">
        {btn}
      </button>
    </div>
  );
};

export default SliderText;
