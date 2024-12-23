import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, ContactPage, ServicesPage } from './Pages';
import { PageLoader } from './Components';
import { PageTitle } from './utils';
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
                <PageTitle title='Home' />
              </> 
             } 
          />

          <Route 
            path='/about'
            element={
              <>
                <AboutPage />
                <PageTitle title='About Us' />
              </> 
             } 
          />

          <Route 
            path='/contact'
            element={
              <>
                <ContactPage />
                <PageTitle title='Contact Us' />
              </> 
             } 
          />

          <Route 
            path='/services'
            element={
              <>
                <ServicesPage />
                <PageTitle title='Our Services' />
              </> 
             } 
          />
        </Routes>
      </PageLoader>
    </Router>
  )
}

export default App
