import React, { useEffect, useState, useRef } from 'react';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';

interface Product {
  id: number;
  name: string;
  image: string;
  bgColor: string;
}

const AboutProductsSection: React.FC = () => {
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
      { threshold: 0.2 }
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

  const products: Product[] = [
    {
      id: 1,
      name: 'Air Filter',
      image: product2,
      bgColor: 'bg-gradient-to-br from-emerald-700 to-emerald-900'
    },
    {
      id: 2,
      name: 'TodayAday',
      image: product3,
      bgColor: 'bg-gradient-to-br from-yellow-200 to-amber-300'
    },
    {
      id: 3,
      name: 'CXP',
      image: product4,
      bgColor: 'bg-gradient-to-br from-emerald-600 to-emerald-800'
    }
  ];

  return (
    <div ref={sectionRef} className="w-full bg-white py-12 px-4 sm:px-6 lg:pr-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-7 text-gray-900 max-w-xl md:mt-30">
            <p className={`text-sm leading-relaxed transition-all duration-700 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: '200ms' }}
            >
              ECDS is a South Korea-born, innovation-led company bringing together the worlds of clean technology, wellness, and sustainable materials
            </p>
            
            <p className={`text-sm leading-relaxed transition-all duration-700 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: '400ms' }}
            >
              Our portfolio is built on patented research, uncompromising quality, and purpose-driven design—from air-purifying wall panels that protect and beautify spaces, to spa-grade skincare powered by Korean oak sap, to eco-friendly raw materials that support responsible manufacturing.
            </p>
            
            <p className={`text-sm leading-relaxed transition-all duration-700 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: '600ms' }}
            >
              We're here to make clean living not just possible, but effortless—merging science, design, and sustainability into solutions that improve everyday life & lower your carbon footprint.
            </p>
          </div>

          {/* Right Column - Product Cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Air Filter - Large Card (spans full height on left) */}
            <div className="row-span-2">
              <div 
                className={`${products[0].bgColor} rounded-xl overflow-hidden shadow-lg transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 rotate-0' 
                    : 'opacity-0 translate-y-10 -rotate-3'
                }`}
                style={{ 
                  width: '280px', 
                  height: '500px', 
                  maxWidth: '100%',
                  transitionDelay: '300ms'
                }}
              >
                <div className="p-5 h-full flex flex-col">
                  <h3 className={`text-white text-xl font-semibold mb-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
                  }`}
                  style={{ transitionDelay: '500ms' }}
                  >
                    {products[0].name}
                  </h3>
                  <div className="flex-1 flex items-center justify-center">
                    <img
                      src={products[0].image}
                      alt={products[0].name}
                      className={`w-full h-auto object-contain transition-all duration-700 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                      }`}
                      style={{ transitionDelay: '600ms' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* TodayAday - Top Right */}
            <div>
              <div 
                className={`${products[1].bgColor} rounded-xl overflow-hidden shadow-lg transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 rotate-0' 
                    : 'opacity-0 translate-y-10 rotate-3'
                }`}
                style={{ 
                  width: '280px', 
                  height: '245px', 
                  maxWidth: '100%',
                  transitionDelay: '500ms'
                }}
              >
                <div className="p-5 h-full flex flex-col">
                  <h3 className={`text-gray-900 text-xl font-semibold mb-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
                  }`}
                  style={{ transitionDelay: '700ms' }}
                  >
                    {products[1].name}
                  </h3>
                  <div className="flex-1 flex items-center justify-center">
                    <img
                      src={products[1].image}
                      alt={products[1].name}
                      className={`w-full h-auto object-contain transition-all duration-700 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                      }`}
                      style={{ transitionDelay: '800ms' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CXP - Bottom Right */}
            <div>
              <div 
                className={`${products[2].bgColor} rounded-xl overflow-hidden shadow-lg transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 rotate-0' 
                    : 'opacity-0 translate-y-10 rotate-3'
                }`}
                style={{ 
                  width: '280px', 
                  height: '245px', 
                  maxWidth: '100%',
                  transitionDelay: '700ms'
                }}
              >
                <div className="p-5 h-full flex flex-col">
                  <h3 className={`text-white text-xl font-semibold mb-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
                  }`}
                  style={{ transitionDelay: '900ms' }}
                  >
                    {products[2].name}
                  </h3>
                  <div className="flex-1 flex items-center justify-center">
                    <img
                      src={products[2].image}
                      alt={products[2].name}
                      className={`w-full h-auto object-contain transition-all duration-700 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                      }`}
                      style={{ transitionDelay: '1000ms' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProductsSection;