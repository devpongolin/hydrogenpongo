import React from 'react';

const ModernDog = ({CurrentPartner}) => {
  const fields = CurrentPartner || [];
  const getValue = (key) =>
    fields.find((field) => field.key === key)?.value;

  const getReferenceImageUrl = (key) =>
    fields.find((field) => field.key === key)?.reference?.image?.url;

  const TitleText = getValue('ambassador_current_partners_title');
  const ambassador_current_partners_image_1 = getReferenceImageUrl('ambassador_current_partners_image_1');
  const ambassador_current_partners_image_2 = getReferenceImageUrl('ambassador_current_partners_image_2');
  const ambassador_current_partners_image_3 = getReferenceImageUrl('ambassador_current_partners_image_3');
  const ambassador_current_partners_image_4 = getReferenceImageUrl('ambassador_current_partners_image_4');
  const ambassador_current_partners_image_5 = getReferenceImageUrl('ambassador_current_partners_image_5');
  const ambassador_current_partners_image_6 = getReferenceImageUrl('ambassador_current_partners_image_6');
  const ambassador_current_partners_image_7 = getReferenceImageUrl('ambassador_current_partners_image_7');

  const contentData = {
    heading: TitleText || "CURRENT PARTNERS"
  };
  
  const partnersData = [
    { id: 1, name: "Modern Dog Magazine", logo: ambassador_current_partners_image_1, alt: "Modern Dog Magazine" },
    { id: 2, name: "Travels with Delaney", logo: ambassador_current_partners_image_2, alt: "Travels with Delaney" },
    { id: 3, name: "Harvest Hosts", logo: ambassador_current_partners_image_3, alt: "Harvest Hosts" },
    { id: 4, name: "FMCA", logo: ambassador_current_partners_image_4, alt: "FMCA" },
    { id: 5, name: "Like There's No Tomorrow", logo: ambassador_current_partners_image_5, alt: "Like There's No Tomorrow" },
    { id: 6, name: "Dogster", logo: ambassador_current_partners_image_6, alt: "Dogster" },
    { id: 7, name: "Catster", logo: ambassador_current_partners_image_7, alt: "Catster" }
  ];


  return (
    <div className="w-full mx-auto py-[50px] px-[20px] md:py-[56px] md:px-[65px]">
      <h2 className="md:mb-[37px] mb-[16px] inter gray-medium text-center font-normal text-[14px] md:text-[16px] leading-[164%] tracking-[0] uppercase">
        {contentData.heading}
      </h2>
      <div className="flex flex-wrap justify-center gap-[22px] md:gap-[36px] max-w-[1280px] mx-auto w-full">
        {partnersData.map(({ id, logo, alt }) => (
          <div
            key={id}
            className="min-w-0 basis-[calc(33.333%-15px)] md:basis-auto flex justify-center"
          >
            <img
              src={logo}
              alt={alt}
              className="h-auto w-auto object-contain mx-auto"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModernDog;
