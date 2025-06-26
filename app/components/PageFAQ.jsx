import {useState} from 'react';
import TechnicalDetails from '../assets/TechnicalDetails.webp';
import GeneralQuestions from '../assets/GeneralQuestions.webp';
import OnTheRoadPack from '../assets/OnTheRoadPack.webp';
import DeliveryAndReturns from '../assets/DeliveryAndReturns.webp';
import emptyStar from '../assets/emptyStar.webp';

const topicImageMap = {
  "Technical Details": TechnicalDetails,
  "General Questions": GeneralQuestions,
  "On the Road Pack": OnTheRoadPack,
  "Delivery and Returns": DeliveryAndReturns
};

export default function PageFAQ({pageFaqData}) {
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

console.log(transformedData);



  const faqData = transformedData;

  const [activeTab, setActiveTab] = useState(0);
  const [openQuestionIndex, setOpenQuestionIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setOpenQuestionIndex(0); // Reset to first question in tab
  };

  const handleQuestionClick = (index) => {
    setOpenQuestionIndex(index);
  };

  return (
    <div id="faq-wrapper" className="max-w-4xl mx-auto p-6">
      <div className="text-center text-2xl font-bold mb-6">
        Your Questions, Answered
      </div>
      <div>
        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          {faqData.map((tab, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 rounded-md border ${
                activeTab === idx
                  ? 'bg-blue-100 text-blue-600 font-semibold border-blue-400'
                  : 'bg-white text-gray-700 border-gray-300'
              }`}
              onClick={() => handleTabClick(idx)}
            >
              <img src={tab.image} alt={tab.tab} className="inline-block w-6 h-6 mr-2" />
              {tab.tab}
            </button>
          ))}
        </div>

        {/* Questions/Answers */}
        <div className="space-y-4">
          {faqData[activeTab].qa.map((item, idx) => (
            <div
              key={idx}
              className="border-b pb-4 cursor-pointer"
              onClick={() => handleQuestionClick(idx)}
            >
              <div className="font-medium text-lg text-gray-800 hover:text-blue-500">
                {item.question}
              </div>
              {openQuestionIndex === idx && (
                <p className="text-gray-600 mt-2">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
