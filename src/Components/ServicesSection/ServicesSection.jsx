import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesSection.css';
import { logo } from '../../assets/images';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ServiceColumn from '../ServiceColumn/ServiceColumn';
import { servicecolumndata } from '../../Constants';


const ServicesSection = () => {
  return (
    <section className="services" id="services">
        <div className="container">

            <div className="row align-items-center appear">
                <p className='text-uppercase section-title-p text-primary'>Services</p>
                <div className="col-lg-7 mb-4 appear">
                    <div className="row">
                        <div className="col-9 col-lg-7"><h1 className='display-6 fw-bold mb-0'>Welcome to TriniTwin Services</h1></div>
                        <div className="col-3 col-lg-5 align-right">
                            <img src={logo} alt="logo-black" className='img-fluid logo'/>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-5">
                    <p className='mb-1'>
                    TriniTwin Energy offers expert solutions in solar energy installation, advanced security systems, and professional electrical wiring. Our services are designed to enhance sustainability, security, and efficiency for homes and businesses alike.
                    </p>
                    <Link to="/services" className='fw-bold explore-more'>Explore More<span className='align-middle ms-3' /></Link>
                </div>
            </div>

            <div className="row align-items-center justify-content-center justify-content-lg-between g-4 mt-5">
                {servicecolumndata.slice(0, 3).map((element, index) => {
                    return <ServiceColumn data={element} key={index} />
                })}

            </div>
        </div>
    </section>
  )
}

export default ServicesSection