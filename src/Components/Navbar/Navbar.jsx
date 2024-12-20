import React, { useState } from 'react';
import './Navbar.css';
import { logo } from '../../assets/images';
import { contactdata } from '../../Constants';
import { Link } from 'react-router-dom';

const Navbar = ({ page }) => {
    const [collapse, setCollapse] = useState(true);

  return (
    <section className="navbar-container sticky-top" id="navbar">
        <nav className="navbar navbar-expand-md bg-body-tertiary shadow py-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Trinitwin" width="40" className='img-fluid me-3' />
                    Trinitwin
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => {setCollapse(!collapse)}}>
                    {collapse? (
                        <span className="navbar-toggler-icon"></span>
                    ):(
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                        </svg>
                    )}
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto align-items-center">
                        <li className="nav-item">
                        <Link to='/' className={`nav-link text-uppercase py-md-3 px-md-0 mx-md-2 my-1 my-md-0 ${page.toLowerCase()==='home'? 'active': ''}`} aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/about' className={`nav-link text-uppercase py-md-3 px-md-0 mx-md-2 my-1 my-md-0 ${page.toLowerCase()==='about'? 'active': ''}`}>About</Link>
                        </li>
                        <li className="nav-item">
                        <a className={`nav-link text-uppercase py-md-3 px-md-0 mx-md-2 my-1 my-md-0 ${page.toLowerCase()==='services'? 'active': ''}`} href="#">Services</a>
                        </li>
                        <li className="nav-item">
                        <a className={`nav-link text-uppercase py-md-3 px-md-0 mx-md-2 my-1 my-md-0 ${page.toLowerCase()==='products'? 'active': ''}`} href="#">Products</a>
                        </li>
                        <li className="nav-item">
                        <a className={`nav-link text-uppercase py-md-3 px-md-0 mx-md-2 my-1 my-md-0 ${page.toLowerCase()==='project'? 'active': ''}`} href="#">Project</a>
                        </li>
                        <li className="nav-item">
                        <Link to='/contact' className={`nav-link text-uppercase py-md-3 px-md-0 mx-md-2 my-1 my-md-0 ${page.toLowerCase()==='contact'? 'active': ''}`}>Contact</Link>
                        </li>
                    </ul>

                    <div className='d-flex flex-column flex-md-row justify-content-center align-items-center mt-3 mt-md-0'>
                        <a href={contactdata.whatsapp} className='btn btn-outline-primary border border-primary border-2 d-none d-md-inline-flex btn-padding'>Get In Touch</a>
                        <a href={contactdata.whatsapp} className='btn btn-primary border-2 d-inline-flex d-md-none btn-padding'>Get In Touch</a>
                        <div className='d-inline-flex flex-column text-center d-md-none mt-5' style={{maxWidth: '300px'}}>
                            <p><a>{contactdata.address}</a></p>
                            <p><a href={`tel:${contactdata.phone_1}`}>{contactdata.phone_1}</a></p>
                            <p><a href={`mailto:${contactdata.email}`}>{contactdata.email}</a></p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </nav>
    </section>
  )
}

export default Navbar