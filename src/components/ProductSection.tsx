import React from "react";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";

const ProductsSection: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Air Filters Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div>
            {/* Header */}
            <div className="text-center mb-8">
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
            <div className="relative">
              <div
                className="relative bg-cover bg-center rounded-lg p-8 min-h-[400px] flex items-center justify-center"
                style={{
                  backgroundImage: `url(${product1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Center Product Image */}
                <div className="relative z-10 p-6 max-w-xs text-center">
                  <img
                    src={product2}
                    alt="Air Filter Product"
                    className="w-full h-auto mb-4"
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

      {/* CXP - Green Raw Materials Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div>
            {/* Header */}
            <div className="text-center mb-8">
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
              <div className="relative p-8 lg:p-12 flex flex-col items-center">
                {/* Product Image */}
                <div className="relative z-10 mb-6">
                  <img
                    src={product3}
                    alt="CXP Green Raw Materials"
                    className="w-full max-w-md h-auto object-contain"
                    style={{ maxWidth: "881px" }}
                  />
                </div>

                {/* Discover More Link */}
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
      </section>

      {/* TodayAday Sustainable Skincare Section */}
      <section className="py-12 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div>
            {/* Header */}
            <div className="text-center mb-8">
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
              <div className="relative p-8 lg:p-12 flex flex-col items-center">
                {/* Product Image */}
                <div className="relative z-10 mb-6">
                  <img
                    src={product4}
                    alt="TodayAday Skincare Products"
                    className="w-full max-w-md h-auto object-contain"
                    style={{ maxWidth: "572px" }}
                  />
                </div>

                {/* Discover More Link */}
                <a
                  href="#"
                  className="inline-block text-gray-700 font-semibold text-lg hover:text-green-700 transition-colors underline decoration-2 underline-offset-4 ml-30"
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