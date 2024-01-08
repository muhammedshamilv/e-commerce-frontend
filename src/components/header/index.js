import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import LocalStorageService from '../../utils/LocalStorageService';

const Header = ({ setSearch, setFilter }) => {
  const navigate = useNavigate();
  const query = useRef('');

  return (
    <header className='bg-gray-800 text-white p-4'>
      <div className='container mx-auto flex items-center justify-between'>
        <div>
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
          <button className='px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 focus:outline-none'>
            Filter
          </button>

          <button className='px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 focus:outline-none'>
            Cart
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
