import React from 'react';
import './ServicesPage.css';
import { Navbar, HeroBanner, ServicesOverviewSection, TestimonialSection, PartnerSection, FooterSection } from '../../Components';
import { bannerInformationServices } from '../../Constants';
import { CarouselClick } from '../../utils';

const ServicesPage = () => {
  return (
    <>
      <CarouselClick />
      <Navbar page='services/our services'/>
      <HeroBanner bannerInformation={bannerInformationServices} />
      <ServicesOverviewSection />
      <TestimonialSection />
      <PartnerSection text={true}/>
      <FooterSection />
    </>
  )
}

export default ServicesPage