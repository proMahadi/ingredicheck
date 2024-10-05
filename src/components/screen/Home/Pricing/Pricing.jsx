import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Pricing = () => {
  useEffect(()=>{
    AOS.init({});
  },[])
  return (
    <div  className="bg-white/50 mb-[65px]">
      <div className="max-w-info mx-auto pt-20 pb-[200px] px-4 lg:px-0">
        <div  data-aos="zoom-in-up" className="text-center mb-[76px]">
          <h2 className="font-fredoka font-semibold text-2xl md:text-[40px] text-color2">
            Pricing
          </h2>
        </div>
        <div  data-aos="zoom-in-up" className="bg-white pt-20 px-8 md:px-[200px] pb-20 md:pb-[118px] rounded-[20px] ">
          <div className="text-center mb-6">
            <h3 className="font-fredoka font-semibold text-2xl md:text-[40px]">Coming Soon</h3>
          </div>
          <div>
            <p className="font-inter text-lg text-color3">We are finalizing IngrediCheck's pricing to ensure it remains accessible and affordable. Please stay tuned for updates!</p>
            <p className="font-inter text-lg text-color3">In the meantime, we highly value your feedback and encourage you to share your thoughts with us.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
