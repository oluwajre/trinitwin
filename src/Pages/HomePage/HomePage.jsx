import React from 'react';
import './HomePage.css';
import { Navbar, HeroSection, ServicesSection, AboutSection, TestimonialSection, PartnerSection, GetInTouch, FooterSection } from '../../Components';

const HomePage = () => {
  return (
    <>
        <Navbar page='home' />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialSection />
        <PartnerSection text={true}/>
        <GetInTouch />
        <FooterSection />
    </>
  )
}

export default HomePage