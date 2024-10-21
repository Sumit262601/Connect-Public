import React, { useState } from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Footer from './Footer';
import ScrollIcon from '../constant/Scrollbar';
import Service from './Service.jsx';
import CtaSection from './CTSSection.jsx'

const Home = () => {
  const [mode, setMode] = useState("light");

  const handleToggle = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };


  return (
    <>
      <Navbar />
      <HeroSection />
      <ScrollIcon />
      {/* <BrandSection /> */}
      <CtaSection />
      <Service />
      <Footer />
    </>
  )
}

export default Home