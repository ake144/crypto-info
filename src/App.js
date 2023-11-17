import React, { useEffect, useState } from 'react';
import logo from './static/media/bitcoin.e146d46fb598ae0d8f43.png'
import ether from './static/media/ethereum.c6cffe78f0c6abc85da9.png'


import Home from './home/home'

import TopList from './component/topList'
import Join from './join/join';
import Choose from './choose/choose'



function App() {


  return (
    
    <div className="App">
      <div id="home" className="min-h-screen bg-custom-bg text-sky-100">
      <div className="fixed top-0 left-0 right-0 h-14 bg-custom-bg border border-emerald-950 flex flex-row">
      <div className="w-1/4 py-4 px-6">
        <a href="coinged.com" className="text-2xl font-bold text-sky-100">
          coinged
        </a>
      </div>
      <div className="w-1/2 text-center py-3">
        <ul className="flex justify-center">
          <li className="pr-4 text-2xl">
            <a href="#home">Home</a>
          </li>
          <li className="pr-4 text-2xl">
            <a href="#market">Market</a>
          </li>
          <li className="pr-4 text-2xl">
            <a href="#choose">Choose Us</a>
          </li>
          <li className="pr-4 text-2xl">
            <a href="#join">Join</a>
          </li>
        </ul>
      </div>
      <div className="w-1/4 py-6 px-10 text-slate-50">
        <div className="flex space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-sky-100"
          >
            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-sky-100"
          >
            <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
            <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
            <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"></path>
            <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-sky-100"
          >
            <path d="M4 6l16 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M4 18l16 0"></path>
          </svg>
        </div>
      </div>
    </div>

   <div className='h-50%'>
    <div className='flex items-center justify-center my-11'>
      <img className='w-20 h-15' src={logo} alt='floating-img' />
      <h2 className='text-7xl space-x-1 font-bold py-8 px-12 text-sky-100 text-center'>
        TRACK AND TRADE
        <br />
        <span className='bg-gradient-to-br from-indigo-600 to-pink-500 text-transparent bg-clip-text'>CRYPTO CURRENCIES</span>
      </h2>
      <img className='w-20 h-15' src={ether} alt='ethereum-img' />
    </div>
   </div>
    
           <div class="fixed bottom-0 w-full bg-black overflow-hidden border border-solid border-blue-600 rounded text-right leading-4 font-normal text-sm box-border shadow-inset-0-20-0-0-blue-600 p-0 m-0">
              <div class="h-10 p-0 m-0 w-full">
                <iframe
                  src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover=no"
                  width="100%"
                  height="36px"
                  scrolling="auto"
                  marginwidth="0"
                  marginheight="0"
                  frameBorder="0"
                  class="border-0 m-0 p-0"
                   style={{ pointerEvents: 'none' }}
                ></iframe>
              </div>
</div>
  </div>


<div id='market'>
< TopList />
</div>


<div id="choose" className="m-12 p-5">
     < Choose />
  </div>


<div id='join' className='my-30'>
        <Join />      
  </div>
</div>
  );
}

export default App;
