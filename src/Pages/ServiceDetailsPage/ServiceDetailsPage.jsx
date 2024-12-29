import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ServiceDetailsPage.css';
import { Navbar, HeroBanner, ServiceDetails, GetInTouch, FooterSection, PageLoader } from "../../Components";
import { servicedetailsdata } from "../../Constants";

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
        <Navbar page='services/service detail'/>
        <HeroBanner bannerInformation={data.hero_banner} />
        <ServiceDetails />
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




