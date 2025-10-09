import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";

gsap.registerPlugin(ScrollTrigger);

const ProductsSection = () => {
  const airFiltersRef = useRef<HTMLDivElement>(null);
  const todayAdayRef = useRef<HTMLDivElement>(null);
  const cxpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = [airFiltersRef, todayAdayRef, cxpRef];

    sections.forEach((ref, index) => {
      if (ref.current) {
        gsap.set(ref.current, {
          scale: 0.3,
          opacity: 0,
          z: -1000, 
          rotationX: 10,
        });
        gsap.fromTo(
          ref.current,
          {
            scale: 0.3,
            opacity: 0,
            z: -1000,
            rotationX: 10,
          },
          {
            scale: 3.5,
            opacity: 1,
            z: 0, 
            rotationX: 0,
            scrollTrigger: {
              trigger: ref.current,
              start: "top bottom-=100", 
              end: "center center",
              scrub: 1,
              onEnter: () => {
                if (index > 0) {
                  gsap.to(sections[index - 1].current, {
                    z: -500,
                    duration: 0.5,
                  });
                }
              },
            },
          }
        );
        gsap.fromTo(
          ref.current,
          {
            scale: 2.5,
            opacity: 1,
            z: 0,
          },
          {
            scale: 2.5,
            opacity: 0,
            z: -1000, 
            scrollTrigger: {
              trigger: ref.current,
              start: "center center",
              end: "center top-=100",
              scrub: 1,
              onLeave: () => {
                if (index < sections.length - 1) {
                  gsap.set(sections[index + 1].current, {
                    z: -800,
                    opacity: 0.3, 
                  });
                }
              },
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-gray-100 overflow-hidden" style={{ perspective: "1000px" }}>
      {/* Air Filters Section */}
      <section 
        ref={airFiltersRef} 
        className="py-20 sm:py-24 md:py-32 min-h-screen flex items-center overflow-hidden transform-style-preserve-3d"
        style={{ transformStyle: "preserve-3d" }}
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
                  
                  <a href="#"
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
        className="py-20 sm:py-24 md:py-32 min-h-screen flex items-center overflow-hidden transform-style-preserve-3d"
        style={{ transformStyle: "preserve-3d" }}
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
                
                <a href="#"
                  className="inline-block text-gray-dayRef700 font-semibold text-base sm:text-lg hover:text-green-700 transition-colors underline decoration-2 underline-offset-4"
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
        className="py-20 sm:py-24 md:py-32 pb-32 min-h-screen flex items-center overflow-hidden transform-style-preserve-3d"
        style={{ transformStyle: "preserve-3d" }}
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
                
                <a href="#"
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