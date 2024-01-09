import React, { useState } from 'react';
import { editProduct, getAllProduct } from '../../api/product';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ data, handleSelect }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        // handleSelect(data);
        navigate(`/product/${data?.id}`);
      }}
      className='bg-white w-64 border-blue-100 p-3 border-2 flex flex-col justify-between'
    >
      <div className='h-full'>
        <img
          src={data?.image}
          alt={data.name}
          className='h-full object-cover'
        />
      </div>
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-sm text-gray-700'>{data.name}</h3>
        </div>
        <p className='text-sm font-medium text-gray-900'>{data.price}</p>
      </div>
    </div>
  );
}
