import React from 'react';
import './GetInTouch.css';

const GetInTouch = () => {
  return (
    <section className="getin-touch py-5">
        <div className='container'>
            <form className='row justify-content-start getin-touch-form py-5 px-3 shadow-lg'>
                <div className="col-12 mb-5 d-flex flex-column flex-sm-row justify-content-between align-items-sm-end align-items-start">
                    <div className='display-6 fw-bold mb-3 mb-sm-0'><span className='text-dark'>.</span> Get in <span className='text-primary'>Touch</span></div>
                    <div><a href="">See Google Map</a></div>
                </div>
                <div className="form-floating col-12 col-md-6 mb-3">
                    <input type="text" className="form-control border border-0 border-bottom" id="floatingInputName" placeholder="Tani Abereoje" required/>
                    <label htmlFor="floatingInputName" className='ms-2'>Name</label>
                </div>
                <div className="form-floating col-12 col-md-6 mb-3">
                    <input type="email" className="form-control border border-0 border-bottom" id="floatingInputEmail" placeholder="name@example.com" required/>
                    <label htmlFor="floatingInputEmail" className='ms-2'>Email address</label>
                </div>
                <div className="form-floating col-12 mb-3">
                    <textarea className="form-control border border-0 border-bottom" placeholder="Leave a message here" id="floatingTextarea2" style={{height: '100px'}} required></textarea>
                    <label htmlFor="floatingTextarea2" className='ms-2'>Message</label>
                </div>

                <button type='submit' className='btn btn-outline-primary border border-primary border-2 btn-padding mt-4 ms-2' style={{maxWidth: '180px'}}>Send</button>
            </form>  
        </div>
    </section>
  )
}

export default GetInTouch