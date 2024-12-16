import React from 'react';
import './HomePage.css';
import { Navbar, HeroSection, ServicesSection, AboutSection, TestimonialSection, PartnerSection, GetInTouch, FooterSection } from '../../Components';

const HomePage = () => {
  return (
    <>
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialSection />
        <PartnerSection />
        <GetInTouch />
        <FooterSection />
    </>
  )
}

export default HomePage