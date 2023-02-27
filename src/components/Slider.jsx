import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Keyboard, Pagination, Navigation} from "swiper";
import img1 from "../images/slider/image.jpg";
import img2 from "../images/slider/image (1).jpg";
import img3 from "../images/slider/image (2).jpg";
import SliderText from "./SliderText";

export default function App() {
  return (
    <div className="w-[100%]">
      <Swiper
        slidesPerView={1}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="w-[100%] h-[100%]"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={img1} alt="slider img" />
            <div className="absolute bottom-[50%] translate-y-[50%] left-[50px]">
              <SliderText
                price="Free"
                title="Lively Wallpaper"
                description="Bring your desktop alive"
                btn="Get in Store app"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={img2} alt="slider img" />
            <div className="absolute bottom-[50%] translate-y-[50%] left-[50px]">
              <SliderText
                title="Racing games"
                description="Rev up for high-speed action"
                btn="Explore"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={img3} alt="slider img" />
            <div className="absolute bottom-[50%] translate-y-[50%] left-[50px]">
              <SliderText
                price="Free"
                title="1000s of Movies & Shows"
                description="Stream Free on Pluto TV"
                btn="Get in Store app"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
