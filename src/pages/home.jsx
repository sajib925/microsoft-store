import React from "react";
import {
  AppsCard,
  AppsHeading,
  Slider,
} from "../components";
import img from "../images/slider/logo-40x40.png";

const Home = () => {
  return (
    <div className="w-[100%]">
      <div className="">
        <div className="p-[16px] flex justify-between items-center flex-wrap mb-[25px] gap-[10px] rounded-[4px] shadow-microsoftStoreShadow">
          <div className="flex justify-start items-center flex-wrap gap-[10px]">
            <img src={img} alt="" />
            <div className="">
              <h3 className="text-[16px] font-bold text-primary">
                Microsoft Store app
              </h3>
              <p className="text-[14px] text-primary">
                Discover the experiences you'll love most on your Windows
                device.
              </p>
            </div>
          </div>
          <div className="">
            <button className="text-[14px] rounded-[4px] border-2 border-transparent bg-microsoftBtn py-[5px] px-[15px] text-white">
              Open Store App
            </button>
          </div>
        </div>

        <Slider />
      </div>

      <div className="mt-[40px]">
        <AppsHeading title="More Apps" />
        <div className="flex justify-center items-center flex-wrap gap-[15px] mt-[30px]">
          <AppsCard />
          <AppsCard />
          <AppsCard />
          <AppsCard />
          <AppsCard />
          <AppsCard />
          <AppsCard />
          <AppsCard />
          <AppsCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
