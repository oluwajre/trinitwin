import React from 'react';
import './ServiceColumn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ServiceColumn = ({ data }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 appear">
        <div className='services-columns position-relative pt-4 overflow-hidden'>
            <img src={data.imageSource} alt="" className='z-0 position-absolute top-0 start-0' />
            <div className="image-overlay position-absolute top-0 start-0" />
            <p className='z-1 position-relative text-light text-uppercase section-title-p px-4'>{data.subHeading}</p>

            <div className="text-overlay-container">
                <h1 className='text-white display-1 fw-bold opacity-50 px-4' style={{fontSize: '5em'}}>{data.number}</h1>
                <div className='text-overlay px-4 pb-4'>
                    <div className='d-flex align-items-center justify-content-between py-4'>
                        <h4 className='my-0'><Link to={data.link}>{data.heading}</Link></h4>
                        <FontAwesomeIcon icon={faChevronRight} className='icon text-light' />
                    </div>
                    <div>
                        <p className='text-secondary mb-0'>{data.text}</p>
                        <Link to={data.link} className='fw-bold explore-more'>Explore More<span className='align-middle ms-3' /></Link>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceColumn