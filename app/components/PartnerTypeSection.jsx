const PartnerTypeSection = ({FindYourPartner}) => {
  const fields = FindYourPartner || [];
  const getValue = (key) =>
    fields.find((field) => field.key === key)?.value;

  const getReferenceImageUrl = (key) =>
    fields.find((field) => field.key === key)?.reference?.image?.url;

  const mainTitle = getValue('partnerprogram_find_your_partner_type_main_title');
  const imageNone1 = getReferenceImageUrl('partnerprogram_find_your_partner_type_image_node_1');
  const imageNone2 = getReferenceImageUrl('partnerprogram_find_your_partner_type_image_node_2');
  const imageNone3 = getReferenceImageUrl('partnerprogram_find_your_partner_type_image_node_3');
  const buttonImage = getReferenceImageUrl('partnerprogram_find_your_partner_type_button_icon');
  const partnerprogram_find_your_partner_type_typography_data = getValue('partnerprogram_find_your_partner_type_typography_data');


  const data = {
    images: {
      petAdvocateImage: imageNone1,
      resellerImage: imageNone2,
      brandsImage: imageNone3,
      arrowIcon: buttonImage,
    },
    textContent: {
      heading: mainTitle || "Find Your Partner Type"
    },
    partnerTypes: JSON.parse(partnerprogram_find_your_partner_type_typography_data),
  };
  return (
    <div className="md:py-[56px] py-[37px] some-class mx-auto">
      <h2 className="lexend text-dark-gray font-medium md:text-[47.37px] text-[28.48px] md:leading-[124%] leading-[100%] tracking-normal text-center md:mb-[28px] mb-[17px]">
        {data.textContent.heading}
      </h2>
      <div className="flex px-5 md:px-0 flex-col md:flex-row justify-center gap-[40px] max-w-6xl mx-auto custom-flex-30">
        {data.partnerTypes.map((partner) => (
          <div
            key={partner.id}
            className={`w-full md:flex-[0_0_34%] ${partner.backgroundColor} white-text-element md:rounded-[28px] rounded-[20px] md:p-[28px] p-[20px] flex flex-col`}
          >
            <div className={`md:mb-[28px] mb-[14px] flex justify-center`}>
              <img
                src={data.images[partner.image]}
                alt={partner.imageAlt}
                className="w-full max-w-none"
                loading="lazy"
              />
            </div>
            <div className="flex-grow">
              <h3 className="lexend center-on-mobile font-normal md:text-[28px] text-[20px] leading-[124%] tracking-normal mb-[8px]">
                {partner.title}
              </h3>
              <p className={`md:mb-[28px] ${partner.mobileMb} center-on-mobile text-off-white-80 lato font-normal md:text-[18px] text-[15.75px] leading-[144%] tracking-normal`}>
                {partner.description}
              </p>
            </div>
            <button className="button-hover btn-center-mobile main-bg-color text-dark-gray lato font-bold text-[16px] leading-[100%] tracking-normal pt-[8px] pr-[9px] pb-[8px] pl-[28px] rounded-[30px] border flex items-center transparent w-fit ">
              <span>{partner.buttonText}</span>
              <div className="ml-[15px] flex items-center justify-center">
                <img
                  src={data.images.arrowIcon}
                  alt="Arrow"
                  loading="lazy"
                  className="cursor-pointer"
                />
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerTypeSection;
