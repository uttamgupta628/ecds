import { useEffect, useState, useRef } from 'react';
import heroSectionImg from "../assets/heroSectionImg.png"

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
    <section ref={sectionRef} className="relative bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div className="min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
          <div
            className="relative bg-cover bg-center bg-no-repeat min-h-[500px] md:min-h-[600px] lg:min-h-[700px]"
            style={{ backgroundImage: `url(${heroSectionImg})` }}
          >
            <div className="absolute inset-0 bg-black/20 lg:bg-transparent"></div>
            <div className="relative h-full flex items-center justify-center lg:justify-end overflow-hidden">
              <div
                className={`w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 lg:mr-8 transition-all duration-1000 ease-out ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 lg:translate-x-[50%]'
                }`}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight mb-4 sm:mb-6">
                  South Korean Innovation. Rooted in Sustainability.
                  <span className="block text-green-700 mt-2">Now in India</span>
                </h1>
                <p className="text-gray-700 lg:text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
                  From breathable wall panels to restorative eco-conscious materials, ECDS delivers patented solutions for a cleaner, healthier future in India
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button className="bg-green-700 hover:bg-green-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded font-semibold transition-colors duration-300 shadow-md hover:shadow-lg text-sm sm:text-base">
                    EXPLORE OUR BRANDS
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded font-semibold transition-colors duration-300 shadow-md hover:shadow-lg text-sm sm:text-base">
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