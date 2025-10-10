import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ProductsSection = () => {
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const product1Ref = useRef<HTMLDivElement>(null);
  const product2Ref = useRef<HTMLDivElement>(null);
  const product3Ref = useRef<HTMLDivElement>(null);

  const initAnimation = () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const startScale = 0.5;
    const behindScale = 0.5;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollSectionRef.current,
        start: "top 50%",
        end: "bottom 50%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    // PRODUCT 1: Scales up and fades out (0-33% of scroll)
    tl.fromTo(
      product1Ref.current,
      {
        scale: startScale,
        opacity: 1,
        zIndex: 30,
      },
      {
        scale: 50,
        opacity: 1,
        duration: 30,
        ease: "power1.in",
      },
      0
    ).to(
      product1Ref.current,
      {
        opacity: 0,
        duration: 3,
        ease: "power1.in",
      },
      30
    );

    // PRODUCT 2: Fades in while Product 1 is still scaling (15-66% of scroll)
    tl.fromTo(
      product2Ref.current,
      {
        scale: behindScale,
        opacity: 0,
        zIndex: 20,
      },
      {
        scale: behindScale,
        opacity: 0.3,
        duration: 8,
        ease: "power1.out",
      },
      15
    )
      .to(
        product2Ref.current,
        {
          scale: behindScale,
          opacity: 1,
          duration: 10,
          ease: "power1.inOut",
        },
        23
      )
      .to(
        product2Ref.current,
        {
          scale: startScale,
          opacity: 1,
          duration: 5,
          ease: "power1.inOut",
        },
        33
      )
      .to(
        product2Ref.current,
        {
          scale: 50,
          opacity: 1,
          duration: 30,
          ease: "power1.in",
        },
        38
      )
      .to(
        product2Ref.current,
        {
          opacity: 0,
          duration: 3,
          ease: "power1.in",
        },
        68
      );

    // PRODUCT 3: Fades in while Product 2 is still scaling (48-100% of scroll)
    tl.fromTo(
      product3Ref.current,
      {
        scale: 0.15,
        opacity: 0,
        zIndex: 10,
      },
      {
        scale: 0.15,
        opacity: 0.3,
        duration: 8,
        ease: "power1.out",
      },
      48
    )
      .to(
        product3Ref.current,
        {
          scale: 0.15,
          opacity: 1,
          duration: 10,
          ease: "power1.inOut",
        },
        56
      )
      .to(
        product3Ref.current,
        {
          scale: 0.2,
          opacity: 1,
          duration: 5,
          ease: "power1.inOut",
        },
        66
      )
      .to(
        product3Ref.current,
        {
          scale: 0.4 * 1.5,
          opacity: 1,
          duration: 25,
          ease: "power1.inOut",
        },
        71
      );
  };

  useEffect(() => {
    initAnimation();

    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        initAnimation();
      }, 250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={scrollSectionRef}
      className="relative"
      style={{ height: "900vh", backgroundColor: "#f2f2f2" }}
    >
      <div className="font-sora sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Product 1 - Air Filters */}
        <div
          ref={product1Ref}
          className="absolute w-full h-full flex flex-col items-center px-5"
          style={{
            willChange: "opacity",
            zIndex: 30,
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-green-800 mb-6 leading-tight whitespace-nowrap">
              Air Filters
            </h1>
          </div>

          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full text-center"
            style={{ marginTop: "20px" }}
          >
            <div
              className="product-image-wrapper"
              style={{
                transformOrigin: "center center",
                willChange: "transform",
              }}
            >
              <img
                src={product2}
                alt="Air Filter Product"
                className="w-full max-w-md h-32 mx-auto mb-4 object-contain"
              />
            </div>

            <a
              href="#"
              className="inline-block text-center text-black text-lg font-normal underline hover:text-green-800 transition-colors duration-300 cursor-pointer"
            >
              Discover More
            </a>
          </div>
        </div>

        {/* Product 2 - TodayAday */}
        <div
          ref={product2Ref}
          className="absolute w-full h-full flex flex-col items-center px-5"
          style={{
            willChange: "opacity",
            zIndex: 20,
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-green-800 mb-6 leading-tight whitespace-nowrap">
              TodayAday
            </h1>
          </div>

          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full text-center"
            style={{ marginTop: "28px" }}
          >
            <div
              className="product-image-wrapper"
              style={{
                transformOrigin: "center center",
                willChange: "transform",
              }}
            >
              <img
                src={product3}
                alt="Skincare Product"
                className="w-full max-w-md h-96 mx-auto mb-4 object-contain"
              />
            </div>

            <a
              href="#"
              className="inline-block text-center text-black text-lg font-normal underline hover:text-green-800 transition-colors duration-300 cursor-pointer"
            >
              Discover More
            </a>
          </div>
        </div>

        {/* Product 3 - CXP */}
        <div
          ref={product3Ref}
          className="absolute w-full h-full flex flex-col items-center px-5"
          style={{
            transform: "scale(0.4)",
            transformOrigin: "center 30%",
            opacity: 0,
            willChange: "transform, opacity",
            zIndex: 10,
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-green-800 mb-6 leading-tight whitespace-nowrap">
              CXP
            </h1>
          </div>

          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full text-center"
            style={{ marginTop: "20px" }}
          >
            <img
              src={product4}
              alt="Green Raw Materials Product"
              className="w-full max-w-md h-[500px] mx-auto mb-4 object-contain"
              style={{
                transformOrigin: "center center",
                willChange: "transform",
              }}
            />

            <a
              href="#"
              className="inline-block text-center text-black text-lg font-normal underline hover:text-green-800 transition-colors duration-300 cursor-pointer"
            >
              Discover More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;