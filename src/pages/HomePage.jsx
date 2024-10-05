import React from "react";
import Banner from "../components/screen/Home/Banner/Banner";
import Services from "../components/screen/Home/Services/Services";
import Features from "../components/screen/Home/Features/Features";
import SliderPart from "../components/screen/Home/SliderPart/SliderPart";
import NewFeatures from "../components/screen/Home/NewFeatures/NewFeatures";
import Pricing from "../components/screen/Home/Pricing/Pricing";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Services/>
      <Features/>
      <SliderPart/>
      <NewFeatures/>
      <Pricing/>
    </>
  );
};

export default HomePage;
