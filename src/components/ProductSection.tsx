import React, { useEffect, useState, useRef } from "react";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";

const ProductsSection: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<{[key: string]: boolean}>({
    airFilters: false,
    todayAday: false,
    cxp: false
  });

  const airFiltersRef = useRef<HTMLDivElement>(null);
  const todayAdayRef = useRef<HTMLDivElement>(null);
  const cxpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionName = entry.target.getAttribute('data-section');
          if (sectionName) {
            if (entry.isIntersecting) {
              setVisibleSections(prev => ({ ...prev, [sectionName]: true }));
            } else {
              setVisibleSections(prev => ({ ...prev, [sectionName]: false }));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const refs = [
      { ref: airFiltersRef, name: 'airFilters' },
      { ref: todayAdayRef, name: 'todayAday' },
      { ref: cxpRef, name: 'cxp' }
    ];

    refs.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Air Filters Section */}
      <section ref={airFiltersRef} data-section="airFilters" className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div>
            {/* Header */}
            <div className={`text-center mb-8 transition-all duration-1000 ${
              visibleSections.airFilters 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-10'
            }`}>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#405E42] mb-4">
                Air Filters
              </h2>
              <p className="text-gray-700 text-lg font-medium mb-2">
                Products designed for every room.
              </p>
              <p className="text-gray-600 text-base">
                Transform your interiors into healthier, breathable environments.
              </p>
            </div>

            {/* Product Card with Background */}
            <div className={`relative transition-all duration-1000 delay-300 ${
              visibleSections.airFilters 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}>
              <div
                className="relative bg-cover bg-center rounded-lg p-8 min-h-[400px] flex items-center justify-center overflow-hidden group"
                style={{
                  backgroundImage: `url(${product1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Center Product Image */}
                <div className={`relative z-10 p-6 max-w-xs text-center transform transition-all duration-700 delay-500 ${
                  visibleSections.airFilters 
                    ? 'opacity-100 translate-y-0 rotate-0' 
                    : 'opacity-0 translate-y-10 rotate-3'
                }`}>
                  <img
                    src={product2}
                    alt="Air Filter Product"
                    className="w-full h-auto mb-4 transition-transform duration-500 group-hover:scale-110"
                  />
                  <a
                    href="#"
                    className="inline-block text-gray-700 font-semibold text-lg hover:text-green-700 transition-colors underline decoration-2 underline-offset-4"
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
      <section ref={todayAdayRef} data-section="todayAday" className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div>
            {/* Header */}
            <div className={`text-center mb-8 transition-all duration-1000 ${
              visibleSections.todayAday 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-10'
            }`}>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#405E42] mb-4">
                TodayAday
              </h2>
              <p className="text-gray-700 text-lg font-medium mb-2">
                Sustainable Skincare
              </p>
              <p className="text-gray-600 text-base">
                Care that respects Skin & Planet, formulated with science-backed Korean ingredients.
              </p>
            </div>

            {/* Product Card */}
            <div className="relative max-w-5xl mx-auto">
              <div className="relative p-8 lg:p-12 flex flex-col items-center group">
                {/* Product Image */}
                <div className={`relative z-10 mb-6 transition-all duration-1000 delay-300 ${
                  visibleSections.todayAday 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-20'
                }`}>
                  <img
                    src={product3}
                    alt="CXP Green Raw Materials"
                    className="w-full max-w-md h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    style={{ maxWidth: "881px" }}
                  />
                </div>

                {/* Discover More Link */}
                <a
                  href="#"
                  className={`inline-block text-gray-700 font-semibold text-lg hover:text-green-700 transition-all duration-700 delay-500 underline decoration-2 underline-offset-4 ${
                    visibleSections.todayAday 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-5'
                  }`}
                >
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CXP Green Raw Materials Section */}
      <section ref={cxpRef} data-section="cxp" className="py-12 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div>
            {/* Header */}
            <div className={`text-center mb-8 transition-all duration-1000 ${
              visibleSections.cxp 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-10'
            }`}>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#405E42] mb-4">
                CXP
              </h2>
              <p className="text-gray-700 text-lg font-medium mb-2">
                Green Raw Materials
              </p>
              <p className="text-gray-600 text-base">
                A wood based raw material that can replace all form of plastic...
              </p>
            </div>

            {/* Product Card */}
            <div className="relative max-w-2xl mx-auto">
              <div className="relative p-8 lg:p-12 flex flex-col items-center group">
                {/* Product Image */}
                <div className={`relative z-10 mb-6 transition-all duration-1000 delay-300 ${
                  visibleSections.cxp 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-20'
                }`}>
                  <img
                    src={product4}
                    alt="TodayAday Skincare Products"
                    className="w-full max-w-md h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    style={{ maxWidth: "572px" }}
                  />
                </div>

                {/* Discover More Link */}
                <a
                  href="#"
                  className={`inline-block text-gray-700 font-semibold text-lg hover:text-green-700 transition-all duration-700 delay-500 underline decoration-2 underline-offset-4 ml-30 ${
                    visibleSections.cxp 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-5'
                  }`}
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