import React from 'react';
import './PartnerSection.css';
import { felicitysolar_logo, restarsolar_logo, sms_logo } from '../../assets/images';

const PartnerSection = ({ text }) => {
  return (
    <section className={`partners ${text? 'mt-5': null}`} id="partners" style={text? {backgroundColor: '#e9ecef'}: {backgroundColor: 'inherit'}}>
      <div className={`container ${text? 'py-5': 'pb-5'}`}>
        {text? (
          <div className="row text-center align-items-center pt-5">
            <div className="col-12">
              <p className='text-uppercase section-title-p text-primary'>Partners</p>
            </div>
            <div className="col-12">
              <h1 className='display-6 fw-bold mb-4'><span className='text-primary'>.</span> Trinitwin <span className='text-primary'>Brands</span></h1>
            </div>
        </div>
        ): null}
        

        <div className="row align-items-center justify-content-between text-center mt-3">
          <div className="col-12 col-sm-6 col-lg-3 mb-2 mb-sm-0">
            <img src={felicitysolar_logo} alt="felicity" className='img-fluid brand-image'/>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 mb-2 mb-sm-0">
            <img src={restarsolar_logo} alt="felicity" className='img-fluid brand-image'/>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 mb-2 mb-sm-0">
            <img src={sms_logo} alt="felicity" className='img-fluid brand-image'/>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 mb-2 mb-sm-0">
            <img src={felicitysolar_logo} alt="felicity" className='img-fluid brand-image'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnerSection