import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
}

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Abodah, under the umbrella of Zennial Pro, has completely transformed our approach to learning and development. Their tailored solutions have not only improved employee engagement but also boosted productivity across our organization. Working with Abodah has been a game-changer for us.",
      author: "David Lee",
      position: "HR Director, Tech Innovations Inc.",
    },
    {
      id: 2,
      text: "The team's dedication and expertise have made a significant impact on our business operations. Their innovative approach continues to exceed our expectations.",
      author: "Sarah Johnson",
      position: "CEO, Global Solutions Ltd.",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      className="relative py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(to bottom right, #D4B484, #405E42)'
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Voices of Trust
          </h2>
          <p className="text-lg text-gray-800">
            Real feedback from businesses who chose us
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="bg-gradient-to-br from-amber-100/60 via-stone-200/50 to-emerald-900/40 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="mb-6">
              <svg className="w-12 h-12 text-white opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </div>

            {/* Testimonial Text */}
            <p className="text-white text-base md:text-lg leading-relaxed mb-8">
              {testimonials[currentIndex].text}
            </p>

            {/* Author Info */}
            <div>
              <p className="text-white font-semibold text-lg">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-white text-sm">
                {testimonials[currentIndex].position}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-700 hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-700 hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;