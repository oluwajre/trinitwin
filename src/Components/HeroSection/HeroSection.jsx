import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import { banner_1, banner_2, banner_3 } from '../../assets/images';
import { contactdata } from '../../Constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPlay, faXmark } from '@fortawesome/free-solid-svg-icons'


const VideoOverlay = ({ src, HandleVideo }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadTimeout = setTimeout(() => setIsLoading(false), 2000);

        return () => clearTimeout(loadTimeout);
    }, []);

    return (
        <div className="videoOverlay d-flex align-items-center justify-content-center position-fixed top-0 vw-100 vh-100">
            {isLoading ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <iframe
                    width="100%"
                    height="315"
                    src={src}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="video shadow"
                ></iframe>
            )}

            <button
                className="btn btn-primary position-absolute top-0 end-0 me-3 mt-3 me-sm-5"
                type="button"
                onClick={HandleVideo}
            >
                <FontAwesomeIcon icon={faXmark} className="icon" />
            </button>
        </div>
    );
};




const HeroSection = () => {
    const [slideNumber, setSlideNumber] = useState(1);
    const [closeVideo, setCloseVideo] = useState(true);

    const HandleVideo = () => {
        setCloseVideo(!closeVideo);
    }

    useEffect(() => {
        const carouselElement = document.getElementById('carouselExampleCaptions');
    
        const handleSlideChange = (event) => {
          // Update the slideNumber based on the active slide index
          const newSlideNumber = parseInt(event.to, 10) + 1; // event.to is 0-based
          setSlideNumber(newSlideNumber);
        };

        carouselElement.addEventListener('slid.bs.carousel', handleSlideChange);
    
        return () => {
          carouselElement.removeEventListener('slid.bs.carousel', handleSlideChange);
        };
      }, []);

  return (
    <section className="hero" id="hero">
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade position-relative" data-bs-ride="carousel">
            <div className="contact-box bg-dark d-none d-xl-flex align-items-center justify-content-evenly text-light py-3 z-2">
                <div>{contactdata.address}</div>
                <div className='position-relative'><a href={`tel:${contactdata.phone_1}`}>{contactdata.phone_1}</a></div>
                <div className='position-relative'><a href={`mailto:${contactdata.email}`}>{contactdata.email}</a></div>
                <div className="contact-box__socials">
                    <a href={contactdata.facebook} className='me-4'><FontAwesomeIcon icon={faFacebookF} className='icon'/></a>
                    <a href={contactdata.instagram}><FontAwesomeIcon icon={faInstagram} className='icon'/></a>
                </div>
            </div>

            <div className="carousel-indicators mx-0 mb-0 d-flex align-items-start align-items-md-center justify-content-between flex-column flex-md-row gap-3 gap-md-0">

                <div className="video-container d-flex align-items-center justify-content-center shadow-lg order-2 order-md-1">
                    <FontAwesomeIcon icon={faPlay} className='icon' onClick={HandleVideo} />
                </div>

                <div className='d-flex align-items-center mx-3 order-1 order-md-2'>
                    <div className='slick-dot-border me-2 text-center'>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="slick-dot active" aria-current="true" aria-label="Slide 1" onClick={()=> setSlideNumber(1)}></button>
                    </div>

                    <div className="slick-dot-border me-2 text-center">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className='slick-dot' aria-label="Slide 2" onClick={()=> setSlideNumber(2)}></button>
                    </div>
                    
                    <div className="slick-dot-border me-2 text-center">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className='slick-dot' aria-label="Slide 3" onClick={()=> setSlideNumber(3)}></button>
                    </div>

                    <div className="indicator-divider mx-4" />

                    <div className="carousel-number text-light align-self-center">{slideNumber}/3</div>
                </div>
                
            </div>


            <div class="carousel-inner">

                <div class="carousel-item active banner-item">
                    <img src={banner_1} alt="banner 1" />
                    <div className='container-sm banner-caption text-light text-center scale-up-center'>
                        <h1 className='display-1 banner-title'>Solar <span className='liner align-middle' /> Systems</h1>
                    </div>
                </div>

                <div class="carousel-item banner-item">
                    <img src={banner_2} alt="banner 2" />
                    <div className='container-sm banner-caption text-light text-center scale-down-center'>
                        <h1 className='display-1 banner-sub-title'>Modern Technology in <span className='fw-light'>Sun Energy</span></h1>
                        <p className='lead fw-normal mx-auto' style={{maxWidth: '550px'}}>Advancements in innovation have transformed renewable energy, offering smarter and more efficient solutions for a sustainable future.</p>
                        <a href="" className='btn btn-primary btn-padding btn-background-black border border-0'><span>Discover</span></a>
                    </div>
                </div>

                <div class="carousel-item banner-item">
                    <img src={banner_3} alt="banner 3" />
                    <div className='container-sm banner-caption text-light text-left slide-right' id='banner-caption-left'>
                        <h1 className='display-1 banner-sub-title' style={{maxWidth: '700px'}}>Business Hand in Hand <span className='fw-light'>with New Technology</span></h1>
                        <p className='lead fw-normal' style={{maxWidth: '550px'}}>Leveraging cutting-edge technology, we empower businesses with sustainable energy solutions and advanced security systems to drive progress and efficiency.</p>
                        <a href="" className='btn btn-primary btn-padding btn-background-black border border-0'><span>Discover</span></a>
                    </div>
                </div>
            </div>
            {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button> */}
        </div>
        {
            closeVideo?
            '':
            <VideoOverlay src={contactdata.youtube} HandleVideo={HandleVideo}/>
        }
    </section>
  )
}

export default HeroSection