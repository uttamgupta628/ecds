import React, { useState, useEffect, useRef } from 'react';
import Team from '../assets/Team.png'

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

const TeamSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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
      { threshold: 0.2 }
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

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Rohit Aggarwal',
      position: 'Project Manager',
      image: Team
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Lead Designer',
      image: Team
    },
    {
      id: 3,
      name: 'Mike Chen',
      position: 'Senior Developer',
      image: Team
    }
  ];

  const getVisibleMembers = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % teamMembers.length;
      visible.push(teamMembers[index]);
    }
    return visible;
  };

  return (
    <div ref={sectionRef} className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-10'
          }`}>
            Meet Our Team
          </h2>
          <p className={`text-2xl text-gray-700 transition-all duration-1000 delay-200 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-10'
          }`}>
            Real feedback from businesses who chose us
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {getVisibleMembers().map((member, idx) => (
            <div key={member.id} className="flex justify-center">
              <div
                className={`relative rounded-3xl overflow-hidden shadow-xl transition-all duration-700 hover:scale-105 hover:shadow-2xl group ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 rotate-0' 
                    : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  width: '378.67px', 
                  height: '380px', 
                  maxWidth: '100%',
                  transitionDelay: `${400 + idx * 200}ms`
                }}
              >
                {/* Team Member Image */}
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                      isVisible ? 'scale-100' : 'scale-110'
                    }`}
                    style={{ transitionDelay: `${500 + idx * 200}ms` }}
                  />
                </div>

                {/* Bottom Name Card with Gradient */}
                <div
                  className={`absolute bottom-0 left-0 right-0 text-white py-4 px-6 rounded-b-3xl transition-all duration-700 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    background: 'linear-gradient(to right, #D4B484, #405E42)',
                    transitionDelay: `${600 + idx * 200}ms`
                  }}
                >
                  <h3 className={`text-xl font-semibold text-center transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                  }`}
                  style={{ transitionDelay: `${700 + idx * 200}ms` }}
                  >
                    {member.name}
                  </h3>
                  <p className={`text-sm text-center opacity-90 transition-all duration-500 ${
                    isVisible ? 'opacity-90 translate-x-0' : 'opacity-0 translate-x-5'
                  }`}
                  style={{ transitionDelay: `${800 + idx * 200}ms` }}
                  >
                    {member.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className={`flex justify-center gap-2 transition-all duration-1000 delay-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-5'
        }`}>
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentIndex
                  ? 'w-8 h-3 bg-emerald-700'
                  : 'w-3 h-3 bg-gray-400 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;