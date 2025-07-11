import { useState } from "react";

const SmartPetHaven = ({HydrogenSmartPetHavenData}) => {

    const getValue = (key) =>
        HydrogenSmartPetHavenData?.find((item) => item.key === key)?.value || "";

    const getImageUrl = (key) =>
        HydrogenSmartPetHavenData?.find((item) => item.key === key)?.reference?.image?.url || "";
    const hydrogen_smart_pet_haven_title_main = getValue("hydrogen_smart_pet_haven_title_main");
    const hydrogen_smart_pet_haven_description_main = getValue("hydrogen_smart_pet_haven_description_main");
    const hydrogen_smart_pet_haven_button_1 = getValue("hydrogen_smart_pet_haven_button_1");
    const hydrogen_smart_pet_haven_button_2 = getValue("hydrogen_smart_pet_haven_button_2");
    const hydrogen_smart_pet_haven_button_3 = getValue("hydrogen_smart_pet_haven_button_3");
    const hydrogen_smart_pet_haven_desktop_img_1 = getImageUrl("hydrogen_smart_pet_haven_desktop_img_1");
    const hydrogen_smart_pet_haven_desktop_img_2 = getImageUrl("hydrogen_smart_pet_haven_desktop_img_2");
    const hydrogen_smart_pet_haven_desktop_img_3 = getImageUrl("hydrogen_smart_pet_haven_desktop_img_3");
    const hydrogen_smart_pet_haven_mobile_img_1 = getImageUrl("hydrogen_smart_pet_haven_mobile_img_1");
    const hydrogen_smart_pet_haven_mobile_img_2 = getImageUrl("hydrogen_smart_pet_haven_mobile_img_2");
    const hydrogen_smart_pet_haven_mobile_img_3 = getImageUrl("hydrogen_smart_pet_haven_mobile_img_3");
    

  const [activeButton, setActiveButton] = useState(0);

  const buttonData = [
    {
      label: hydrogen_smart_pet_haven_button_1 || "Living Room",
      imageDesktop: hydrogen_smart_pet_haven_desktop_img_1,
      imageMobile: hydrogen_smart_pet_haven_mobile_img_1
    },
    {
      label: hydrogen_smart_pet_haven_button_2 || "Kitchen",
      imageDesktop: hydrogen_smart_pet_haven_desktop_img_2,
      imageMobile: hydrogen_smart_pet_haven_mobile_img_2
    },
    {
      label: hydrogen_smart_pet_haven_button_3 || "Pet Area",
      imageDesktop: hydrogen_smart_pet_haven_desktop_img_3,
      imageMobile: hydrogen_smart_pet_haven_mobile_img_3
    }
  ];

  const handleClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-[1230px] w-full mx-auto p-[16px]">
      <span className="text-gray-800 mb-8 text-center lexend text-[28px] md:text-[47px] max-w-[479px] font-medium">
        {hydrogen_smart_pet_haven_title_main}
      </span>
      <span className="font-bold text-gray-800 mb-8 text-center lexend text-[14px] md:text-[20px]">
        {hydrogen_smart_pet_haven_description_main}
      </span>

      {/* Buttons */}
      <div className="flex justify-center gap-[9px] bg-[#EEDED3] p-[4px] md:p-[9px] rounded-[77px] mb-[15px] md:mb-[28px]">
        {buttonData.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`rounded-full transition-all duration-300 px-[8px] py-[10px] md:px-[56px] md:py-[18px] ${
              activeButton === index
                ? "bg-[#B47E57] text-white"
                : "text-[#202124]"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Image */}
      <div className="w-full rounded-3xl bg-white">
        <picture>
          <source
            media="(max-width: 500px)"
            srcSet={buttonData[activeButton].imageMobile}
          />
          <img
            src={buttonData[activeButton].imageDesktop}
            alt={buttonData[activeButton].label}
            className="w-full"
          />
        </picture>
      </div>
    </div>
  );
};

export default SmartPetHaven;
