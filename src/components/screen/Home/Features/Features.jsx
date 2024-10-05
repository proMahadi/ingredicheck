import React, { useEffect } from "react";
import featureHeadImg from "../../../../assets/featuresImages/featureHeadImg.png";
import FeatureCard from "../../../../common/FeatureCard";
import feature1 from "../../../../assets/featuresImages/feature1.png";
import feature2 from "../../../../assets/featuresImages/feature2.png";
import feature3 from "../../../../assets/featuresImages/feature3.png";
import feature4 from "../../../../assets/featuresImages/feature4.png";
import AOS from "aos";
import "aos/dist/aos.css";
import bgicon1 from "../../../../assets/newFeaturesImages/bgicon1.png";
import bgicon2 from "../../../../assets/newFeaturesImages/bgicon2.png";
import bgicon3 from "../../../../assets/newFeaturesImages/bgicon3.png";
import bgicon4 from "../../../../assets/newFeaturesImages/bgicon4.png";
import bgicon5 from "../../../../assets/newFeaturesImages/bgicon5.png";
import bgicon6 from "../../../../assets/newFeaturesImages/bgicon6.png";

const Features = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    // <div className="bg-feature bg-no-repeat  bg-cover relative">
    <div className="bg-color1  relative">
      <div
        data-aos="zoom-in-up"
        className="max-w-info mx-auto pt-[75px] md:pt-[117px] lg:pt-[210px] pb-[320px] px-4 lg:px-0 "
      >
        <div className="text-center relative">
          <div>
            <img src={bgicon1} alt="bgicon" className="absolute top-[-120px]" />
          </div>
          <h2 className="font-fredoka font-semibold text-2xl md:text-[40px] text-white mb-10  ">
            Features at Your Fingertips
          </h2>
          <div>
            <img
              src={bgicon2}
              alt="bgicon"
              className="absolute top-0 xxs:right-0 xs:right-[50px] sm:right-[100px] md:right-[150px] lg:right-[200px] xl:right-[242px]"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-6 justify-center relative">
          <FeatureCard
            featureImg={feature1}
            featureTitle="Personalized Dietary Preferences"
            featureDescription="Enter your dietary needs in natural language, and let IngrediCheck do the rest."
          />
          <FeatureCard
            featureImg={feature2}
            featureTitle="Instant Barcode Analysis"
            featureDescription="Scan a packaged food item's barcode for an immediate thumbs-up or thumbs-down based on your dietary profile"
          />
          <FeatureCard
            featureImg={feature3}
            featureTitle="Picture Perfect"
            featureDescription="If the barcode scan draws a blank, snap a picture. Our database will still provide an instant analysis."
          />
          <FeatureCard
            featureImg={feature4}
            featureTitle="Favorites List"
            featureDescription="Discover, save, and recall your favorite food items anytime, making every grocery run a walk in the park."
          />
        </div>
        <div>
          <img
            src={bgicon3}
            alt="bgicon"
            className="absolute top-[250px] right-[-50px] xl:block hidden"
          />
        </div>
      </div>
      <div className="absolute top-[-7%] sm:top-[-10%] md:top-[-11%] lg:top-[-14%] left-[50%] translate-x-[-50%] ">
        <img src={featureHeadImg} alt="featureHeadImg" />
      </div>
      <div>
        <img
          src={bgicon4}
          alt="bgicon"
          className="absolute bottom-[143px] left-[0px]"
        />
      </div>
      <div>
        <img
          src={bgicon6}
          alt="bgicon"
          className="absolute bottom-[316px] right-0"
        />
      </div>
      <div>
        <img
          src={bgicon5}
          alt="bgicon"
          className="absolute bottom-[184px] right-[416px]"
        />
      </div>
    </div>
  );
};

export default Features;
