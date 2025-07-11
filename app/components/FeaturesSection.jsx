const FeaturesSection = ({ hydrogenFeaturesSectionData }) => {
  const getValue = (key) =>
    hydrogenFeaturesSectionData?.find((item) => item.key === key)?.value || "";

  const getImageUrl = (key) =>
    hydrogenFeaturesSectionData?.find((item) => item.key === key)?.reference?.image?.url || "";

  const hydrogen_features_section_text_1 = getValue("hydrogen_features_section_text_1");
  const hydrogen_features_section_text_2 = getValue("hydrogen_features_section_text_2");
  const hydrogen_features_section_text_3 = getValue("hydrogen_features_section_text_3");
  const hydrogen_features_section_text_4 = getValue("hydrogen_features_section_text_4");
  const hydrogen_features_section_image_1 = getImageUrl("hydrogen_features_section_image_1");
  const hydrogen_features_section_image_2 = getImageUrl("hydrogen_features_section_image_2");
  const hydrogen_features_section_image_3 = getImageUrl("hydrogen_features_section_image_3");
  const hydrogen_features_section_image_4 = getImageUrl("hydrogen_features_section_image_4");

  const features = [
    { icon: hydrogen_features_section_image_1, title: hydrogen_features_section_text_1 || 'Temperature alerts' },
    { icon: hydrogen_features_section_image_2, title: hydrogen_features_section_text_2 || 'Power failure detection' },
    { icon: hydrogen_features_section_image_3, title: hydrogen_features_section_text_3 || 'Security monitoring' },
    { icon: hydrogen_features_section_image_4, title: hydrogen_features_section_text_4 || 'Real-time check-ins' },
  ];

  return (
    <section className="w-full py-[55px]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:flex md:justify-between px-[12px] md:px-[0px] gap-y-[10px] md:gap-y-0">
          {features.map(({ icon, title }, index) => (
            <div
            key={index}
            className={`
              flex items-center justify-center gap-[15px]
              text-left relative
              ${index % 2 === 0 ? 'border-r-2 border-[#80808040]' : ''}
              md:w-[25%] md:text-center md:border-r-2 md:border-[#80808040]
              ${index === features.length - 1 ? 'md:border-none' : ''}
              ${index === 1 || index === 3 ? 'pl-[8px] md:pl-[0]' : ''}
            `}
          >
            <div className="rounded-full flex items-center justify-center">
              <img src={icon} alt={title} className="w-[40px] h-[40px] object-contain md:w-auto md:h-auto" />
            </div>
            <p className="text-[17px] md:text-[20px] text-gray-900 font-medium w-auto md:w-[45%] text-left">
              {title}
            </p>
          
            {/* Simulated bottom border (only on mobile, for 1st and 2nd items) */}
            {(index === 0 || index === 1) && (
              <div className="absolute top-[55px] left-0 w-full h-[1px] bg-[#80808040] md:hidden"></div>
            )}
          </div>
          
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
