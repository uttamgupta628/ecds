import React, { useState } from 'react';
import Team from '../assets/Team.png'

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

const TeamSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-2xl text-gray-700">
            Real feedback from businesses who chose us
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {getVisibleMembers().map((member) => (
            <div key={member.id} className="flex justify-center">
              <div
                className="relative rounded-3xl overflow-hidden shadow-xl"
                style={{ width: '378.67px', height: '380px', maxWidth: '100%' }}
              >
                {/* Team Member Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />

                {/* Bottom Name Card with Gradient */}
                <div 
                  className="absolute bottom-0 left-0 right-0 text-white py-4 px-6 rounded-b-3xl"
                  style={{ background: 'linear-gradient(to right, #D4B484, #405E42)' }}
                >
                  <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                  <p className="text-sm text-center opacity-90">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 h-3 bg-emerald-700'
                  : 'w-3 h-3 bg-gray-400'
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