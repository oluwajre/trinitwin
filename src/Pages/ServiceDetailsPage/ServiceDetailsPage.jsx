import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ServiceDetailsPage.css';
import { Navbar } from "../../Components";

const ServiceDetailsPage = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(()=> {
        
    }, [])

  return (
    <>
        <Navbar />
    </>
  )
}

export default ServiceDetailsPage