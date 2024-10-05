import React from "react";

const NewFeatureCard = ({title,description,img}) => {
  return (
    <div className="py-6 pl-[50px] pr-[46px] bg-color3 w-[545px] sm:h-[224px] rounded-[20px] flex relative">
      <div>
        <h3 className="font-inter font-bold text-2xl bg-[linear-gradient(to_right,orange_40%,green)] w-fit text-transparent bg-clip-text">
          {title}
        </h3>
        <p className="font-inter text-base text-white mt-[10px]">
          {description}
        </p> 
      </div>
      <div className="absolute top-0 right-0">
        <img src={img} alt="vector" />
      </div>
    </div>
  );
};

export default NewFeatureCard;
