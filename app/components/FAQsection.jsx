import {useState} from 'react';


export default function FAQsection(productFAQ) {  

  const faqContent = {
    title: 'Your Questions, Answered',
    faqs: JSON.parse(productFAQ?.productFAQ),
  };
  
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto md:px-[112px] px-[16px] py-[48px]">
      <h2 className="lexend font-[500] text-[22px] leading-[100%] tracking-[-0.36px] md:text-center mb-[26px] md:mb-[24px] md:text-[36px] md:leading-[130%]">
        {faqContent.title}
      </h2>
      <div className="space-y-4 flex flex-col items-center max-w-[1216px] mx-auto">
        {faqContent.faqs.map((faq, index) => (
          <div
            key={index}
            className="p-[16px] w-full rounded-lg waggle-blue-bg cursor-pointer md:px-[24px]"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="lato  font-[500] text-[18px] leading-[124%] tracking-[0] text-dark-gray md:text-[20px] md:leading-[124%]">
                {faq.question}
              </h3>
              <span className="h-[30px] w-[30px] flex text-[24px]  text-dark-gray">
                {openIndex === index ? '−' : '+'}
              </span>
            </div>
            {openIndex === index && (
              <p className="md:mt-[28px] mt-[8px] max-w-[49rem] text-gray-700 lato font-normal text-[16px] leading-[144%] tracking-[0] md:text-[18px] md:leading-[144%]">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
