import React, { useState } from 'react';
import Header from '../../components/header';
import Product from '../product';
import LocalStorageService from '../../utils/LocalStorageService';
import AddProductModal from '../../components/productCreation';

const Home = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const isAdmin = LocalStorageService.getUserRole();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  console.log({ search });

  return (
    <div>
      <Header setSearch={setSearch} setFilter={setFilter} />
      <div className='flex align-middle justify-center'>
        {isAdmin && (
          <button
            onClick={openModal}
            className='m-2 px-4 py-2 rounded-md bg-slate-400 hover:bg-gray-600 focus:outline-none'
          >
            Add Product
          </button>
        )}
      </div>
      <Product search={search} filter={filter} />
      <AddProductModal isOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};

export default Home;
