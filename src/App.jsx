import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, ContactPage, ServicesPage, ServiceDetailsPage, MainServiceDetailPage } from './Pages';
import { PageLoader } from './Components';
import { PageTitle, ScrollAnimation } from './utils';
import './App.css';

function App() {

  return (
    <Router>
      <PageLoader>
        <Routes>
          <Route 
            path='/'
            element={
              <>
                <HomePage />
                <PageTitle title='' />
                <ScrollAnimation />
              </>
             } 
          />

          <Route 
            path='/about'
            element={
              <>
                <AboutPage />
                <PageTitle title='About Us' />
                <ScrollAnimation />
              </> 
             } 
          />

          <Route 
            path='/contact'
            element={
              <>
                <ContactPage />
                <PageTitle title='Contact Us' />
                <ScrollAnimation />
              </> 
             } 
          />

          <Route 
            path='/services'
            element={
              <>
                <ServicesPage />
                <PageTitle title='Our Services' />
                <ScrollAnimation />
              </> 
             } 
          />

          <Route 
            path='/services/service_detail/:id'
            element={
              <>
                <ServiceDetailsPage />
                <PageTitle title='Service Details' />
                {/* <ScrollAnimation /> */}
              </> 
             } 
          />

          <Route 
            path='/services/service_detail'
            element={
              <>
                <MainServiceDetailPage />
                <PageTitle title='Service Detail' />
                <ScrollAnimation />
              </> 
             } 
          />
        </Routes>
      </PageLoader>
    </Router>
  )
}

export default App
