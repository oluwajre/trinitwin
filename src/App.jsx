import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage } from './Pages';
import { PageLoader } from './Components';
import PageTitle from './utils/PageTitle';
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
        </Routes>
      </PageLoader>
    </Router>
  )
}

export default App
