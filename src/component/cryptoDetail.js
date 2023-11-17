import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Col } from 'antd';

import useAxios from './axios';
import Skeleton from './skeleton'

const { Title, Text } = Typography;

const CryptoDetails = () => {
  const { uuid } = useParams();
  const { response } = useAxios(`/coins/${uuid}?tickers=false&community_data=false&developer_data=false`);
  console.log(response)
  
if(!response) {
return (
      <div className="wrapper-container mt-8">
        <h3>{console.log(response?.error)}</h3>
        <Skeleton className="h-8 w-32 mb-4" />
        <Skeleton className="h-72 w-full mb-10" />
      </div>
    )
  }

  return (
    <div className='my-6 flex '>
      <div className='flex w-1/3 gap-2 align-items-center  items-center h-auto'>
        <img className='' src={response.image.large} alt={response.name} />
        <div><h1 className=' text-white text-2xl mb-2 capitalize font-bold'>{response.name}</h1>
        <h4 className='text-white'>Rank: #{response.market_cap_rank}</h4> 
        </div>
      </div>
      <div className='w-2/3'>
      <p className='mt-6 text-gray-200 font-mono text-1xl [&>a]:text-blue-600 [&>a]:underline' dangerouslySetInnerHTML={{ __html: response.description.en }}></p>
      </div>
    </div>
  )
  }
export default CryptoDetails;
