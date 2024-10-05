import React, { useEffect } from "react";
import Container from "../../../../common/Container";
import service1 from "../../../../assets/serviceImages/service1.png";
import service2 from "../../../../assets/serviceImages/service2.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(()=>{
    AOS.init({});
  },[])
  return (
    <div className="relative overflow-x-hidden">
      <Container className="md:px-20 md:pt-20 md:pb-[373px] pb-[160px] px-5 pt-5 ">
        <div className="flex flex-col gap-y-[120px]">
          <div data-aos="fade-right" className="flex flex-wrap md:flex-nowrap items-center  justify-between gap-x-6 gap-y-8">
            <div>
              <img src={service1} alt="service" />
            </div>
            <div className=" md:w-[500px]">
              <h2 className="font-semibold text-xl sm:text-2xl md:text-[32px] font-fredoka text-color2 w-[300px] md:w-auto">
                Tired of Reading Labels? IngrediCheck made it easy
              </h2>
              <p className="font-inter text-sm:text-base md:text-xl text-[#4F5449] mt-8">
                Grocery shopping with dietary restrictions just got easier.
                IngrediCheck lets you scan food labels to instantly see if they
                fit your dietary needs. For you or your loved ones, bring home
                the right food without the guesswork. Simple, quick, no hassle.
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="flex flex-wrap md:flex-nowrap items-center  justify-between gap-x-6 gap-y-8">
            <div className=" md:w-[500px]">
              <h2 className="font-semibold text-xl sm:text-2xl md:text-[32px] font-fredoka text-color2 w-[300px] md:w-auto">
                Discover and Remember Your Foodie Favorites
              </h2>
              <p className="font-inter text-sm:text-base md:text-xl text-[#4F5449] mt-8">
                Forgot the name of a new favorite food? IngrediCheck ends the
                guesswork. Save and collect your top food finds with a tap,
                ensuring your favorites are always remembered.
              </p>
            </div>
            <div>
              <img src={service2} alt="service" />
            </div>
          </div>
        </div>
      </Container>
      <div class="custom-shape-divider-bottom-1713972170">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Services;
