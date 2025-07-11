import React from 'react';
import dogsImage from '../assets/Heroimage_(2).webp';
import mobileDogsImage from '../assets/moblieimg.webp';
import arrowImage from '../assets/arrow.webp';



const WaggleHero = (metaData) => {
  const fields =
    metaData?.metaData?.aboutUsBannersData?.aboutUsDatas?.metaobjects?.edges?.[0]?.node?.fields || [];

  const getValue = (key) =>
    fields.find((field) => field.key === key)?.value;

  const getReferenceImageUrl = (key) =>
    fields.find((field) => field.key === key)?.reference?.image?.url;

  const mainTitle = getValue('aboutus_main_title');
  const description = getValue('aboutus_discription');
  const buttonText = getValue('aboutus_button_text');
  const desktopImage = getReferenceImageUrl('aboutus_banner_image_desktop');
  const mobileImage = getReferenceImageUrl('aboutus_banner_image_mobile');
  const buttonIcon = getReferenceImageUrl('aboutus_button_logo');


  const data = {
    images: { dogsImage, mobileDogsImage, arrowImage },
    textContent: {
      heading: mainTitle || "We built Waggle for pet parents like us." ,
      description: description || "You walk out the door and instantly wonder—did I leave the AC on? Did the dog spill the water bowl? Is it too hot in the RV? Is my pet okay? So we built a way to check in, no matter where you are.",
      buttonText: buttonText || "Find Your Waggle",
    },
  };


  return (
    <div className="bg-[#B47E57] w-full max-w-[1440px] flex flex-col-reverse md:flex-col mx-auto w-full md:px-[112px] md:py-[55px] pt-5 pb-[34px] md:rounded-t-[34px] rounded-t-[28px] overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-start justify-between">
        <div className="md:w-[50%] text-center md:text-left">
          <span className="text-custom47 white-text-element md:text-[63px] text-[28.48px] lexend mt-[13px] md:mt-0 leading-[36px] font-medium md:leading-[79px] tracking-[0]">
            {data.textContent.heading}
          </span>
        </div>
        <div className="md:w-[50%] md:pl-10 mt-4 md:mt-0 flex flex-col items-center md:items-start">
          <span className="text-off-white-80 white-text-element lato text-[20.25px] tracking-[0] font-normal text-sm md:text-[20.25px] px-4 md:px-0 text-center md:text-left">
            {data.textContent.description}
          </span>
          <div className="flex justify-center md:justify-start mt-6 w-full">
            <button className="button1 button-hover border border-gray-transparent text-dark-gray pt-[6px] pr-[6px] pb-[6px] pl-[28px] md:py-[9px] md:pl-[28px] md:pr-[9px] rounded-full flex items-center md:gap-4 gap-3 mx-auto md:mx-0">
              <span className="font-bold tracking-[0] text-[16px] lato text-dark-gray">
                {data.textContent.buttonText}
              </span>
              <span className="flex items-center justify-center rounded-full">
                <img
                  src={buttonIcon}
                  alt="Arrow right"
                  loading="lazy"
                  width="40"
                  height="40"
                  className="cursor-pointer"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 md:mt-10">
        <img
          src={mobileImage}
          alt="Golden retriever with owner"
          loading="lazy"
          className="block md:hidden object-contain"
        />
        <img
          src={desktopImage}
          alt="Two dogs with owners connected by curved line"
          loading="lazy"
          className="hidden md:block object-contain"
        />
      </div>
    </div>
  );
};

export default WaggleHero;
