import { useState } from 'react';
import { ChevronDown } from 'lucide-react';


export default function WaggleSteps(waggleGuide) {
const waggleGuideRaw = waggleGuide?.waggleGuide || [];
const mainTitle = 'Takes 2 Minutes.';
const subTitle = 'Saves a Lifetime of Stress.';

let parsedGuide = waggleGuideRaw.map((item, index, arr) => {
  const fields = item.node.fields;

  const getValue = (key) => fields.find(f => f.key === key)?.value;
  const getImage = () => fields.find(f => f.key === 'waggle_guide_file')?.reference?.image?.url;

  const stepPosition = getValue("step_position");
  const number = stepPosition.padStart(2, "0");

  const title = getValue("waggle_mobile_text");
  const fullTitle = getValue("waggle_guide_text");
  const image = getImage();

  // Build box1, box2, box3
  const boxes = {};
  arr.forEach((step, i) => {
    const stepFields = step.node.fields;
    const pos = stepFields.find(f => f.key === "step_position")?.value;
    const txt = stepFields.find(f => f.key === "closed_text")?.value;
    const stepNum = pos.padStart(2, "0");
    const boxKey = `box${parseInt(pos)}`;

    if (pos !== stepPosition) {
      boxes[boxKey] = { number: stepNum, text: txt };
    }
  });

  return {
    number,
    title,
    fullTitle,
    image,
    ...boxes
  };
});

parsedGuide.sort((a, b) => parseInt(a.number) - parseInt(b.number));


  const content = {
    header: {
      title1: mainTitle || "Takes 2 Minutes.",
      title2: subTitle || "Saves a Lifetime of Stress."
    },
    steps: parsedGuide,
  };
  
  
  const [activeStep, setActiveStep] = useState(0);
  const [expandedStep, setExpandedStep] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  const toggleStep = (stepIndex) => {
    setExpandedStep(expandedStep === stepIndex ? -1 : stepIndex);
  };

  const Box = ({ box, stepIndex }) => (
    <div className="flex justify-center items-center lg:flex-shrink-0">
      <button
        className={`cursor-pointer waggle-blue-bg w-full max-w-[150px] rounded-[20px] border border-transparent pt-[52px] px-[47px] pb-[71px] h-full flex flex-col items-center justify-between 
        ${activeStep === stepIndex ? 'bg-blue-600 text-white' : ''}`}
        onClick={() => {
          setActiveStep(stepIndex);
          setAutoRotate(false);
        }}
      >
        <span className="lato font-[400] text-[48px] leading-[100%] tracking-[0] dark-overlay mb-4">{box.number}</span>
        <span className="lexend font-[400] text-[20px] leading-[100%] tracking-[0] dark-overlay">{box.text}</span>
      </button>
    </div>
  );

  return (
    <div className="max-w-[1440px] w-full mx-auto bg-[#D6EAFF] md:bg-blue-50">
      <div className="lg:px-4 px-[20px]">
        <div className="text-center pt-[48px] lg:pt-18 mb-[14px] lg:mb-[28px]">
          <span className="lexend font-medium md:text-[36px] leading-[100%] text-[20px] tracking-[-0.36px] text-gray-800 ">
            {content.header.title1} 
          </span>
          <h2 className="lexend font-medium md:text-[36px] text-[20px] tracking-[-0.36px] text-gray-800">
            {content.header.title2} 
          </h2>
        </div>  

        <div className="space-y-5 lg:space-y-0 lg:pb-[64px] pb-[48px]">
          {content.steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row">
              <button
                className="lg:hidden w-full text-left bg-white rounded-xl p-[20px]"
                onClick={() => toggleStep(index)}
              >
                <div className="flex items-center justify-between mb-[16px]">
                  <span className="custom-dark lexend font-normal text-[20px] leading-[100%] tracking-[0]">
                    {step.title}
                  </span>
                  <ChevronDown
                    className={`text-gray-400 transition-transform duration-200 ${expandedStep === index ? 'rotate-180' : ''}`}
                  />
                </div>
                {expandedStep === index && (
                  <div className="flex justify-center items-center">
                    <img
                      src={step.image}
                      alt={step.fullTitle || step.title}
                      className="rounded-[12px]"
                    />
                  </div>
                )}
              </button>
              {typeof window !== 'undefined' && window.outerWidth >= 1023 && activeStep === index && (
                <div className="flex flex-col lg:flex-row gap-5 w-full transition-all duration-300">
                  {index === 1 && (
                    <div className="hidden lg:flex justify-center lg:flex-shrink-0">
                      <Box box={content.steps[1].box1} stepIndex={0} />
                    </div>
                  )}
                  {index === 2 && (
                    <>
                      <div className="hidden lg:flex justify-center lg:flex-shrink-0">
                        <Box box={content.steps[2].box1} stepIndex={0} />
                      </div>
                      <div className="hidden lg:flex justify-center lg:flex-shrink-0">
                        <Box box={content.steps[2].box2} stepIndex={1} />
                      </div>
                    </>
                  )}
                  <button
                    className="waggle-blue-bg w-full max-w-full lg:max-w-[876px] border border-transparent flex rounded-[20px] flex-col lg:flex-row gap-[27px]"
                    onClick={() => {
                      setActiveStep(index);
                      setAutoRotate(false);
                    }}
                  >
                    <div className="pt-5 pb-5 pl-5">
                      <img
                        src={step.image}
                        alt={step.fullTitle || step.title}
                        className="max-w-none rounded-[23px]"
                      />
                    </div>
                    <div className="hidden lg:flex flex-col pt-[60px] lg:pt-[232px] pr-6">
                      <span className="lato font-normal text-5xl leading-none tracking-normal dark-overlay mb-[40px]">
                        {step.number}
                      </span>
                      <h3 className="lexend font-normal text-[24px] lg:text-[39px] leading-none tracking-normal text-dark-gray mb-[58px]">
                        {step.fullTitle || step.title}
                      </h3>
                      <div className="w-50 h-1 blue-400 rounded"></div>
                    </div>
                  </button>
                  {index === 0 && (
                    <>
                      <div className="hidden lg:flex justify-center lg:flex-shrink-0">
                        <Box box={content.steps[0].box2} stepIndex={1} />
                      </div>
                      <div className="hidden lg:flex justify-center lg:flex-shrink-0">
                        <Box box={content.steps[0].box3} stepIndex={2} />
                      </div>
                    </>
                  )}
                  {index === 1 && (
                    <div className="hidden lg:flex justify-center lg:flex-shrink-0">
                      <Box box={content.steps[1].box3} stepIndex={2} />
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>  
    </div>
  );
}
