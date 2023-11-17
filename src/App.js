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
      < Home />
    
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
