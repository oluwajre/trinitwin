import React from 'react';
import { servicecolumndata } from '../../Constants';

const ServiceToggler = ({ id, setId }) => {
  return (
    <section className='service-toggler-section my-4 py-3'>
        {/* <div className='d-block mx-auto'>Our Services</div> */}
        <div className="container service-toggler-container">
            <div className='service-toggler-slide'>
                {servicecolumndata.map((service, index) => {
                    const newId = service.link.split('/')[3];
                    return (
                        <button 
                            className={`btn border border-primary border-2 py-2 py-md-3 px-3 px-md-4 mx-4 ${id === newId? 'btn-primary': 'btn-outline-primary'}`}
                            onClick={()=>setId(newId)}
                            key={index}
                        >
                            {service.heading}
                        </button>
                    )
                })}
            </div>
        </div>
        
    </section>
  )
}

export default ServiceToggler