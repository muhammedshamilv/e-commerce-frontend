import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { getCategories } from '../../api/category';
import { createProduct } from '../../api/product';

const AddProductModal = ({ isOpen, closeModal }) => {
  const [productDetails, setProductDetails] = useState({
    name: '',
    price: '',
    details: '',
    image: null,
    category: '',
  });
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  console.log({ categories });
  useEffect(() => {
    const getCategory = () => {
      getCategories({
        successCB: (res) => {
          setCategories(res);
        },
        errorCB: (err) => {
          console.error(err);
        },
        errorCB: (err) => {
          alert(err);
          console.error(err);
        },
      });
    };

    if (isOpen) {
      getCategory();
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct({
      data: productDetails,
      successCB: (res) => {
        navigate('/home');
      },
      errorCB: (err) => {
        alert(err);
        console.error(err);
      },
    });
    console.log('Product details:', productDetails);
    closeModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({
      ...productDetails,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProductDetails({
      ...productDetails,
      image: file,
    });
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <div className='flex flex-col items-center'>
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <label>Name:</label>
          <input
            className='border-4'
            type='text'
            name='name'
            onChange={handleInputChange}
            required
          />

          <label>Price:</label>
          <input
            className='border-4'
            type='text'
            name='price'
            onChange={handleInputChange}
            required
          />

          <label>Details:</label>
          <textarea
            className='border-4'
            name='details'
            onChange={handleInputChange}
            required
          />

          <label>Image:</label>
          <input
            type='file'
            name='image'
            onChange={handleFileChange}
            accept='image/*'
            required
          />

          <label>Category:</label>
          <select
            name='category'
            onChange={handleInputChange}
            value={productDetails.category}
            className='border-4'
            required
          >
            <option value=''>Select Category</option>
            {categories?.results?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          <button
            type='submit'
            className='mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none'
          >
            Add Product
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AddProductModal;
