import { useEffect, useState, useRef } from 'react';
import video from '../assets/video.mp4';

const BrandHighlights = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
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

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionMiddle = rect.top + rect.height / 2;
        
        // Calculate how far from center (0 = at center, positive = above, negative = below)
        const distanceFromCenter = (windowHeight / 2) - sectionMiddle;
        
        // Normalize to -1 to 1 range
        const normalizedDistance = Math.max(-1, Math.min(1, distanceFromCenter / (windowHeight / 2)));
        
        setScrollProgress(normalizedDistance);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftCards = [
    {
      title: "Sustainability at Root",
      description: "Every decision, from materials to manufacturing, is made with environmental responsibility in mind."
    },
    {
      title: "Design Meets Function",
      description: "We believe beauty and performance should never be separate."
    },
    {
      title: "Wellness Beyond Self",
      description: "Products that improve not only personal health, but the health of the spaces we live in."
    }
  ];

  const rightCards = [
    {
      title: "Innovation with Purpose",
      description: "Our patents and R&D aren't just for progress-they're for impact."
    },
    {
      title: "Global Standards, Local Relevance",
      description: "Technology born in South Korea, adapted for India's unique needs."
    },
    {
      title: "Wellness Beyond Self",
      description: "Products that improve not only personal health, but the health of the spaces we live in."
    }
  ];

  const baseOffset = 0; 
  const maxTranslate = 100;
  
  const getLeftCardTranslate = (index: number) => {
    const stagger = 0.5;
    const cardProgress = scrollProgress * (1 - index * stagger);
    return baseOffset + (-cardProgress * maxTranslate);
  };

  const getRightCardTranslate = (index: number) => {
    const stagger = 0.5;
    const cardProgress = scrollProgress * (1 - index * stagger);
    return baseOffset + (cardProgress * maxTranslate);
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-white min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Brand Highlights Value
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed px-4">
            Rooted in South Korea's culture of precision, wellness, and respect for nature, ECDS was founded with one clear mission to reduce carbon emissions & create solutions that are as kind to the planet as they are effective for people
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 items-center overflow-hidden">
          {/* Left Cards */}
          <div className="space-y-4 md:space-y-6 order-1 lg:order-1 overflow-hidden">
            {leftCards.map((card, index) => (
              <div
                key={index}
                className={`p-4 md:p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-xl ${
                  isVisible 
                    ? 'opacity-100' 
                    : 'opacity-0'
                }`}
                style={{
                  background: 'linear-gradient(to bottom right, #D4B484, #405E42)',
                  transform: isVisible ? `translateX(${Math.min(0, getLeftCardTranslate(index))}px)` : 'translateX(-80px)',
                  transition: isVisible ? 'transform 0.3s ease-out, opacity 0.7s, box-shadow 0.3s' : 'all 0.7s',
                  transitionDelay: isVisible ? '0ms' : `${index * 150}ms`,
                  zIndex: 1
                }}
              >
                <h3 className="text-white font-bold text-base md:text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-white text-xs md:text-sm">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Video */}
          <div className="flex justify-center order-2 lg:order-2 overflow-hidden">
            <div className={`relative transform transition-all duration-1000 w-full max-w-sm ${
              isVisible 
                ? 'opacity-100 scale-100 rotate-0' 
                : 'opacity-0 scale-75 rotate-3'
            }`}
            style={{ transitionDelay: '300ms', zIndex: 10 }}
            >
              <div 
                className="w-full rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300 overflow-hidden p-1"
                style={{
                  background: 'linear-gradient(to bottom right, #D4B484, #405E42)'
                }}
              >
                <div className="rounded-md overflow-hidden bg-black">
                  <video
                    className="w-full h-auto"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="space-y-4 md:space-y-6 order-3 lg:order-3 overflow-hidden">
            {rightCards.map((card, index) => (
              <div
                key={index}
                className={`p-4 md:p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-xl ${
                  isVisible 
                    ? 'opacity-100' 
                    : 'opacity-0'
                }`}
                style={{
                  background: 'linear-gradient(to bottom right, #D4B484, #405E42)',
                  transform: isVisible ? `translateX(${Math.max(0, getRightCardTranslate(index))}px)` : 'translateX(80px)',
                  transition: isVisible ? 'transform 0.3s ease-out, opacity 0.7s, box-shadow 0.3s' : 'all 0.7s',
                  transitionDelay: isVisible ? '0ms' : `${index * 150}ms`,
                  zIndex: 1
                }}
              >
                <h3 className="text-white font-bold text-base md:text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-white text-xs md:text-sm">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandHighlights;