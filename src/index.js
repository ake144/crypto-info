import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import CryptoDetails from './component/cryptoDetail';
import Markets from './component/coin';
const root = ReactDOM.createRoot(document.getElementById('root'));

function MainComponent() {

  return (
    <div className='bg-custom-bg'>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/coin/:uuid" element={<CryptoDetails />} />
        <Route exact path="coin" element={<Markets />} />
      </Routes>
    </div>
  );
}

root.render(
  <React.StrictMode>
      <Router> 
        <div className=''>
          <MainComponent />
        </div>
      </Router>

  </React.StrictMode>
);
