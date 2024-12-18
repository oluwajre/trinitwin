import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
  return (
    <section className="team my-5" id="team">
        <div className="container py-5">
            <div className="row text-center">
                <p className='text-uppercase section-title-p text-primary m-0 mb-3 p-0'>OUR FOUNDER</p>
                <h1 className='display-6 fw-bold m-0 mb-4 p-0'><span className='text-primary'>.</span> Meet the <span className='text-primary'>CEO</span></h1>
                <p className='mx-auto' style={{maxWidth: '650px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt accusantium culpa repellendus. Iste aliquid debitis minus repellendus? Dolore, nulla ex?</p>
            </div>

            {/* <div className="row">

            </div> */}
        </div>
    </section>
  )
}
export default TeamSection