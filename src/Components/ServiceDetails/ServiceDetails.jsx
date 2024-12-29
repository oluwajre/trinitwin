import React, { useState } from 'react';
import './ServiceDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faPlus } from '@fortawesome/free-solid-svg-icons';

const ServiceDetails = () => {
    const [identifier, setIdentifier] = useState('collapseExample');

    const collapseColumn = (id) => {
        setIdentifier((prev) => (prev === id ? '' : id));
    };

    return (
        <section className="service-details-section pb-5">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-10 col-sm-12 mb-2 mt-4">
                        <h1 className="display-6 fw-bold">
                            Harness the Power of <span className="text-primary">the Sun</span>
                        </h1>
                    </div>
                    <div className="col-12">
                        <p className="lead fw-normal appear">
                            At Trinitwin, we specialize in providing tailored solar energy solutions that help you lower electricity costs while promoting a cleaner, greener environment. Whether for your home or business, our expert team ensures that you enjoy reliable, renewable energy designed to meet your unique needs.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 service-highlight-column">
                        <button
                            type="button"
                            className="btn service-highlight-btn text-start py-5 appear"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseExample"
                            aria-expanded={identifier === 'collapseExample'}
                            aria-controls="collapseExample"
                            onClick={() => collapseColumn('collapseExample')}
                        >
                            <div className="align-self-start d-flex align-items-start m-0">
                                <h4 className="fw-normal d-inline-block m-0 mt-1">01</h4>
                                <h2 className="fw-normal d-inline-block m-0 ms-3" style={{ maxWidth: '350px' }}>
                                    Solar Installation: Solar Installation
                                </h2>
                            </div>

                            <div className="align-self-start d-none d-md-inline-flex m-0">
                                <p style={{ maxWidth: '450px' }} className="m-0 mt-1">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni excepturi veritatis distinctio expedita quibusdam voluptatibus. Quis voluptas voluptates vel consequatur?
                                </p>
                            </div>

                            <FontAwesomeIcon icon={faArrowDown} className="direction-icon rounded-pill align-self-center ms-3" />
                        </button>

                        <div
                            className={`collapse ms-3 ${identifier === 'collapseExample' ? 'slide-down-small show' : ''}`}
                            id="collapseExample"
                        >
                            <div>
                                <p className="d-block d-md-none appear">
                                    <FontAwesomeIcon icon={faPlus} className='plus-icon me-2' />
                                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae soluta deserunt quasi. Possimus optio incidunt ullam hic cupiditate saepe vel.</span>
                                </p>
                                <p className='appear'>
                                    <FontAwesomeIcon icon={faPlus} className='plus-icon me-2' />
                                    <span>Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 service-highlight-column">
                        <button
                            type="button"
                            className="btn service-highlight-btn text-start py-5 appear"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseExample2"
                            aria-expanded={identifier === 'collapseExample2'}
                            aria-controls="collapseExample2"
                            onClick={() => collapseColumn('collapseExample2')}
                        >
                            <div className="align-self-start d-flex align-items-start m-0">
                                <h4 className="fw-normal d-inline-block m-0 mt-1">02</h4>
                                <h2 className="fw-normal d-inline-block m-0 ms-3" style={{ maxWidth: '350px' }}>
                                    Solar Installation: Solar Installation
                                </h2>
                            </div>

                            <div className="align-self-start d-none d-md-inline-flex m-0">
                                <p style={{ maxWidth: '450px' }} className="m-0 mt-1">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni excepturi veritatis distinctio expedita quibusdam voluptatibus. Quis voluptas voluptates vel consequatur?
                                </p>
                            </div>

                            <FontAwesomeIcon icon={faArrowDown} className="direction-icon rounded-pill align-self-center ms-3" />
                        </button>

                        <div
                            className={`collapse ms-3 ${identifier === 'collapseExample2' ? 'slide-down-small show' : ''}`}
                            id="collapseExample2"
                        >
                            <div>
                                <p className="d-block d-md-none appear ">
                                    <FontAwesomeIcon icon={faPlus} className='plus-icon me-2' />
                                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae soluta deserunt quasi. Possimus optio incidunt ullam hic cupiditate saepe vel.</span>
                                </p>
                                <p className='appear'>
                                    <FontAwesomeIcon icon={faPlus} className='plus-icon me-2' />
                                    <span>Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;
