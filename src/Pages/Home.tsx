import React from 'react';
import HeroSection from '../components/HeroSection';
import BrandHighlights from '../components/BrandHighLight';
import ProductsSection from '../components/ProductSection';
import VideoSection from '../components/Video';
import TestimonialsSection from '../components/TestimonialsSection'


const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <BrandHighlights/>
      <ProductsSection/>
      <VideoSection  />
      <TestimonialsSection/>
    </div>
  );
};

export default Home;