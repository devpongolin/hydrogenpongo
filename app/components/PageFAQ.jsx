import { useState, useEffect } from 'react';
import TechnicalDetails from '../assets/TechnicalDetails.webp';
import GeneralQuestions from '../assets/GeneralQuestions.webp';
import OnTheRoadPack from '../assets/OnTheRoadPack.webp';
import DeliveryAndReturns from '../assets/DeliveryAndReturns.webp';
import emptyStar from '../assets/emptyStar.webp';

const topicImageMap = {
  "Technical Details": TechnicalDetails,
  "General Questions": GeneralQuestions,
  "On the Road Pack": OnTheRoadPack,
  "Delivery and Returns": DeliveryAndReturns,
};

export default function PageFAQ({ pageFaqData }) {
  const transformedData = [];

  pageFaqData.forEach(({ node }) => {
    const fields = node.fields;
    const question = fields.find(f => f.key === "page_question")?.value;
    const answer = fields.find(f => f.key === "page_answer")?.value;
    const topic = fields.find(f => f.key === "topic_category")?.value;

    if (!question || !answer || !topic) return;

    let topicGroup = transformedData.find(group => group.tab === topic);
    if (!topicGroup) {
      topicGroup = {
        tab: topic,
        image: topicImageMap[topic] || emptyStar,
        qa: []
      };
      transformedData.push(topicGroup);
    }

    topicGroup.qa.push({ question, answer });
  });

  const faqData = transformedData;
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [openQuestions, setOpenQuestions] = useState({});

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleToggle = (tabIdx, qIdx) => {
    setOpenQuestions(prev => ({
      ...prev,
      [tabIdx]: prev[tabIdx] === qIdx ? null : qIdx,
    }));
  };

  if (!faqData || faqData.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center text-red-500">
        No FAQs available.
      </div>
    );
  }

  return (
    <div className="mx-auto md:p-0 md:flex w-full max-w-[1277px] p-[16px] pb-[38px] md:pb-[61px]">
      <h2 className="md:text-[36px] text-center mb-6 md:m-0 font-medium text-[28px] w-[87%] mx-auto md:w-[33%] md:p-[0px] md:text-left lexend leading-[1.3]">Your Questions, Answered</h2>
      <div className="w-full md:w-[67%]">
        {/* Desktop Tabs */}
        {!isMobile && (
          <div className="flex flex-wrap gap-4 mb-[13px] border-b pb-[12px] border-[#6C6F73]">
            {faqData.map((tab, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-md transition ${
                  activeTab === idx
                    ? 'text-blue-600 font-semibold relative md:after:absolute md:after:bottom-[-14px] md:after:border-b-[2.4px] md:after:border-[#0085FF] custom-after-empty  md:after:block md:after:left-0 md:after:w-[75%]'
                    : 'text-gray-700'
                }`}
                onClick={() => setActiveTab(idx)}
              >
                <div className="flex items-center gap-2 text-[15px] w-[98%] text-left">
                  <img src={tab.image} alt={tab.tab} className="w-6 h-6" />
                  {tab.tab}
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Render for both Desktop (selected tab only) and Mobile (all tabs shown, but only selected tab's Q&A) */}
        <div className="space-y-6">
          {faqData.map((tab, tabIdx) => {
            const isActive = activeTab === tabIdx;
            const openIdx = openQuestions[tabIdx];

            return (
              <div className='md:m-0' key={tabIdx}>
                {/* Mobile: individual tab header to select */}
                {isMobile && (
                  <button
                  onClick={() => setActiveTab(tabIdx)}
                  className={`w-full text-left border border-[#0085FF] px-[30px] py-[24px] rounded-md flex items-center gap-2 font-semibold
                    ${isActive
                      ? 'text-[#ffffff] bg-[#0085FF] pt-[18.11px] pr-[32.2px] pb-[18.11px] pl-[32.2px] rounded-tl-[28px] rounded-tr-[28px]'
                      : 'text-[#202124] rounded-[12px] border'
                    }`}
                >
                  <img src={tab.image} alt={tab.tab} className="w-6 h-6" />
                  <span className="flex-1">{tab.tab}</span>
                
                  {/* 👇 Mobile-only SVG icon */}
                  <svg
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-auto block md:hidden"
                  >
                    <path
                      d="M6.21745 5.50658L1.9393 1.41406L6.21745 5.50658ZM6.21745 5.50658L10.4956 1.41406L6.21745 5.50658Z"
                      fill={isActive ? '#ffffff' : '#0085FF'}
                    />
                    <path
                      d="M1.9393 1.41406L6.21745 5.50658L10.4956 1.41406"
                      stroke={isActive ? '#ffffff' : '#0085FF'}
                      strokeWidth="2.0125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>                
                )}

                {/* Show Q&A only for active tab */}
                {isActive && (
                  <div className="space-y-4 px-[15px] py-0">
                    {tab.qa.map((item, qIdx) => (
                      <div
                        key={qIdx}
                        className="border-b md:py-[28px] py-[20px] cursor-pointer border-b-[#B47E574D] m-0"
                        onClick={() => handleToggle(tabIdx, qIdx)}
                      >
                        <div className="flex items-center justify-between font-medium text-lg text-gray-800">
                          <span className='md:text-[20px]'>{item.question}</span>
                          <span className="text-xl font-bold text-[#B47E57] md:text-[#000000]">
                            {openQuestions[tabIdx] === qIdx ? '−' : '+'}
                          </span>
                        </div>
                        {openQuestions[tabIdx] === qIdx && (
                          <p className="text-gray-600 mt-2 md:mt-[28px] md:text-[18px]">{item.answer}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
