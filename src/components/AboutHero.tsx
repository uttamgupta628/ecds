import React, { useEffect, useState, useRef } from 'react';
import aboutHero from '../assets/aboutHero.png';

const MultiSegmentCard: React.FC = () => {
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
      { threshold: 0.3 }
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

  return (
    <div ref={sectionRef} className="w-full bg-gray-50 flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-7xl">
        {/* Card Container - 1200x477 */}
        <div
          className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 scale-100 rotate-0' 
              : 'opacity-0 scale-95 -rotate-1'
          }`}
          style={{
            width: '1200px',
            height: '477px',
            maxWidth: '100%'
          }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={aboutHero}
              alt="Modern office buildings"
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ${
                isVisible ? 'scale-100' : 'scale-110'
              }`}
            />
          </div>
         
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent transition-opacity duration-1000 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}></div>
         
          {/* Content */}
          <div className="relative h-full flex items-center px-12 md:px-16">
            <div className="max-w-xl">
              <h1 className={`text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-1000 delay-500 ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-20'
              }`}>
                <span className={`inline-block transition-all duration-700 delay-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}>
                  Multi-Segment
                </span>
                <br />
                <span className={`inline-block transition-all duration-700 delay-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}>
                  Solutions for a
                </span>
                <br />
                <span className={`inline-block transition-all duration-700 delay-800 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}>
                  Better Tomorrow
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiSegmentCard;