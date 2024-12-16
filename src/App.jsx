import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages';
import { PageLoader } from './Components';
import './App.css';

function App() {

  return (
    <Router>
      <PageLoader>
        <Routes>
          <Route path='/' element={ <HomePage /> } />
        </Routes>
      </PageLoader>
    </Router>
  )
}

export default App
