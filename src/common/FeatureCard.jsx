import React from 'react'

const FeatureCard = ({featureImg,featureTitle,featureDescription}) => {
  return (
    <div className='bg-white px-[50px] pt-[50px] pb-20 w-auto sm:w-[549px] rounded-[20px] '>
        <div>
            <img src={featureImg} alt="" />
        </div>
        <div>
            <h3 className='font-inter font-bold text-2xl text-[#1E2C33] mt-9 mb-[10px]'>{featureTitle}</h3>
        </div>
        <div>
            <p className='font-inter text-base text-[#1B270C]'>{featureDescription}</p>
        </div>
    </div>
  )
}

export default FeatureCard