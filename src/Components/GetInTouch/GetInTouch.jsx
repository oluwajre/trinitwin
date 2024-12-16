import React, { useState } from 'react';
import axios from 'axios';
import './GetInTouch.css';

const GetInTouch = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(''); // Clear status message

        try {
            const response = await axios.post('/.netlify/functions/sendEmail', formData);
            if (response.data.success) {
                setStatus('Email sent successfully!');
                console.log('confirm');
            } else {
                setStatus('Failed to send email.');
                console.log('failed');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred. Please try again.');
            console.log('error');
        }
    };

    return (
        <section className="getin-touch py-5">
            <div className='container'>
                <form className='row justify-content-start getin-touch-form py-5 px-3 shadow-lg' onSubmit={handleSubmit}>
                    <div className="col-12 mb-5 d-flex flex-column flex-sm-row justify-content-between align-items-sm-end align-items-start">
                        <div className='display-6 fw-bold mb-3 mb-sm-0'><span className='text-dark'>.</span> Get in <span className='text-primary'>Touch</span></div>
                        <div><a href="">See Google Map</a></div>
                    </div>
                    <div className="form-floating col-12 col-md-6 mb-3">
                        <input 
                            type="text" 
                            className="form-control border border-0 border-bottom" 
                            id="floatingInputName" 
                            placeholder="Tani Abereoje" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required
                        />
                        <label htmlFor="floatingInputName" className='ms-2'>Name</label>
                    </div>
                    <div className="form-floating col-12 col-md-6 mb-3">
                        <input 
                            type="email" 
                            className="form-control border border-0 border-bottom" 
                            id="floatingInputEmail" 
                            placeholder="name@example.com" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required
                        />
                        <label htmlFor="floatingInputEmail" className='ms-2'>Email address</label>
                    </div>
                    <div className="form-floating col-12 mb-3">
                        <textarea 
                            className="form-control border border-0 border-bottom" 
                            placeholder="Leave a message here" 
                            id="floatingTextarea2" 
                            style={{ height: '100px' }} 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            required
                        ></textarea>
                        <label htmlFor="floatingTextarea2" className='ms-2'>Message</label>
                    </div>

                    <button type='submit' className='btn btn-outline-primary border border-primary border-2 btn-padding mt-4 ms-2' style={{ maxWidth: '180px' }}>
                        Send
                    </button>
                    {status && <p className="mt-3 text-success">{status}</p>}
                </form>  
            </div>
        </section>
    );
};

export default GetInTouch;
