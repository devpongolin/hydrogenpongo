import React, { useState, useEffect } from 'react';



const Certifiedtocare = (metaData) => {
  const fields =
  metaData?.metaData?.aboutUsCertifiedCare?.aboutUsDatas?.metaobjects?.edges?.[0]?.node?.fields || [];
  const getValue = (key) =>
    fields.find((field) => field.key === key)?.value;

  const getReferenceImageUrl = (key) =>
    fields.find((field) => field.key === key)?.reference?.image?.url;


  const mainTitle = getValue('aboutus_certified_to_care_title');
  const buttonTitle = getValue('aboutus_certified_to_care_button');
  const desktopImage = getReferenceImageUrl('aboutus_certified_to_care_image');
  const mobileImage = getReferenceImageUrl('aboutus_certified_to_care_image_mobile');




  const data = {
    images: {
      hero: {
        desktop: desktopImage,
        mobile: mobileImage,
      },
    },
    textContent: {
      title: mainTitle || "Certified\nto Care",
      buttonText: buttonTitle || "Partner with Us",
    },
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const titleLines = data.textContent.title.split('\n');

  return (
    <div className="w-full max-w-[1440px] px-[20px] py-[36px] md:py-[63px] relative overflow-hidden rounded-[40px]  
    md:px-[112px] mx-auto">
      <img
        src={isMobile ? data.images.hero.mobile : data.images.hero.desktop}
        alt="Hero"
        className="w-full h-auto object-cover rounded-[40px]"
        loading="lazy"
      />
      <div className="justify-end px-[36px] py-[20px] bottom-[36px] md:pl-[104px] absolute inset-0 max-w-md flex flex-col  md:justify-center md:text-left md:left-[5%]">
        <span className="text-[28px] md:text-[48px] font-medium white-text-element lexend md:leading-[60px] leading-[139%] mb-[10px] md:mb-[17px]">
          {titleLines.map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < titleLines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </span>
        <button className="w-[190px] button2 button-hover2 light-cream p-4 md:pt-[19px] pr-[32px] md:pb-[22px] pl-[32px] pt-[16px] pb-[13px] rounded-[100px] text-base lato font-bold text-[18px] leading-[100%] tracking-[0]">
          {data.textContent.buttonText}
        </button>
      </div>
    </div>  
  );
};

export default Certifiedtocare;