import React, { useEffect } from "react";
import NewFeatureCard from "../../../../common/NewFeatureCard";
import orange from "../../../../assets/newFeaturesImages/orange.png";
import featureVector1 from "../../../../assets/newFeaturesImages/featureVector1.png"
import featureVector2 from "../../../../assets/newFeaturesImages/featureVector2.png"
import AOS from 'aos';
import 'aos/dist/aos.css';


const NewFeatures = () => {
  useEffect(()=>{
    AOS.init({});
  },[])
  return (
    <div  className="relative">
      <div className="max-w-info mx-auto pt-[646px] pb-[230px] px-4 lg:px-0 relative">
        <div  data-aos="zoom-in-up" className="text-center">
          <h2 className="font-fredoka font-semibold text-2xl md:text-[40px] text-color2">
            New Features Coming Soon
          </h2>
        </div>
        <div  data-aos="zoom-in-up" className="flex flex-wrap lg:flex-nowrap justify-center gap-y-8  mt-[60px] gap-x-[30px]">
          <NewFeatureCard
            title="Shared Dietary Preferences"
            description="Imagine sharing your custom dietary preferences with friends and family. Jake looks forward to helping his new roommate, Pedro, shop with confidence, knowing exactly what to pick and what to avoid."
            img={featureVector1}
          />
          <NewFeatureCard
            title="Search Your Way"
            description="Tom can't wait to use IngrediCheck to find noodles at Target that fit his dietary needs. Our upcoming Product Catalog Search feature will make this a breeze.
            "
            img={featureVector2}
          />
        </div>
        <div className="absolute bottom-[-150px] xs:bottom-[-300px] md:bottom-[-400px] lg:bottom-[-550px] z-[-1]">
          <img src={orange} alt="orange" />
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1714066308">
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

export default NewFeatures;
