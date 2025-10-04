import React from 'react';
import AboutHero from '../components/AboutHero';
import AboutProduction from '../components/AboutProduction';
import VideoSection from '../components/Video';
import TeamSection from '../components/AboutOurTeam';
import AboutAchievement from '../components/AboutAchievement';
import TestimonialsSection from '../components/TestimonialsSection'

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <AboutHero /> 
      <AboutProduction />
      <VideoSection />
      <TeamSection />
      <AboutAchievement />
      <TestimonialsSection/>
    </div>
  );
};

export default About;