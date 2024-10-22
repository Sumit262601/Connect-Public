import React, { useState } from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Footer from './Footer';
import ScrollIcon from '../constant/Scrollbar';
import Service from './Service.jsx';
import CtaSection from './CTSSection.jsx'

const Home = () => {
  return (
    <div >
      <Navbar />
      <HeroSection />
      <ScrollIcon />
      {/* <BrandSection /> */}
      <CtaSection />
      <Service />
      <Footer />
    </div>
  )
}

export default Home