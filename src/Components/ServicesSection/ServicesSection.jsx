import React from 'react';
import './ServicesSection.css';
import { logo, service_solar, service_cctv, service_electrical } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


const ServicesSection = () => {
  return (
    <section className="services" id="services">
        <div className="container">

            <div className="row align-items-center">
                <p className='text-uppercase section-title-p text-primary'>Services</p>
                <div className="col-lg-7 mb-4">
                    <div className="row">
                        <div className="col-9 col-lg-7"><h1 className='display-6 fw-bold mb-0'>Welcome to Trinitwin Services</h1></div>
                        <div className="col-3 col-lg-5 align-right">
                            <img src={logo} alt="logo-black" className='img-fluid logo'/>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-5">
                    <p className='mb-1'>
                    Trinitwin Energy offers expert solutions in solar energy installation, advanced security systems, and professional electrical wiring. Our services are designed to enhance sustainability, security, and efficiency for homes and businesses alike.
                    </p>
                    <a href="" className='fw-bold explore-more'>Explore More<span className='align-middle ms-3' /></a>
                </div>
            </div>

            <div className="row align-items-center justify-content-center justify-content-lg-between g-4 mt-5">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className='services-columns position-relative pt-4 overflow-hidden'>
                        <img src={service_solar} alt="" className='z-0 position-absolute top-0 start-0' />
                        <div className="image-overlay position-absolute top-0 start-0" />
                        <p className='z-1 position-relative text-light text-uppercase section-title-p px-4'>SOLAR</p>

                        <div className="text-overlay-container">
                            <h1 className='text-white display-1 fw-bold opacity-50 px-4' style={{fontSize: '5em'}}>01</h1>
                            <div className='text-overlay px-4 pb-4'>
                                <div className='d-flex align-items-center justify-content-between py-4'>
                                    <h4 className='my-0'>Solar Installation</h4>
                                    <FontAwesomeIcon icon={faChevronRight} className='icon text-light' />
                                </div>
                                <div>
                                    <p className='text-secondary mb-0'>Customized solar energy solutions to lower electricity costs and promote eco-friendly energy usage.</p>
                                    <a href="" className='fw-bold explore-more'>Explore More<span className='align-middle ms-3' /></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <div className='services-columns position-relative pt-4 overflow-hidden'>
                        <img src={service_cctv} alt="" className='z-0 position-absolute top-0 start-0' />
                        <div className="image-overlay position-absolute top-0 start-0" />
                        <p className='z-1 position-relative text-light text-uppercase section-title-p px-4'>CCTV</p>

                        <div className="text-overlay-container">
                            <h1 className='text-white display-1 fw-bold opacity-50 px-4' style={{fontSize: '5em'}}>02</h1>
                            <div className='text-overlay px-4 pb-4'>
                                <div className='d-flex align-items-center justify-content-between py-4'>
                                    <h4 className='my-0'>CCTV Installation</h4>
                                    <FontAwesomeIcon icon={faChevronRight} className='icon text-light' />
                                </div>
                                <div>
                                    <p className='text-secondary mb-0'>Reliable surveillance systems providing 24/7 security and peace of mind for homes and businesses.</p>
                                    <a href="" className='fw-bold explore-more'>Explore More<span className='align-middle ms-3' /></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <div className='services-columns position-relative pt-4 overflow-hidden'>
                        <img src={service_electrical} alt="" className='z-0 position-absolute top-0 start-0' />
                        <div className="image-overlay position-absolute top-0 start-0" />
                        <p className='z-1 position-relative text-light text-uppercase section-title-p px-4'>ELECTRICAL</p>

                        <div className="text-overlay-container">
                            <h1 className='text-white display-1 fw-bold opacity-50 px-4' style={{fontSize: '5em'}}>03</h1>
                            <div className='text-overlay px-4 pb-4'>
                                <div className='d-flex align-items-center justify-content-between py-4'>
                                    <h4 className='my-0'>Electrical Wiring</h4>
                                    <FontAwesomeIcon icon={faChevronRight} className='icon text-light' />
                                </div>
                                <div>
                                    <p className='text-secondary mb-0'>Expert wiring services ensuring safety, efficiency, and compliance for residential and commercial properties.</p>
                                    <a href="" className='fw-bold explore-more'>Explore More<span className='align-middle ms-3' /></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </section>
  )
}

export default ServicesSection