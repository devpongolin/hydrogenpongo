import React from 'react';
import dogsImage from '../assets/Heroimage_(2).webp';
import mobileDogsImage from '../assets/moblieimg.webp';
import arrowImage from '../assets/arrow.webp';

const data = {
  images: { dogsImage, mobileDogsImage, arrowImage },
  textContent: {
    heading: "We built Waggle for pet parents like us.",
    description: "You walk out the door and instantly wonder—did I leave the AC on? Did the dog spill the water bowl? Is it too hot in the RV? Is my pet okay? So we built a way to check in, no matter where you are.",
    buttonText: "Find Your Waggle"
  }
};

const Index = () => {
  return (
    <div className="bg-[#B47E57] flex flex-col items-center md:px-[112px] md:py-[55px] pt-5 md:pb-5 pb-[34px] md:rounded-t-[34px] rounded-t-[28px] h-auto md:h-[742px] overflow-hidden">
      <div className="container mx-auto w-full">
        <div className="flex justify-center md:hidden">
          <img src={data.images.mobileDogsImage} alt="Golden retriever with owner" loading="lazy" width="360" height="241" />
        </div>
        <div className="w-full flex justify-center">
          <div className="text-center md:text-left md:w-[55%] md:mr-2">
            <h1 className="text-custom47 white-text-element md:text-[63px] text-[28.48px] lexend mt-[13px] md:mt-0 leading-[36px] font-medium md:leading-[79px] tracking-[0] max-w-[28rem] md:max-w-none">{data.textContent.heading}</h1>
            <p className="white-text-element text-sm md:hidden mx-auto max-w-md px-4 md:mt-2 mt-1.5">{data.textContent.description}</p>
            <div className="flex justify-center md:justify-start md:mt-[25px] mt-[16px]">
              <button className="button1 button-hover border border-gray-transparent text-dark-gray pt-[6px] pr-[6px] pb-[6px] pl-[28px] md:py-[9px] md:pl-[28px] md:pr-[9px] rounded-full flex items-center md:gap-4 gap-3">
                <span className="font-bold tracking-[0] text-[16px] lato text-dark-gray">{data.textContent.buttonText}</span>
                <span className="flex items-center justify-center rounded-full">
                  <img src={data.images.arrowImage} alt="Arrow right" loading="lazy" className="cursor-pointer" width="40" height="40" />
                </span>
              </button>
            </div>
          </div>
          <div className="hidden md:block md:w-[44%] mr-[30px]">
            <p className="text-off-white-80 mt-[39px] lato text-[20.25px] tracking-[0] font-normal">{data.textContent.description}</p>
          </div>
        </div>
      </div>
      <div className="hidden md:block mt-10">
        <img src={data.images.dogsImage} alt="Two dogs with owners connected by curved line" loading="lazy" width="1216" height="349" />
      </div>
    </div>
  );
};

export default Index;








