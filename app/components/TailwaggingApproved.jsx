import React from "react";

const Tailwaggingapproved = ({waggingApproved}) => {
  const fields = waggingApproved || [];
  const getValue = (key) =>
    fields.find((field) => field.key === key)?.value;

  const getReferenceImageUrl = (key) =>
    fields.find((field) => field.key === key)?.reference?.image?.url;


  const mainTitle = getValue('aboutus_wagging_approved_main_title');
  const firstCardTitle = getValue('aboutus_wagging_approved_first_card_title');
  const firstCardImage = getReferenceImageUrl('aboutus_wagging_approved_first_card_image');

  const secondCardTitle = getValue('aboutus_wagging_approved_second_card_title');
  const secondLeftCardImage = getReferenceImageUrl('aboutus_wagging_approved_second_card_left_image');
  const secondMidCardImage = getReferenceImageUrl('aboutus_wagging_approved_second_card_mid_image');
  const secondRightCardImage = getReferenceImageUrl('aboutus_wagging_approved_second_card_right_image');

  const data = {
    images: {
      certification: firstCardImage,
      rv: secondLeftCardImage,
      fmca: secondMidCardImage,
      appa: secondRightCardImage
    },
    textContent: {
      title: mainTitle || "Tested, Trusted, Tail-Wagging Approved.",
      certificationLabel: "CERTIFICATION",
      membershipLabel: "MEMBERSHIP"
    },
    sections: [
      {
        type: "certification",
        label: firstCardTitle || "CERTIFICATION",
        logos: ["certification"]
      },
      {
        type: "membership",
        label: secondCardTitle || "MEMBERSHIP",
        logos: ["rv", "fmca", "appa"]
      }
    ]
  };


  return (
    <div className="w-full mx-auto pt-[18px] pb-[38px] md:py-[48px] md:px-[112px]">
        <h2 className="text-center text-dark-gray pl-[15.5px] pr-[15.5px] md:text-[47.37px] text-[28px] leading-[124%] tracking-[0] lexend font-medium">
          {data.textContent.title}
        </h2>
        <div className="flex flex-col pl-5 pr-5 md:px-[0] md:flex-col xl:flex-row gap-4 md:gap-8 xl:gap-[40px] justify-center mt-4 md:mt-7">
          {data.sections.map((section, index) => {
            const isCertification = section.type === "certification";

            const boxClasses = isCertification
              ? "md:pt-10 md:pb-[47px] md:px-[119px] pt-5 pb-5 pl-[65px] pr-[65px]"
              : "md:pt-10 md:pb-[47px] md:px-[127px] pt-[19px] pb-5";

            const textMarginClass = isCertification
              ? "mt-[1px] mr-[8px] md:mt-0 md:mr-0"
              : "mt-[5px] md:mt-0 md:mr-0";

            const logoWrapperClass = isCertification
              ? "flex justify-center mt-6 md:mt-6 xl:mt-[31px]"
              : "flex flex-row justify-center items-center mt-[19px] md:mt-6 xl:mt-[31px] gap-4 md:gap-4 xl:gap-5";
            return (
              <div
                key={index}
                className={`bg-white shadow-md rounded-[24px] ${boxClasses}`}
              >
                <p
                  className={`font-normal uppercase gray-medium text-center inter md:text-[16px] text-[14px] leading-[164%] tracking-[0] ${textMarginClass}`}
                >
                  {section.label}
                </p>
                <div className={logoWrapperClass}>
                  {section.logos.map((logo, logoIndex) => {
                    const logoKey = logo.toLowerCase();
                    const logoSrc = data.images[logoKey];

                    const maxWidthClass = isCertification
                      ? "max-w-[180px] md:max-w-[160px] xl:max-w-none mt-[-7px] md:mt-0"
                      : "max-w-[93.44px] md:max-w-[80px] xl:max-w-none";

                    return logoSrc ? (
                      <img
                        key={logoIndex}
                        src={logoSrc}
                        alt={`${logoKey} Logo`}
                        loading="lazy"
                        className={`h-auto object-contain ${maxWidthClass}`}
                      />
                    ) : (
                      <span key={logoIndex} className="text-sm">
                        Logo not found: {logo}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default Tailwaggingapproved;
