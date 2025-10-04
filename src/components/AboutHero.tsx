import React from 'react';
import aboutHero from '../assets/aboutHero.png';

const MultiSegmentCard: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-7xl">
        {/* Card Container - 1200x477 */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl"
          style={{
            width: '1200px',
            height: '477px',
            maxWidth: '100%'
          }}
        >
          {/* Background Image */}
          <img
            src={aboutHero}
            alt="Modern office buildings"
            className="absolute inset-0 w-full h-full object-cover"
          />
         
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
         
          {/* Content */}
          <div className="relative h-full flex items-center px-12 md:px-16">
            <div className="max-w-xl">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Multi-Segment<br />
                Solutions for a<br />
                Better Tomorrow
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiSegmentCard;