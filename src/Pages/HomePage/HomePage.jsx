import React, { useEffect } from 'react';
import './HomePage.css';
import { Navbar, HeroSection, ServicesSection, AboutSection, TestimonialSection, PartnerSection, GetInTouch, FooterSection } from '../../Components';
import { CarouselClick } from '../../utils';

const HomePage = () => {

  return (
    <>
        <CarouselClick />
        <Navbar page='home' />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialSection />
        <PartnerSection text={true}/>
        <section className="getin-touch py-5">
          <div className="container">
            <GetInTouch isFormComplete={false} />
          </div>
        </section>
        <FooterSection />
    </>
  )
}

export default HomePage