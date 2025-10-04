import React from 'react';
import brandLevel from '../assets/brandLevel.png';

const BrandHighlights: React.FC = () => {
  const leftCards = [
    {
      title: "Sustainability at Root",
      description: "Every decision, from materials to manufacturing, is made with environmental responsibility in mind."
    },
    {
      title: "Design Meets Function",
      description: "We believe beauty and performance should never be separate."
    },
    {
      title: "Wellness Beyond Self",
      description: "Products that improve not only personal health, but the health of the spaces we live in."
    }
  ];

  const rightCards = [
    {
      title: "Innovation with Purpose",
      description: "Our patents and R&D aren't just for progress-they're for impact."
    },
    {
      title: "Global Standards, Local Relevance",
      description: "Technology born in South Korea, adapted for India's unique needs."
    },
    {
      title: "Wellness Beyond Self",
      description: "Products that improve not only personal health, but the health of the spaces we live in."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Brand Highlights Value
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Rooted in South Korea's culture of precision, wellness, and respect for nature, ECDS was founded with one clear mission to reduce carbon emissions & create solutions that are as kind to the planet as they are effective for people
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-6">
            {leftCards.map((card, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg shadow-md"
                style={{
                  background: 'linear-gradient(to bottom right, #D4B484, #405E42)'
                }}
              >
                <h3 className="text-white font-bold text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-white text-sm">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={brandLevel}
                alt="ECDS Mobile App" 
                className="w-full max-w-sm rounded-lg shadow-2xl"
              />
              
            </div>
          </div>
          <div className="space-y-6">
            {rightCards.map((card, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg shadow-md"
                style={{
                  background: 'linear-gradient(to bottom right, #D4B484, #405E42)'
                }}
              >
                <h3 className="text-white font-bold text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-white text-sm">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandHighlights;