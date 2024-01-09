import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LocalStorageService from '../../utils/LocalStorageService';
import { useDispatch, useSelector } from 'react-redux';
import { selectName, updateCart } from '../../store/product';
import { getCategories } from '../../api/category';

const Header = ({ setSearch, setFilter, toggleDropdown }) => {
  const [categories, setCategories] = useState();

  const navigate = useNavigate();
  const query = useRef('');

  const dispatch = useDispatch();
  const values = useSelector(selectName);

  const handleCart = () => {
    dispatch(updateCart({ is_cart: true }));
    navigate('/cart');
  };
  const handleOrder = () => {
    dispatch(updateCart({ is_cart: false }));
    navigate('/cart');
  };

  return (
    <header className='bg-gray-800 text-white p-4'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='hidden md:block'>
          <h1 className='text-xl font-semibold'>Myntra</h1>
        </div>
        <div className='flex items-center space-x-4'>
          <input
            ref={query}
            type='text'
            placeholder='Search...'
            className='px-4 py-2 rounded-md bg-gray-700 focus:outline-none'
          />
          <button
            onClick={() => {
              setSearch(query.current.value);
            }}
            className='px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 focus:outline-none'
          >
            Search
          </button>
          <div className='relative'>
            <button
              onClick={toggleDropdown}
              className='px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 focus:outline-none'
            >
              Filter
            </button>
          </div>

          <button
            onClick={handleCart}
            className='px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 focus:outline-none'
          >
            Cart
          </button>
          <button
            onClick={handleOrder}
            className='px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 focus:outline-none'
          >
            Orders
          </button>
          <button
            className='px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 focus:outline-none'
            onClick={() => {
              LocalStorageService.clearToken();
              navigate('/');
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
