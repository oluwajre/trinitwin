import React from 'react';
import { Link } from 'react-router-dom';
import './AboutSection.css'
import Counter from '../Counter/Counter';
import { counter_homes, counter_buildings, counter_hospitals, counter_states } from '../../assets/images';

const AboutSection = () => {
  return (
    <section className="about mb-5" id="about">
        <div className="container">
            <p className='text-uppercase section-title-p text-primary appear'>About</p>
            <div className="row align-items-start justify-content-between text-left about-text-container appear">
                <div className="col-10 col-sm-8 col-lg-5">
                    <h1 className='display-6 fw-bold mb-4' style={{maxWidth: '400px'}}><span className='text-primary'>.</span> Welcome to Our <span className='text-primary'>TriniTwin Company</span></h1>
                </div>
                <div className="col-lg-7">
                    <p>
                        TriniTwin is committed to providing reliable solar energy installations, advanced security systems, and expert electrical wiring services. Led by Mr. Anthony Abereoje, our company focuses on delivering sustainable, efficient solutions that power homes and businesses while promoting a greener future.
                    </p>
                    <p>
                        With a strong partnership with top industry brands, we ensure the highest quality and performance in every project. Our goal is to help you reduce energy costs, improve security, and create safer, more efficient environments for your home or business.
                    </p>
                    <Link to="/about" className='fw-bold explore-more'>Explore More<span className='align-middle ms-3' /></Link>
                </div>
            </div>

            <div className="row mt-5 p-5 shadow justify-content-between">
                <Counter text='States' target='9'  imgSrc={counter_states} alternate={false}/>
                <Counter text='Public Sector & Institutions' target='18'  imgSrc={counter_hospitals} alternate={false}/>
                <Counter text='Commercial & Industrial' target='39'  imgSrc={counter_buildings} alternate={false}/>
                <Counter text='Homes' target='154'  imgSrc={counter_homes} alternate={false}/>
            </div>
        </div>
    </section>
  )
}

export default AboutSection