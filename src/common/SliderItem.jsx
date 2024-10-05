import React from "react";
import sliderImg from "../assets/sliderImages/sliderImg.png";

const SliderItem = () => {
  return (
    <div className="pt-[50px] md:pt-20 px-[50px] md:px-20 pb-[50px] md:pb-[83px] bg-[#F2FFCD]  rounded-[20px] w-[343px] xxs:w-[343px] xs:w-[500px] md:w-[500px] xmd:w-[700px] xl:w-[1114px]">
      <div className="text-center">
        <h2 className="text-color2 font-fredoka font-semibold text-2xl md:text-[40px]">Real Stories, Real Solutions</h2>
      </div>
      <div className="flex flex-wrap-reverse lg:gap-x-16 gap-y-8 xl:flex-nowrap items-center  lg:justify-between mt-10">
        <div>
          <div className="xxs:w-[240px] md:w-[371px] flex flex-col gap-y-4 sm:gap-y-6">
            <h3 className="font-fredoka font-semibold text-base sm:text-xl md:text-4xl text-color3">Geeta's Unique Diet</h3>
            <p className="font-inter text-sm sm:text-lg text-color3">
              Following the Jain diet, Geeta avoids a variety of common foods,
              including root vegetables. With her dietary preferences saved in
              IngrediCheck, exploring new foods is no longer a gamble.
            </p>
          </div>
        </div>
        <div>
          <img src={sliderImg} alt="sliderImg" className="rounded-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
