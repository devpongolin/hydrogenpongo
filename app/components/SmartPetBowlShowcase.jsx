import React from "react";
import wifiSmartBowlImg from "../assets/Wi-Fi-connectedsmartbowl.webp";
import portimage from "../assets/portImg.webp";
import bowlBaseImg from "../assets/bowlBaseImg.webp";
import aiTrackingIcon from "../assets/aiTrackingIcon.webp";
import bowl450gImg from "../assets/bowl450gImg.webp";
import dogWithBowlImg from "../assets/dogWithBowlImg.webp";
import scheduleIcon from "../assets/scheduleIcon.webp";
import alertsIcon from "../assets/alertsIcon.webp";
import petSafeIcon from "../assets/petSafeIcon.webp";
import weightSensorIcon from "../assets/weightSensorIcon.webp";
import bowlShadowImg from "../assets/bowlShadowImg.webp";
import sideNotificationImg from "../assets/sideNotificationImg.webp";

const textContent = {
  title: "Smart. Effortless. Tailored to Your Pet's Needs.",
  leftColumn: {
    card1: {
      heading: "Wi-Fi-connected smart bowl",
      imageAlt: "Wi-Fi-connected smart bowl",
    },
    card2: {
      imageAlt: "Port image",
    },
    card3: {
      imageAlt: "Bowl base",
    },
  },
  middleColumn: {
    topCard: {
      iconAlt: "AI icon",
      heading: "AI-powered",
      paragraph: "nutrition pet food tracking",
    },
    bottomSection: {
      dogImageAlt: "Dog with bowl",
      scheduleCard: {
        iconAlt: "Schedule icon",
        heading: "Automatic pet feeding schedule",
      },
    },
    centerImage: {
      shadowAlt: "Shadow circle",
      bowlAlt: "450g Bowl",
    },
  },
  rightColumn: {
    topCard: {
      leftNotificationAlt: "Left notification",
      rightNotificationAlt: "Right notification",
      centerImageAlt: "Alert icon",
      paragraph: "Smart alerts & notifications",
    },
    middleCard: {
      iconAlt: "Pet safe icon",
      heading: "Pet-safe & easy to clean",
    },
    bottomCard: {
      iconAlt: "Sensor icon",
      paragraph: "Built-in weight sensor",
    },
  },
};

