const SponsorshipForEvents = ({AmbassadorClaimYourPerksToday}) => {
  const fields = AmbassadorClaimYourPerksToday || [];
  const getValue = (key) =>
    fields.find((field) => field.key === key)?.value;

  const getReferenceImageUrl = (key) =>
    fields.find((field) => field.key === key)?.reference?.image?.url;

  const ambassador_claim_your_perks_today_image_1 = getReferenceImageUrl('ambassador_claim_your_perks_today_image_1');
  const ambassador_claim_your_perks_today_image_2 = getReferenceImageUrl('ambassador_claim_your_perks_today_image_2');
  const ambassador_claim_your_perks_today_image_3 = getReferenceImageUrl('ambassador_claim_your_perks_today_image_3');
  const ambassador_claim_your_perks_today_title_1 = getValue('ambassador_claim_your_perks_today_title_1');
  const ambassador_claim_your_perks_today_title_2 = getValue('ambassador_claim_your_perks_today_title_2');
  const ambassador_claim_your_perks_today_title_3 = getValue('ambassador_claim_your_perks_today_title_3');
  const ambassador_claim_your_perks_today_sub_title_1 = getValue('ambassador_claim_your_perks_today_sub_title_1');
  const ambassador_claim_your_perks_today_sub_title_2 = getValue('ambassador_claim_your_perks_today_sub_title_2');
  const ambassador_claim_your_perks_today_button_text_1 = getValue('ambassador_claim_your_perks_today_button_text_1');
  const ambassador_claim_your_perks_today_button_text_2 = getValue('ambassador_claim_your_perks_today_button_text_2');

  const sponsorshipData = {
    topCards: [
      {
        id: 1,
        image: ambassador_claim_your_perks_today_image_1,
        alt: "Woman with laptop and golden retriever",
        title: ambassador_claim_your_perks_today_title_1 || "Other Ways to Help",
        description: ambassador_claim_your_perks_today_sub_title_1 || "Not ready to become an ambassador? Explore our Partner Program to see other ways to make an impact and help pets stay safe.",
        button: {
          text: ambassador_claim_your_perks_today_button_text_1 || "Become a Partner",
          action: "partner"
        }
      },
      {
        id: 2,
        image: ambassador_claim_your_perks_today_image_2,
        alt: "Dogs at a pet show",
        title: ambassador_claim_your_perks_today_title_2 || "Sponsorship for Events & Pet Shows",
        description: ambassador_claim_your_perks_today_sub_title_2 || "Get the chance to showcase Waggle at top pet events and shows, expanding your reach while sharing our mission with pet lovers everywhere.",
        button: null
      }
    ],
    bottomCard: {
      image: ambassador_claim_your_perks_today_image_3,
      alt: "Woman high-fiving a golden retriever",
      title: ambassador_claim_your_perks_today_title_3 || "Claim Your Perks Today",
      button: {
        text: ambassador_claim_your_perks_today_button_text_2 || "Become An Ambassador",
        action: "ambassador"
      }
    }
  };


  return (
    <div className="md:pt-[56px] md:pb-[56px] md:pl-[114px] md:pr-[114px] image-padding pl-[15px] pr-[15px] pt-[34px] pb-[38px]">
      <div className="flex flex-col md:flex-row w-full gap-[16px] md:gap-[40px] md:mb-[40px] mb-[14px] justify-center">
        {sponsorshipData.topCards.map((card) => (
          <div key={card.id} className="w-full md:w-[586px] h-[440px] md:h-[580px] md:rounded-[40px] bg-gray-fade rounded-[20px] border overflow-hidden white-text-element relative">
            <img
              src={card.image}
              alt={card.alt}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className={`relative flex flex-col image-responsive-padding my-element h-full p-[19px] md:pt-[62px] md:pl-[62px] ${card.id === 1 ? 'md:pr-[183px]' : 'pr-[21px]'} `}>
              <h2 className={`font-medium text-[25.31px] md:text-[35.54px] leading-[40px] md:leading-[120%] tracking-[-0.5px] md:tracking-[-0.36px] lexend ${card.id === 1 ? 'mb-[12px]' : 'mb-[13px]'} ${card.id === 2 ? 'md:max-w-[26rem]' : ''}`}>
                {card.title}
              </h2>
              <p className={`${card.id === 1 ? 'mb-[18px]' : 'mb-6'} max-w-[17rem] md:max-w-none font-medium text-[17.78px] md:text-[20.25px] leading-[1.44] tracking-[-0.36px] lato`}>
                {card.description}
              </p>
              {card.button && (
                <button className="button2 cursor-pointer button-hover2 w-[207px] lato text-[18px] leading-[100%] tracking-[0] font-medium md:pt-[19px] pr-[32px] md:pb-[18px] pl-[32px] pt-[15px] pb-[15px] rounded-[100px] ">
                  {card.button.text}
                </button>
              )}
            </div>
          </div>
        ))}
      </div> 
      <div className="w-full md:max-w-[1216px]  mx-auto h-[530px] md:h-[440px] rounded-[40px] border bg-gray-fade overflow-hidden relative white-text-element">
        <img
          src={sponsorshipData.bottomCard.image}
          alt={sponsorshipData.bottomCard.alt}
          className="inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-0 w-full gradient-fade md:left-fade-bg flex flex-col h-full justify-end md:justify-start md:pl-[104px] md:pt-[123px] pl-[30px] pr-[30px] pb-[36px]">
          <div className="max-w-md">
            <h2 className="font-medium md:text-[48px] text-[28.48px] leading-[121%] tracking-[-0.36px] lexend md:max-w-[18rem] max-w-[12rem]">
              {sponsorshipData.bottomCard.title}
            </h2>
            <button className="button2 button-hover2 cursor-pointer white-text-element lato text-[18px] leading-[100%] tracking-[0] font-medium md:pt-[22px] pr-[32px] md:pb-[21px] pl-[32px] rounded-[100px] pt-[13px] pb-[13px] mt-4">
              {sponsorshipData.bottomCard.button.text}
            </button> 
          </div>
        </div>
      </div>    
    </div>
  );
};

export default SponsorshipForEvents;