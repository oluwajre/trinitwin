import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ServiceDetailsPage.css';
import { Navbar, HeroBanner, ServiceDetails, GetInTouch, FooterSection, PageLoader, TestimonialSection } from "../../Components";
import { servicedetailsdata } from "../../Constants";
import { CarouselClick } from "../../utils";

const ServiceDetailsPage = () => {
    const { id } = useParams();
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

export default ServiceDetailsPage




