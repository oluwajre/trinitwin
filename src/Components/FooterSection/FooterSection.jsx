import React, { useEffect, useState } from 'react';
import './FooterSection.css';
import { contactdata } from '../../Constants';
import { logo } from '../../assets/images';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const FooterSection = () => {
    const [currentYear, setCurrentYear] = useState(null);
    useEffect(()=> {
        let currentYear = new Date().getFullYear();
        setCurrentYear(currentYear);
    }, []);

  return (
    <section className="footer bg-dark py-5" id="footer">
        <div className="container text-secondary">
            <div className="row justify-content-between">
                <div className="col-12 col-lg-3 mb-3 mb-lg-0">
                    <div className='d-flex justify-content-start mb-3 align-items-center'>
                        <a href=""><img src={logo} alt="logo" className='img-fluid me-3' style={{maxWidth: '45px'}} /></a>
                        <h4 className="text-light m-0">Trinitwin</h4>
                    </div>
                    <p>{contactdata.address}</p>
                    <p>Phone: <a href={`tel: ${contactdata.phone_1}`}>{contactdata.phone_1}</a></p>
                    <p>Email: <a href={`mailto: ${contactdata.email}`}>{contactdata.email}</a></p>
                </div>
                <div className="col-12 col-lg-3 mb-3 mb-lg-0">
                    <h5 className="text-light m-0 mb-2 mb-lg-4 mt-2 fw-bold">Company and Links</h5>
                    <ul className="footer-link-group">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/'>Project</Link></li>
                    </ul>
                </div>
                <div className="col-12 col-lg-3 mb-3 mb-lg-0">
                    <h5 className="text-light m-0 mb-2 mb-lg-4 mt-2 fw-bold">Socials</h5>
                    <div className="socials">
                        <a href={contactdata.facebook} target='blank'><FontAwesomeIcon icon={faFacebookF} className='pe-2 me-2 icon' /></a>
                        <a href={contactdata.instagram} target='blank'><FontAwesomeIcon icon={faInstagram} className='px-2 me-2 icon' /></a>
                        <a href={contactdata.linkedin} target='blank'><FontAwesomeIcon icon={faLinkedinIn} className='px-2 me-2 icon' /></a>
                        <a href={contactdata.whatsapp} target='blank'><FontAwesomeIcon icon={faWhatsapp} className='ps-2 me-2 icon' /></a>
                    </div>

                    <a href={contactdata.whatsapp} className='btn btn-primary border-2 btn-padding text-light mt-4' target='blank'>Get In Touch</a>
                </div>
            </div>
        </div>

        <div className='border border-0 border-bottom border-secondary my-5'></div>

        <div className="container text-secondary footer-second-container">
            <div className="row justify-content-around">
                <div className="col-12 col-sm-auto mb-2 mb-sm-0 text-center"><FontAwesomeIcon icon={faCopyright} className='icon me-1' /><span>{currentYear} Trinitwin Energy</span></div>
                {/* <div className="col-12 col-sm-auto text-center"><a href="">Privacy Policy</a> | <a href="">Terms and Condition</a></div> */}
            </div>
        </div>
    </section>
  )
}

export default FooterSection