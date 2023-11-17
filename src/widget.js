import React from 'react';

class CryptoWidget extends React.Component {
  render() {
    return (
      <div className="h-[787px] bg-blue-900 overflow-hidden border border-blue-800 rounded-md text-right leading-14 text-sm font-sans text-size-100 box-border shadow-inner -mt-20 w-full">
        <div className="h-[767px] p-0 m-0 w-full">
          <iframe
            src="https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=12&pref_coin_id=1505&graph=yes"
            className="w-full h-[763px]"
            scrolling="auto"
            marginWidth="0"
            marginHeight="0"
            frameBorder="0"
            style={{ border: '0', margin: '0', padding: '0' }}
          ></iframe>
        </div>
        <div
          className="text-blue-400 leading-14 font-normal text-xs box-border p-2 w-full font-sans"
          style={{
            color: '#626B7F',
            fontWeight: 400,
            fontSize: '11px',
            fontFamily: 'Verdana, Tahoma, Arial, sans-serif',
          }}
        >
          <a
            href="https://coinlib.io"
            target="_blank"
            className="font-semibold text-blue-400 no-underline text-xs"
          >
            Cryptocurrency Prices
          </a>
          &nbsp;by Coinlib
        </div>
      </div>
    );
  }
}

export default CryptoWidget;