const SmartPetBowlShowcase = () => {
  return (
    <div className="px-4 py-8 md:px-[215px] md:py-[56px]">
      <div className="text-center mb-8 md:mb-[32px]">
        <h1 className="lexend medium text-2xl md:text-[36px] leading-[100%] mt-[9px] text-dark-gray px-4 md:px-0">
          {textContent.title}
        </h1>
      </div>
      <div className="hidden md:flex gap-[25px]">
        <div className="flex flex-col gap-[25px] h-full max-w-[246px]">
          <div className="primary-gradient white-text-element rounded-[21px] flex flex-col max-w-[233px]">
            <h2 className="max-w-[13rem] lato pt-[28px] px-[28px] font-semibold text-[28px] text-left white-text-element leading-tight">
              {textContent.leftColumn.card1.heading}
            </h2>
            <div className="pt-[17px]">
              <img
                src={wifiSmartBowlImg}
                alt={textContent.leftColumn.card1.imageAlt}
                className="rounded-[21px] max-w-[233px] w-full"
                loading="lazy"
              />
            </div>
          </div>
          <div className="bg-[#d1681d4b] rounded-[21px] max-w-[233px] w-full overflow-hidden">
            <img
              src={portimage}
              alt={textContent.leftColumn.card2.imageAlt}
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="bg-[#73a0b229] rounded-[21px] overflow-hidden max-w-[233px] h-[145px]">
            <img
              src={bowlBaseImg}
              alt={textContent.leftColumn.card3.imageAlt}
              className="h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[24px] h-full relative ">
          <div className="warm-radial-gradient max-w-[494.33px] max-h-[352.08px] pt-[22px] px-[37px] pb-[197px] white-text-element rounded-[20px] flex flex-col text-center">
            <img
              src={aiTrackingIcon}
              alt={textContent.middleColumn.topCard.iconAlt}
              className=" mx-auto"
              loading="lazy"
            />
            <h2 className="lexend font-normal text-[28px] leading-[112%]  white-text-element mt-[14px]">
              {textContent.middleColumn.topCard.heading}
            </h2>
            <p className=" white-text-element lexend font-normal text-[28px]">
              {textContent.middleColumn.topCard.paragraph}
            </p>
          </div>
          <div className="flex gap-[24px]">
            <div className="rounded-[21px] overflow-hidden w-[234.55px] max-h-[370px]">
              <img
                src={dogWithBowlImg}
                alt={textContent.middleColumn.bottomSection.dogImageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="primary-gradient white-text-element rounded-[20px] flex-1 flex flex-col items-start justify-center text-left pl-[28px] pr-[46px] pt-[165px] pb-[24px] w-full max-h-[370px] max-w-[234.55px]">
              <img
                src={scheduleIcon}
                alt={textContent.middleColumn.bottomSection.scheduleCard.iconAlt}
                className="mb-[27px]"
                loading="lazy"
              />
              <h2 className="lato font-semibold text-[28px] leading-[124%] tracking-[-0.01em] white-text-element ">
                {textContent.middleColumn.bottomSection.scheduleCard.heading}
              </h2>
            </div>
          </div>
          <div className="absolute top-[49%] left-[50%]">
            <div className="relative">
              <img
                src={bowlShadowImg}
                alt={textContent.middleColumn.centerImage.shadowAlt}
                className="absolute max-w-[421px] max-h-[396.75px] object-contain transform -translate-x-1/2 -translate-y-1/2"
                loading="lazy"
              />
              <img
                src={bowl450gImg}
                alt={textContent.middleColumn.centerImage.bowlAlt}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[421px] max-h-[396.75px] object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[25px] ">
          <div className="primary-gradient white-text-element rounded-[20px] flex flex-col items-center justify-center text-center w-full h-[295px] max-w-[232.94px] pl-[14px] pr-[14px] pt-[46px] pb-[88px] relative">
            <img
              src={sideNotificationImg}
              alt={textContent.rightColumn.topCard.leftNotificationAlt}
              className="absolute left-3  transform -translate-y-1/2  top-[59%]"
              loading="lazy"
            />
            <img
              src={sideNotificationImg}
              alt={textContent.rightColumn.topCard.rightNotificationAlt}
              className="absolute right-3 top-[59%] transform -translate-y-1/2"
              loading="lazy"
            />
            <img
              src={weightSensorIcon}
              alt={textContent.rightColumn.topCard.centerImageAlt}
              loading="lazy"
            />
            <p className="lato pt-[40px] font-bold text-[18px] leading-[100%] tracking-[0] white-text-element">
              {textContent.rightColumn.topCard.paragraph}
            </p>
          </div>
          <div className="brown-linear-radial-gradient white-text-element rounded-[21px] w-full max-w-[232.94px] h-[272px] flex flex-col pt-[24px] pl-[28px] pr-[28px] pb-[28px]">
            <img
              src={petSafeIcon}
              alt={textContent.rightColumn.middleCard.iconAlt}
              className="mb-[109px] w-[48px] h-[48px]"
            />
            <h2 className="lato font-semibold text-[28px] leading-[100%] tracking-[-0.01em] white-text-element ">
              {textContent.rightColumn.middleCard.heading}
            </h2>
          </div>
          <div className="primary-gradient w-full max-w-[232.94px] white-text-element rounded-[21px] h-[127px] flex pt-[45px] pl-[30px] pr-[30px] pb-[42px] gap-[12px]">
            <img
              src={alertsIcon}
              alt={textContent.rightColumn.bottomCard.iconAlt}
              className="w-[40px] h-[40px]"
              loading="lazy"
            />
            <p className="lato font-medium text-[18px] leading-[100%] tracking-normal white-text-element">
              {textContent.rightColumn.bottomCard.paragraph}
            </p>
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col gap-6 relative">
        <div className="flex flex-col gap-6">
          <div className="warm-radial-gradient pt-6  pb-8 w-[320px] h-[227px] white-text-element rounded-[20px] flex flex-col text-center mx-auto">
            <img
              src={aiTrackingIcon}
              alt={textContent.middleColumn.topCard.iconAlt}
              className="mx-auto w-12 h-12"
              loading="lazy"
            />
            <h2 className="lexend font-normal text-xl leading-[112%] white-text-element mt-4">
              {textContent.middleColumn.topCard.heading}
            </h2>
            <p className="white-text-element lexend font-normal text-xl">
              {textContent.middleColumn.topCard.paragraph}
            </p>
          </div>
          <div className="flex gap-4 justify-center">
            <div className="rounded-[15px] overflow-hidden">
              <img
                src={dogWithBowlImg}
                alt={textContent.middleColumn.bottomSection.dogImageAlt}
                className="w-full max-w-[152px] h-[237px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-[152px] h-[237px] primary-gradient white-text-element rounded-[20px] flex flex-col items-center justify-center text-center p-4">
              <img
                src={scheduleIcon}
                alt={textContent.middleColumn.bottomSection.scheduleCard.iconAlt}
                className="w-8 h-8 mb-2"
                loading="lazy"
              />
              <h2 className="lato font-semibold text-sm leading-tight white-text-element text-center">
                {textContent.middleColumn.bottomSection.scheduleCard.heading}
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 justify-center">
            <div className="primary-gradient white-text-element rounded-[20px] h-[240px] w-[160px] p-4">
              <h2 className="lato font-semibold text-lg text-left white-text-element leading-tight mb-4">
                {textContent.leftColumn.card1.heading}
              </h2>
              <img
                src={wifiSmartBowlImg}
                alt={textContent.leftColumn.card1.imageAlt}
                className="rounded-[15px] w-full"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-[#d1681d4b] rounded-[15px] overflow-hidden w-[152.83px] h-[128.33px]">
                <img
                  src={portimage}
                  alt={textContent.leftColumn.card2.imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>  
              <div className="bg-[#73a0b229] rounded-[15px] overflow-hidden w-[152px] h-[95px]">
                <img
                  src={bowlBaseImg}
                  alt={textContent.leftColumn.card3.imageAlt}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <div className="flex flex-col gap-4">
              <div className="brown-linear-radial-gradient white-text-element rounded-[15px] p-4 flex flex-col justify-between w-[126.18px] h-[147.34px]">
                <img
                  src={petSafeIcon}
                  alt={textContent.rightColumn.middleCard.iconAlt}
                  className="w-8 h-8 mb-4"
                />
                <h2 className="lato font-semibold text-sm leading-tight white-text-element">
                  {textContent.rightColumn.middleCard.heading}
                </h2>
              </div>
              <div className="primary-gradient white-text-element rounded-[15px] p-4 flex items-center gap-3 w-[126.18px] h-[70.07px]">
                <img
                  src={weightSensorIcon}
                  alt={textContent.rightColumn.bottomCard.iconAlt}
                  className="w-6 h-6"
                  loading="lazy"
                />
                <p className="lato font-medium text-sm white-text-element">
                  {textContent.rightColumn.bottomCard.paragraph}
                </p>
              </div>
            </div>
            <div className="w-[181.36px] h-[229.68px] primary-gradient white-text-element rounded-[20px] flex flex-col items-center justify-center text-center p-4 relative">
              <img
                src={sideNotificationImg}
                alt={textContent.rightColumn.topCard.leftNotificationAlt}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-8"
                loading="lazy"
              />
              <img
                src={sideNotificationImg}
                alt={textContent.rightColumn.topCard.rightNotificationAlt}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-8"
                loading="lazy"
              />
              <img
                src={alertsIcon}
                alt={textContent.rightColumn.topCard.centerImageAlt}
                className="mx-auto w-10 h-10 mb-4"
                loading="lazy"
              />
              <p className="lato font-bold text-sm leading-tight white-text-element">
                {textContent.rightColumn.topCard.paragraph}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-[24%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <img
              src={bowlShadowImg}
              alt={textContent.middleColumn.centerImage.shadowAlt}
              className="w-[200px] h-[200px] object-contain"
              loading="lazy"
            />
            <img
              src={bowl450gImg}
              alt={textContent.middleColumn.centerImage.bowlAlt}
              className="absolute top-0 left-0 w-[200px] h-[200px] object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartPetBowlShowcase;