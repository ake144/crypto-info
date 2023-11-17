import { HashLink } from 'react-router-hash-link';
import { currencyFormat } from "./utils";
import * as React from 'react';



const CoinList = ({ coin }) => {
  return (
  
        <HashLink to={`/coin/${coin.id}`} className='flex  items-center px-4 py-2'>
        <div className="flex items-center gap-1 w-1/2">
          <img className="" src={coin.image} alt={coin.name} />
          <p>{coin.name}</p>
          <span className="text-xs text-white">({coin.symbol})</span>
        </div>
        <div className='w-1/4'>
        <span className="w-full text-2xl font-bold text-center text-white"> CURRENT PRICE : {currencyFormat(coin.current_price)}</span>
        </div>
        
        <span className={`flex gap-1 ${coin.price_change_percentage_24h < 0 ? 'text-red-400  font-bold  text-2xl ' : 'text-green-400 text-2xl  font-bold '}`}>
             PRICE CHANGE : {coin.price_change_percentage_24h}
        </span>
        <div className="hidden sm:block">
          <p className="text-[2xl] font-bold text-2xl  text-white">MARKET CAP</p>
          <span className='text-white text-2xl font-bold'>{currencyFormat(coin.market_cap)}</span>
        </div>
 
  </HashLink>
);
};

export default CoinList;
