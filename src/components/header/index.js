// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className='bg-gray-800 text-white p-4'>
      <div className='container mx-auto flex items-center justify-between'>
        <div>
          <h1 className='text-xl font-semibold'>Myntra</h1>
        </div>
        <div className='flex items-center space-x-4'>
          <input
            type='text'
            placeholder='Search...'
            className='px-4 py-2 rounded-md bg-gray-700 focus:outline-none'
          />
          <button className='px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 focus:outline-none'>
            Search
          </button>
          <button className='px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 focus:outline-none'>
            Filter
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
