import { useEffect, useState, useRef } from 'react';
import heroSectionImg from '../assets/heroSectionImg.png';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
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
    <section
      ref={sectionRef}
      className="relative bg-white overflow-hidden m-8 rounded-3xl shadow-lg"
    >
      {/* Desktop Layout - Above 750px */}
      <div className="hidden min-[750px]:block relative min-h-[600px] lg:min-h-[700px]">
        <div className="absolute inset-0">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroSectionImg})`,
              backgroundPosition: 'center'
            }}
          />
        </div>
        
        {/* Text Content - Starting from 48% from left */}
        <div className="relative max-w-[1920px] mx-auto">
          <div 
            className={`ml-[48%] w-[52%] min-h-[600px] lg:min-h-[700px] flex items-center transition-all duration-1000 ease-out ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="px-8 lg:px-12 py-12 max-w-2xl">
              {/* Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-green-800 leading-tight mb-6">
                South Korean Innovation. Rooted in Sustainability.
                <span className="block text-green-800 mt-4">
                  Now in India
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-green-700 text-lg lg:text-xl mb-8 leading-relaxed">
                From breathable wall panels to restorative eco-conscious materials, ECDS delivers patented solutions for a cleaner, healthier future in India
              </p>
              
              {/* Buttons */}
              <div className="flex flex-row gap-4">
                <button className="bg-green-800 hover:bg-green-900 text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-base">
                  EXPLORE OUR BRANDS
                </button>
                <button className="bg-green-800 hover:bg-green-900 text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-base">
                  LEARN MORE ABOUT ECDS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Below 750px */}
      <div className="block min-[750px]:hidden">
        <div className="max-w-[1920px] mx-auto relative">
          {/* Image Container with Text Overlay */}
          <div 
            className="relative w-full h-[400px] xs:h-[350px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroSectionImg})`,
              backgroundPosition: 'center'
            }}
          >
            {/* Dark Overlay for Better Text Readability */}
            <div className="absolute inset-0 bg-black/30"></div>
            
            {/* Text Content Overlay */}
            <div 
              className={`absolute inset-0 flex flex-col justify-center items-end px-6 transition-all duration-1000 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Heading - White Text for Contrast */}
              <h1 className="text-xl xs:text-2xl sm:text-4xl font-bold text-green-800 leading-tight mb-4 text-center">
                South Korean Innovation.<br />
                Rooted in Sustainability.
                <span className="block text-white mt-2 text-lg xs:text-xl sm:text-2xl font-semibold">
                  Now in India
                </span>
              </h1>
              
            </div>
          </div>
          
          {/* Description - Light Green Text for Better Readability */}
              <p className="text-green-800 text-sm xs:text-base sm:text-lg mb-6 leading-relaxed text-center max-w-md mx-auto">
                From breathable wall panels to restorative eco-conscious materials, ECDS delivers patented solutions for a cleaner, healthier future in India
              </p>
          {/* Buttons Section Below Image */}
          <div className="bg-white px-6 py-6">
            <div className="flex flex-col gap-3 max-w-md mx-auto">
              <button className="bg-green-800 hover:bg-green-900 text-white px-6 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl w-full text-base">
                EXPLORE OUR BRANDS
              </button>
              <button className="bg-green-800 hover:bg-green-900 text-white px-6 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl w-full text-base">
                LEARN MORE ABOUT ECDS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;