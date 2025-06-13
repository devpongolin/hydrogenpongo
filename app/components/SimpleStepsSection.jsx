import React from 'react';
import backgroundImage from '../assets/background-image.webp';
import backgroundImageMobile from '../assets/background-image-mobile.webp'; // Mobile-specific image
import arrowIcon from '../assets/arrow-icon2.webp';

const data = {
  images: {
    backgroundImage,
    backgroundImageMobile,
    arrowIcon,
  },
  textContent: {
    heading: "3 Simple Steps to Get Started",
    buttonText: "Partner with Us"
  },
  backgroundImageAlt: "Woman with golden retriever dog",
  steps: [
    {
      id: "step1",
      stepNumber: "Step 1",
      title: "Choose the Partner Track That Fits"
    },
    {
      id: "step2",
      stepNumber: "Step 2",
      title: "Get the Tools and Support You Need"
    },
    {
      id: "step3",
      stepNumber: "Step 3",
      title: "Start Helping Pets and Earning Rewards"
    }
  ]
};

const SimpleStepsSection = () => {
  return (
    <div className="semi-transparent-bg padding-custom md:px-[112px] pt-[50px] px-[20px] pb-[40px] md:py-[56px]">
      <div className="relative w-full max-w-[1440px] mx-auto rounded-[32px] overflow-hidden">
        <div className="hidden md:block">
          <div className="absolute inset-0 custom-background"></div>
          <img
            src={data.images.backgroundImage}
            alt={data.backgroundImageAlt}
            className="w-full object-cover relative pt-[56px]"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col">
            <div className="p-[56px]">
              <h2 className="text-4xl lg:text-5xl leading-tight max-w-[22rem] lexend">
                {data.textContent.heading}
              </h2>
            </div>
            <div className="flex-1 bg-radial-peach flex items-end px-[51px] pb-[54px]">
              <div className="grid grid-cols-4 gap-4 w-full">
                {data.steps.map((step) => (
                  <div key={step.id} className="p-[39px] layout-padding bg-uniq-color rounded-[28px]">
                    <div className="lato my-text-color font-medium text-[14px] pt-[4px] pb-[4px] px-[12px] leading-[100%] tracking-normal mb-[12px]">
                      {step.stepNumber}
                    </div>
                    <h3 className="lexend my-text-color font-normal text-[23px] leading-[100%] tracking-normal">
                      {step.title}
                    </h3>
                  </div>
                ))}
                <div>
                  <button className="blue-400 rounded-[28px] h-full white-text-element font-bold p-[39px] flex flex-col justify-between group w-full">
                    <span className="lexend font-normal text-[23px] leading-[100%] tracking-normal">
                      {data.textContent.buttonText}
                    </span>
                    <img
                      src={data.images.arrowIcon}
                      alt="Arrow"
                      className="cursor-pointer"
                      loading="lazy"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden w-full custom-gradient">
          <div className="relative w-full">
            <img
              src={data.images.backgroundImageMobile}
              alt={data.backgroundImageAlt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex pt-[24px] pr-[90px] pl-[19px]">
              <h2 className="lexend font-normal text-[28.48px] leading-[100%] tracking-[0]">
                {data.textContent.heading}
              </h2>
            </div>
          </div>
          <div className="relative -mt-[9rem] px-[30px]">
              <div className="flex flex-col gap-4 max-w-sm mx-auto">
                {data.steps.map((step) => (
                  <div key={step.id} className="p-[40px] bg-uniq-color rounded-[28px]">
                    <div className="lato my-text-color font-medium text-[14px] leading-[100%] tracking-[0] pt-[4px] pb-[4px] px-[12px] mb-[12px]">
                      {step.stepNumber}
                    </div>
                    <h3 className="lexend my-text-color font-normal text-[20px] leading-[121%] tracking-[0]">
                      {step.title}
                    </h3>
                  </div>
                ))}
                <button className="blue-400 rounded-[28px] white-text-element font-bold p-[40px] flex flex-col gap-[30px] group w-full ">
                  <span className="lexend font-normal text-[20px] leading-[100%] tracking-normal">
                    {data.textContent.buttonText}
                  </span>
                  <img
                    src={data.images.arrowIcon}
                    alt="Arrow"
                    className="cursor-pointer"
                    loading="lazy"
                  />
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleStepsSection;
