import React from 'react';
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
    <div className="w-full bg-white py-12 px-4  sm:px-6 lg:pr-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-7 text-gray-900 max-w-xl md:mt-30">
            <p className="text-sm leading-relaxed">
              ECDS is a South Korea-born, innovation-led company bringing together the worlds of clean technology, wellness, and sustainable materials
            </p>
            
            <p className="text-sm leading-relaxed">
              Our portfolio is built on patented research, uncompromising quality, and purpose-driven design—from air-purifying wall panels that protect and beautify spaces, to spa-grade skincare powered by Korean oak sap, to eco-friendly raw materials that support responsible manufacturing.
            </p>
            
            <p className="text-sm leading-relaxed">
              We're here to make clean living not just possible, but effortless—merging science, design, and sustainability into solutions that improve everyday life & lower your carbon footprint.
            </p>
          </div>

          {/* Right Column - Product Cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Air Filter - Large Card (spans full height on left) */}
            <div className="row-span-2">
              <div 
                className={`${products[0].bgColor} rounded-xl overflow-hidden shadow-lg`}
                style={{ width: '280px', height: '500px', maxWidth: '100%' }}
              >
                <div className="p-5 h-full flex flex-col">
                  <h3 className="text-white text-xl font-semibold mb-3">{products[0].name}</h3>
                  <div className="flex-1 flex items-center justify-center">
                    <img
                      src={products[0].image}
                      alt={products[0].name}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* TodayAday - Top Right */}
            <div>
              <div 
                className={`${products[1].bgColor} rounded-xl overflow-hidden shadow-lg`}
                style={{ width: '280px', height: '245px', maxWidth: '100%' }}
              >
                <div className="p-5 h-full flex flex-col">
                  <h3 className="text-gray-900 text-xl font-semibold mb-3">{products[1].name}</h3>
                  <div className="flex-1 flex items-center justify-center">
                    <img
                      src={products[1].image}
                      alt={products[1].name}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CXP - Bottom Right */}
            <div>
              <div 
                className={`${products[2].bgColor} rounded-xl overflow-hidden shadow-lg`}
                style={{ width: '280px', height: '245px', maxWidth: '100%' }}
              >
                <div className="p-5 h-full flex flex-col">
                  <h3 className="text-white text-xl font-semibold mb-3">{products[2].name}</h3>
                  <div className="flex-1 flex items-center justify-center">
                    <img
                      src={products[2].image}
                      alt={products[2].name}
                      className="w-full h-auto object-contain"
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