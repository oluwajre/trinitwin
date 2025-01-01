import React, { useState, useEffect } from "react";
import { Navbar, HeroBanner, ServiceDetails, GetInTouch, FooterSection, PageLoader, TestimonialSection, ServiceToggler } from "../../Components";
import { servicedetailsdata } from "../../Constants";
import { CarouselClick } from "../../utils";

const MainServiceDetailPage = () => {
    const [id, setId] = useState('solar_installation');

    const [data, setData] = useState(null);
    
    useEffect(()=> {
        setData(servicedetailsdata[id] || null);
    }, [id]);

    if (!data) {
        // Handle case where `id` is invalid or data isn't found
        return (
            <div>
            <Navbar page="services/service detail" />
            <PageLoader />
            {/* <p>Service not found. Please check the URL or select a valid service.</p> */}
            </div>
        );
        }

  return (
    <>
        <CarouselClick />
        <Navbar page='services/service detail'/>
        <HeroBanner bannerInformation={data.hero_banner} />
        <ServiceToggler id={id} setId={setId}/>
        <ServiceDetails data={data.service_details}/>
        <TestimonialSection />
        <section>
        <div className="container my-5">
            <GetInTouch isFormComplete={false} />
        </div>
        </section>
        <FooterSection />
    </>
  )
}

export default MainServiceDetailPage