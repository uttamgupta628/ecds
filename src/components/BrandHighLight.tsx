import React, { useEffect, useState, useRef } from 'react';
import brandLevel from '../assets/brandLevel.png';

const BrandHighlights: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Brand Highlights Value
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Rooted in South Korea's culture of precision, wellness, and respect for nature, ECDS was founded with one clear mission to reduce carbon emissions & create solutions that are as kind to the planet as they are effective for people
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Cards */}
          <div className="space-y-6">
            {leftCards.map((card, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-md transform transition-all duration-700 hover:scale-105 hover:shadow-xl ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-20'
                }`}
                style={{
                  background: 'linear-gradient(to bottom right, #D4B484, #405E42)',
                  transitionDelay: `${index * 150}ms`
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

          {/* Center Image */}
          <div className="flex justify-center">
            <div className={`relative transform transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 scale-100 rotate-0' 
                : 'opacity-0 scale-75 rotate-3'
            }`}
            style={{ transitionDelay: '300ms' }}
            >
              <img
                src={brandLevel}
                alt="ECDS Mobile App"
                className="w-full max-w-sm rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
            </div>
          </div>

          {/* Right Cards */}
          <div className="space-y-6">
            {rightCards.map((card, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-md transform transition-all duration-700 hover:scale-105 hover:shadow-xl ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-20'
                }`}
                style={{
                  background: 'linear-gradient(to bottom right, #D4B484, #405E42)',
                  transitionDelay: `${index * 150}ms`
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