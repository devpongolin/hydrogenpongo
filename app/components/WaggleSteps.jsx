import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import step1 from '../assets/step1-setup-bowl.webp';
import step2 from '../assets/step2-connect-app.webp';
import step3 from '../assets/step3-monitor-nutrition.webp';

const content = {
  header: {
    title1: "Takes 2 Minutes.",
    title2: "Saves a Lifetime of Stress."
  },
  steps: [
    {
      number: "01",
      title: "Install the Waggle pet temperature monitoring system",
      fullTitle: "Set Up the Smart AI Bowl",
      image: step1,
      box2: { number: "02", text: "Connect" },
      box3: { number: "03", text: "Monitor" }
    },
    {
      title: "Connect to the Waggle App",
      image: step2,
      box1: { number: "01", text: "Install" },
      number: "02",
      box3: { number: "03", text: "Monitor" }
    },
    {
      title: "Stay Informed, Stay Safe",
      fullTitle: "Monitor Pet Food and Nutrition",
      image: step3,
      box1: { number: "01", text: "Install" },
      box2: { number: "02", text: "Connect" },
      number: "03"
    }
  ]
};

export default function WaggleSteps() {
  const [activeStep, setActiveStep] = useState(0);
  const [expandedStep, setExpandedStep] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoRotate]);

  const toggleStep = (stepIndex) => {
    setExpandedStep(expandedStep === stepIndex ? -1 : stepIndex);
  };

  const Box = ({ box, stepIndex }) => (
    <div className="flex justify-center items-center lg:flex-shrink-0">
      <div
        className={`cursor-pointer waggle-blue-bg w-full max-w-[150px] rounded-[20px] border border-transparent pt-[52px] px-[47px] pb-[71px] h-full flex flex-col items-center justify-between 
        ${activeStep === stepIndex ? 'bg-blue-600 text-white' : ''}`}
        onClick={() => {
          setActiveStep(stepIndex);
          setAutoRotate(false);
        }}
      >
        <span className="lato font-[400] text-[48px] leading-[100%] tracking-[0] dark-overlay mb-4">{box.number}</span>
        <span className="lexend font-[400] text-[20px] leading-[100%] tracking-[0] dark-overlay">{box.text}</span>
      </div>
    </div>
  );

  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center pt-8 lg:pt-18 mb-7 lg:mb-[28px] lg:mr-16">
          <h1 className="font-medium text-2xl lg:text-[35.54px] leading-tight lg:leading-none text-gray-800 mb-2">
            {content.header.title1}
          </h1>
          <h2 className="font-medium text-2xl lg:text-[35.54px] leading-tight lg:leading-none text-gray-800">
            {content.header.title2}
          </h2>
        </div>
        <div className="lg:hidden space-y-4 pb-16">
          {content.steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggleStep(index)}
                className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
              >
                <span className="text-gray-600 text-lg font-normal">
                  {step.title}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    expandedStep === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedStep === index && (
                <div className="px-6 pb-6">
                  <div className="bg-gray-100 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-center">
                      <img
                        src={step.image}
                        alt={step.fullTitle || step.title}
                        className="max-w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:block">
          {activeStep === 0 && (
            <div className="flex pb-[64px] flex-col lg:flex-row gap-5">
              <div className="waggle-blue-bg w-full max-w-[876px] border border-transparent flex rounded-[20px] flex-col lg:flex-row gap-[27px]">
                <div className="rounded-[23px] pt-5 pb-5 pl-5">
                  <img src={content.steps[0].image} alt="Smart AI Bowl Setup" className="max-w-none" />
                </div>
                <div className="flex flex-col pt-[232px] pr-6">
                  <span className="lato font-normal text-5xl leading-none tracking-normal dark-overlay mb-[40px]">{content.steps[0].number}</span>
                  <h3 className="lexend font-normal text-[39px] leading-none tracking-normal text-dark-gray mb-[58px]">{content.steps[0].fullTitle}</h3>
                  <div className="w-50 h-1 blue-400 rounded"></div>
                </div>
              </div>
              <Box box={content.steps[0].box2} stepIndex={1} />
              <Box box={content.steps[0].box3} stepIndex={2} />
            </div>
          )}
          {activeStep === 1 && (
            <div className="flex pb-[64px] flex-col lg:flex-row gap-5">
              <Box box={content.steps[1].box1} stepIndex={0} />
              <div className="waggle-blue-bg w-full max-w-[876px] border border-transparent flex rounded-[20px] flex-col lg:flex-row gap-[27px]">
                <div className="rounded-[23px] pt-5 pb-5 pl-5">
                  <img src={content.steps[1].image} alt="Waggle App Connection" className="max-w-none" />
                </div>
                <div className="flex flex-col pt-[232px] pr-6">
                  <span className="lato font-normal text-5xl leading-none tracking-normal dark-overlay mb-[40px]">{content.steps[1].number}</span>
                  <h3 className="lexend font-normal text-[39px] leading-none tracking-normal text-dark-gray mb-[58px]">{content.steps[1].title}</h3>
                  <div className="w-50 h-1 blue-400 rounded"></div>
                </div>
              </div>
              <Box box={content.steps[1].box3} stepIndex={2} />
            </div>
          )}
          {activeStep === 2 && (
            <div className="flex pb-[64px] flex-col lg:flex-row gap-5">
              <Box box={content.steps[2].box1} stepIndex={0} />
              <Box box={content.steps[2].box2} stepIndex={1} />
              <div className="waggle-blue-bg w-full max-w-[876px] border border-transparent flex rounded-[20px] flex-col lg:flex-row gap-[27px]">
                <div className="rounded-[23px] pt-5 pb-5 pl-5">
                  <img src={content.steps[2].image} alt="Pet Nutrition Monitoring" className="max-w-none" />
                </div>
                <div className="flex flex-col pt-[232px] pr-6">
                  <span className="lato font-normal text-5xl leading-none tracking-normal dark-overlay mb-[40px]">{content.steps[2].number}</span>
                  <h3 className="lexend font-normal text-[39px] leading-none tracking-normal text-dark-gray mb-[58px]">{content.steps[2].fullTitle}</h3>
                  <div className="w-50 h-1 blue-400 rounded"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
