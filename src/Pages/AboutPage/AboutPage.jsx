import React from 'react';
import './AboutPage.css';
import { Navbar, HeroBanner, AboutOveriewSection, PartnerSection } from '../../Components';
import { bannerInformationAbout } from '../../Constants';

const AboutPage = () => {

  return (
    <>
        <Navbar page='About' />
        <HeroBanner bannerInformation={bannerInformationAbout} />
        <AboutOveriewSection />
        <PartnerSection text={false}/>
        <div className='text-center mt-4 mb-5'>
            <h1 className="display-1 text-primary component-title p-0 m-0">. Just like us</h1>
            <p className='lead fw-normal p-0 m-0'>Creating technology is always based on perfect relationships</p>
        </div>
    </>
  )
}

export default AboutPage