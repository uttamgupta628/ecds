import React, { useEffect, useState, useRef } from "react";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";

const ProductsSection = () => {
  const [scrollProgress, setScrollProgress] = useState({
    airFilters: 0,
    todayAday: 0,
    cxp: 0
  });

  const airFiltersRef = useRef<HTMLDivElement>(null);
  const todayAdayRef = useRef<HTMLDivElement>(null);
  const cxpRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleScroll = () => {
      const calculateProgress = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (!ref.current) return 0;
        
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementHeight = rect.height;
        
        const elementTop = rect.top;
        const elementBottom = rect.bottom;
        
        let progress = 0;
        
        if (elementBottom > 0 && elementTop < windowHeight) {
          const scrolled = windowHeight - elementTop;
          const totalScrollDistance = windowHeight + elementHeight;
          progress = scrolled / totalScrollDistance;
        } else if (elementTop >= windowHeight) {
          progress = 0;
        } else {
          progress = 1;
        }
        
        return Math.max(0, Math.min(1, progress));
      };

      setScrollProgress({
        airFilters: calculateProgress(airFiltersRef),
        todayAday: calculateProgress(todayAdayRef),
        cxp: calculateProgress(cxpRef)
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getScale = (progress: number) => {
    const minScale = 1;
    const maxScale = 1.5;
    
    if (progress < 0.35) {
      const zoomProgress = progress / 0.35;
      return minScale + (maxScale - minScale) * zoomProgress;
    }
    else if (progress >= 0.35 && progress <= 0.65) {
      return maxScale;
    }
    else {
      const zoomOutProgress = (progress - 0.65) / 0.35;
      return maxScale - (maxScale - minScale) * zoomOutProgress;
    }
  };

  const getOpacity = (progress: number) => {
    if (progress < 0.1) {
      return progress / 0.1;
    } else if (progress > 0.9) {
      return (1 - progress) / 0.1;
    }
    return 1;
  };

  return (
    <div className="bg-gray-100">
      {/* Air Filters Section */}
      <section 
        ref={airFiltersRef} 
        className="py-12 sm:py-16 md:py-20 min-h-screen flex items-center overflow-hidden mb-20"
        style={{
          transform: `scale(${getScale(scrollProgress.airFilters)})`,
          opacity: getOpacity(scrollProgress.airFilters),
          transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div>
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-800 mb-4">
                Air Filters
              </h2>
              <p className="text-gray-700 text-base sm:text-lg font-medium mb-2">
                Products designed for every room.
              </p>
              <p className="text-gray-600 text-sm sm:text-base px-4">
                Transform your interiors into healthier, breathable environments.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <div
                className="relative bg-cover bg-center rounded-lg p-6 sm:p-8 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex items-center justify-center"
                style={{
                  backgroundImage: `url(${product1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="relative z-10 w-full max-w-xs sm:max-w-sm flex flex-col items-center">
                  <img
                    src={product2}
                    alt="Air Filter Product"
                    className="w-full h-auto mb-4"
                  />
                  <a
                    href="#"
                    className="inline-block text-gray-700 font-semibold text-base sm:text-lg hover:text-green-700 transition-colors underline decoration-2 underline-offset-4"
                  >
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TodayAday Sustainable Skincare Section */}
      <section 
        ref={todayAdayRef} 
        className="py-12 sm:py-16 md:py-20 min-h-screen flex items-center overflow-hidden mb-20"
        style={{
          transform: `scale(${getScale(scrollProgress.todayAday)})`,
          opacity: getOpacity(scrollProgress.todayAday),
          transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div>
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-800 mb-4">
                TodayAday
              </h2>
              <p className="text-gray-700 text-base sm:text-lg font-medium mb-2">
                Sustainable Skincare
              </p>
              <p className="text-gray-600 text-sm sm:text-base px-4">
                Care that respects Skin & Planet, formulated with science-backed Korean ingredients.
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto overflow-hidden">
              <div className="relative p-6 sm:p-8 lg:p-12 flex flex-col items-center">
                <img
                  src={product3}
                  alt="TodayAday Products"
                  className="w-full max-w-[250px] sm:max-w-md lg:max-w-2xl h-auto object-contain mb-6"
                />

                <a
                  href="#"
                  className="inline-block text-gray-700 font-semibold text-base sm:text-lg hover:text-green-700 transition-colors underline decoration-2 underline-offset-4"
                >
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CXP Green Raw Materials Section */}
      <section 
        ref={cxpRef} 
        className="py-12 sm:py-16 md:py-20 pb-20 min-h-screen flex items-center overflow-hidden"
        style={{
          transform: `scale(${getScale(scrollProgress.cxp)})`,
          opacity: getOpacity(scrollProgress.cxp),
          transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div>
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-800 mb-4">
                CXP
              </h2>
              <p className="text-gray-700 text-base sm:text-lg font-medium mb-2">
                Green Raw Materials
              </p>
              <p className="text-gray-600 text-sm sm:text-base px-4">
                A wood based raw material that can replace all form of plastic...
              </p>
            </div>

            <div className="relative max-w-2xl mx-auto overflow-hidden">
              <div className="relative p-6 sm:p-8 lg:p-12 flex flex-col items-center">
                <img
                  src={product4}
                  alt="CXP Products"
                  className="w-full max-w-[200px] sm:max-w-md h-auto object-contain mb-6"
                />

                <a
                  href="#"
                  className="inline-block text-gray-700 font-semibold text-base sm:text-lg hover:text-green-700 transition-colors underline decoration-2 underline-offset-4"
                >
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsSection;