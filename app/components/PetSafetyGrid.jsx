import { ArrowRight } from "lucide-react";
import pet_Guide_one from "../assets/pet_Guide_one.png";
import pet_Guide_two from "../assets/pet_Guide_two.png";
import pet_Guide_three from "../assets/pet_Guide_three.png";

const articles = [
  {
    title: "Watch Over Your Pet Anytime:",
    description: "Remote monitoring lets you check in on your pet, no matter where you ar",
    date: "February 1, 2025",
    image: pet_Guide_one,
    alt: "Husky dog with owner",
  },
  {
    title: "Watch Over Your Pet Anytime:",
    description: "Remote monitoring lets you check in on your pet, no matter where you ar",
    date: "February 1, 2025",
    image: pet_Guide_two,
    alt: "White dog with owner",
  },
  {
    title: "Watch Over Your Pet Anytime:",
    description: "Remote monitoring lets you check in on your pet, no matter where you ar",
    date: "February 1, 2025",
    image: pet_Guide_three,
    alt: "Golden retriever with owner", 
  },
];

const PetSafetyGrid = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
        The Ultimate Pet Parent Guide
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {articles.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[32px] overflow-hidden shadow-lg relative"
            >
              <div className="relative h-full">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="bg-white rounded-[24px] shadow-md p-6 w-full">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{item.date}</span>
                      <button className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors">
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetSafetyGrid;
