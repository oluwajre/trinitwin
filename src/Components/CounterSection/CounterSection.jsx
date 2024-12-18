import React from 'react';
import './CounterSection.css';
import Counter from '../Counter/Counter';

const CounterSection = ({backgroundColor, alternate}) => {
  return (
    <section className="counter-section" style={{backgroundColor: backgroundColor}}>
        <div className="container">
            <div className="row my-5 p-5 justify-content-between">
                <div className="col-12 text-center my-0 my-sm-5">
                  <p className='text-uppercase section-title-p text-primary'>About</p>
                  <h1 className='display-6 fw-bold mb-4'><span className='text-primary'>.</span> Pure Numbers <span className='text-primary'>and Only</span></h1>
                </div>
                <Counter text='states' target='31' alternate={alternate}/>
                <Counter text='project' target='135' alternate={alternate}/>
                <Counter text='companies' target='105' alternate={alternate}/>
            </div>
        </div>
    </section>
  )
}

export default CounterSection