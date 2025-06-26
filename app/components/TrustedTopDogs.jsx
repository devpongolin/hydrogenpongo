const ModernDog = ({TrustByDog}) => {
  const fields = TrustByDog || [];
  const getValue = (key) =>
    fields.find((field) => field.key === key)?.value;

  const getReferenceImageUrl = (key) =>
    fields.find((field) => field.key === key)?.reference?.image?.url;

  const mainTitle = getValue('partnerprogram_trusted_by_top_dogs_title');
  const imageNone1 = getReferenceImageUrl('partnerprogram_trusted_by_top_dogs_image_1');
  const imageNone2 = getReferenceImageUrl('partnerprogram_trusted_by_top_dogs_image_2');
  const imageNone3 = getReferenceImageUrl('partnerprogram_trusted_by_top_dogs_image_3');
  const imageNone4 = getReferenceImageUrl('partnerprogram_trusted_by_top_dogs_image_4');
  const imageNone5 = getReferenceImageUrl('partnerprogram_trusted_by_top_dogs_image_5');
  const imageNone6 = getReferenceImageUrl('partnerprogram_trusted_by_top_dogs_image_6');
  const imageNone7 = getReferenceImageUrl('partnerprogram_trusted_by_top_dogs_image_7');

  const contentData = {
    heading: mainTitle || "Trusted by Top Dogs"
  };
  
  const partnersData = [
    { id: 1, name: "Modern Dog Magazine", logo: imageNone1, alt: imageNone1 },
    { id: 2, name: "Travels with Delaney", logo: imageNone2, alt: imageNone2 },
    { id: 3, name: "Harvest Hosts", logo: imageNone3, alt: imageNone3 },
    { id: 4, name: "FMCA", logo: imageNone4, alt: imageNone4 },
    { id: 5, name: "Like There's No Tomorrow", logo: imageNone5, alt: imageNone5 },
    { id: 6, name: "Dogster", logo: imageNone6, alt: imageNone6 },
    { id: 7, name: "Catster", logo: imageNone7, alt: imageNone7 }
  ];


  return (
    <div className="w-full mx-auto pt-[40px] pb-[50px] px-[20px] md:py-[56px] md:px-[65px]">
      <h2 className="md:mb-[37px] mb-[16px] inter gray-medium text-center font-normal text-[14px] md:text-[16px] leading-[164%] tracking-[0] uppercase">
        {contentData.heading}
      </h2>
      <div className="flex flex-wrap gap-[22px] md:hidden justify-center">
        {partnersData.map(({ id, logo, alt }) => (
          <div key={id} className="min-w-0 basis-[calc(33.333%-15px)] flex justify-center">
            <img
              src={logo}
              alt={alt}
              className="h-auto w-auto mx-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="hidden md:flex md:flex-wrap md:justify-center md:gap-[36px]">
        {partnersData.map(({ id, logo, alt }) => (
          <img
            key={id}
            src={logo}
            alt={alt}
            className="h-auto w-auto object-contain"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default ModernDog;
