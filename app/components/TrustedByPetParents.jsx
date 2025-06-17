import React from 'react';
import AmazonReview from "../assets/amazon_review.png";

const TrustedByPetParents = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto gap-8 md:gap-4">
        {/* Left stat */}
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
          <span>17+</span>
          <p className="text-gray-600">Years of Pet Protection</p>
          </div>
          
        </div>

        {/* Middle stat with Amazon rating */}
        <div className="">
          <img
            src={AmazonReview}
            alt="Amazon Logo"
          />
          <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            <span>1,600+</span>
            <p className="text-gray-600">Global Ratings</p>
          </div>
        </div>

        {/* Right stat */}
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
          <span>80,000+</span>
          <p className="text-gray-600">Happy Pet Parents</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TrustedByPetParents;