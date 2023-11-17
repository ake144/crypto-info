import { useState } from "react";
import useAxios from "../component/axios";
import Skeleton from "./skeleton";
import millify from 'millify';
import { HashLink } from 'react-router-hash-link';

export const TopList = () => {
  const [page, setPage] = useState(1); // Track the current page number
  const coinsPerPage = 20; // Define the number of coins per page

  // Fetch data for the current page
  const { response, loading } = useAxios(`/coins/markets?vs_currency=usd&order=market_cap_desc&page=${page}&per_page=${coinsPerPage}&sparkline=false`);

  if (loading) {
    // Loading skeleton or spinner
    return (
      <div className="wrapper-container mt-8">
        <Skeleton />
      </div>
    );
  }

  return (
    <>
      <h1 className="text-2xl mb-2 text-yellow-200">Markets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
        {response && response.map((coin) => (
          <div key={coin.id} className="bg-white p-4 rounded-lg shadow-md">
                 <HashLink to={`/coin/${coin.id}`} className='flex  items-center px-4 py-2'>
              <img
              className="w-16 h-16 mx-auto mb-4"
              src={coin.image}
              alt={coin.name}
            />
            <h3 className="text-lg font-semibold mb-2 mx-2">{`${coin.market_cap_rank}. ${coin.name}`}</h3>
            <p className="text-gray-600 font-bold">Price: {millify(coin.current_price)}</p>
            <p className="text-gray-600 font-bold">Market Cap: {millify(coin.market_cap)}</p>
            <p className={coin.price_change_percentage_24h < 0 ? 'text-red-400 font-bold' : 'text-green-400 font-bold'}>Daily Change: {coin.price_change_percentage_24h}%</p>
            </HashLink>
          </div>

        ))}
      </div>
    
      {/* See more link */}
      {response && response.length === coinsPerPage && (
        <div className="mt-4 text-center">
             <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <a href="/coin" className="text-white">
            See More
          </a>
</button>
     
        </div>
      )}
    </>
  );
};

export default TopList;
