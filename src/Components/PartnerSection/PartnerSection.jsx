import React, { useEffect } from 'react';
import './PartnerSection.css';
import { felicitysolar_logo, restarsolar_logo, sms_logo } from '../../assets/images';

const PartnerSection = ({ text }) => {

  useEffect(() => {
    const logosContainer = document.querySelector('.logos');

    if (logosContainer) {
        const logosSlide = document.querySelector('.logos-slide');

        if (logosSlide) {
            // Clone the children of logosSlide and append them to a new div
            const children = Array.from(logosSlide.children);
            const clonedLogosSlide = logosSlide.cloneNode(false);  // Create an empty clone of logosSlide

            children.forEach((child) => {
                const cloneChild = child.cloneNode(true); // Clone each child
                clonedLogosSlide.appendChild(cloneChild);  // Append cloned child to the new cloned div
            });

            // Add the animation class to both slides
            logosSlide.classList.add('infiniteslider');
            clonedLogosSlide.classList.add('infiniteslider');

            // Append the cloned logosSlide to the logosContainer
            logosContainer.appendChild(clonedLogosSlide);
        }
    }
}, []);





  return (
    <section className={`partners ${text? 'mt-5': null}`} id="partners" style={text? {backgroundColor: '#e9ecef'}: {backgroundColor: 'inherit'}}>
      <div className={`container ${text? 'py-5': 'pb-5'}`}>
        {text? (
          <div className="row text-center align-items-center pt-5">
            <div className="col-12">
              <p className='text-uppercase section-title-p text-primary'>Some of our Partners</p>
            </div>
            <div className="col-12">
              <h1 className='display-6 fw-bold mb-4'><span className='text-primary'>.</span> Trinitwin <span className='text-primary'>Brands</span></h1>
            </div>
        </div>
        ): null}
        

        <div className="mt-3 logos">

          <div className="logos-slide">
            <img src={felicitysolar_logo} alt="felicity" className='img-fluid brand-image mx-4'/>
            <img src={restarsolar_logo} alt="felicity" className='img-fluid brand-image mx-4'/>
            <img src={sms_logo} alt="felicity" className='img-fluid brand-image mx-4'/>
          </div>

        </div>

      </div>
    </section>
  )
}

export default PartnerSection