import React from 'react';
import './AboutSection.css'
import Counter from '../Counter/Counter';

const AboutSection = () => {
  return (
    <section className="about mb-5" id="about">
        <div className="container">
            <p className='text-uppercase section-title-p text-primary'>About</p>
            <div className="row align-items-start justify-content-between text-left about-text-container">
                <div className="col-10 col-sm-8 col-lg-5">
                    <h1 className='display-6 fw-bold mb-4' style={{maxWidth: '400px'}}><span className='text-primary'>.</span> Welcome to Our <span className='text-primary'>Trinitwin Company</span></h1>
                </div>
                <div className="col-lg-7">
                    <p>
                        Trinitwin is committed to providing reliable solar energy installations, advanced security systems, and expert electrical wiring services. Led by Mr. Anthony Abereoje, our company focuses on delivering sustainable, efficient solutions that power homes and businesses while promoting a greener future.
                    </p>
                    <p>
                        With a strong partnership with top industry brands, we ensure the highest quality and performance in every project. Our goal is to help you reduce energy costs, improve security, and create safer, more efficient environments for your home or business.
                    </p>
                    <a href="" className='fw-bold explore-more'>Explore More<span className='align-middle ms-3' /></a>
                </div>
            </div>

            <div className="row mt-5 p-5 shadow justify-content-between">
                <Counter text='states' target='31' alternate={false}/>
                <Counter text='project' target='135' alternate={false}/>
                <Counter text='companies' target='105' alternate={false}/>
            </div>
        </div>
    </section>
  )
}

export default AboutSection