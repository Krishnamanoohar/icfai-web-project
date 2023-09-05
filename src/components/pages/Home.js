import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import HeroSection2 from '../HeroSection2'
import HeroSection3 from '../HeroSection3';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <HeroSection3/>
      <HeroSection2 />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;