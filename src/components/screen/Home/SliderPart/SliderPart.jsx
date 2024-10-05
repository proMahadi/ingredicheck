import React, { useEffect } from "react";
import SliderItem from "../../../../common/SliderItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';


const SliderPart = () => {
  useEffect(()=>{
    AOS.init({});
  },[])
  return (
    <div  data-aos="zoom-in-up" className="relative z-20">
      <div className="max-w-slider mx-auto px-4 lg:px-0   absolute top-[-170px] left-[50%] translate-x-[-50%] ">
        <div className="w-full flex items-center gap-x-6 justify-center relative ">
          <button className="h-6 md:h-12 w-6 md:w-12 rounded-full hover:bg-black text-[#7E8379] hover:text-white duration-200 flex items-center justify-center text-2xl absolute top-[50%] translate-y-[-50%] left-[15px] md:static arrow-left z-10">
            <FaAngleLeft />
          </button>
          {/* =================== slider part =================== */}
          <div className=" xxs:w-[343px] xs:w-[500px] md:w-[500px] xmd:w-[700px] xl:w-[1114px]">
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{ nextEl: ".arrow-right", prevEl: " .arrow-left" }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              loop
            >
              <SwiperSlide>
                <SliderItem />
              </SwiperSlide>
              <SwiperSlide>
                <SliderItem />
              </SwiperSlide>
            </Swiper>
          </div>
          {/* =================== slider part =================== */}
          <button className="h-6 md:h-12 w-6 md:w-12 rounded-full hover:bg-black text-[#7E8379] hover:text-white duration-200 flex items-center justify-center text-2xl absolute top-[50%] translate-y-[-50%] right-[15px] md:static arrow-right z-10">
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderPart;
