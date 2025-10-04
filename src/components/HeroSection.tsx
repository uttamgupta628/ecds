import React from 'react';
import heroSectionImg from "../assets/heroSectionImg.png"

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="min-h-[500px] lg:min-h-[600px]">
          <div
            className="relative bg-cover bg-center bg-no-repeat min-h-[500px] lg:min-h-[600px]"
            style={{ backgroundImage: `url(${heroSectionImg})` }}
          >
            <div className="relative h-full flex items-center justify-end">
              <div className="w-full lg:w-1/2 p-8 lg:p-12 lg:mr-8 lg:rounded-l">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight mb-6">
                  South Korean Innovation. Rooted in Sustainability.
                  <span className="block text-green-700 mt-2">Now in India</span>
                </h1>
               
                <p className="text-gray-600 text-base lg:text-lg mb-8">
                  From breathable wall panels to restorat 764×240 and eco-conscious materials, ECDS delivers patented solutions for a cleaner, healthier future in India
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded font-semibold transition-colors duration-300 shadow-md hover:shadow-lg">
                    EXPLORE OUR BRANDS
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded font-semibold transition-colors duration-300 shadow-md hover:shadow-lg">
                    LEARN MORE ABOUT ECDS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;