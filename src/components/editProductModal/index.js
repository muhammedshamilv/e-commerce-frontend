import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import { getCategories } from '../../api/category';
import { editProduct } from '../../api/product';
const EditProductModal = ({ isOpen, closeModal, data, handleEdit }) => {
  useEffect(() => {
    setProductDetails({
      name: data?.name,
      availability: data?.availability,
      price: data?.price,
      details: data?.details,
      image: null,
      category: '',
    });
  }, [data]);
  const [productDetails, setProductDetails] = useState({});
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState();

  useEffect(() => {
    getCategories({
      successCB: (res) => {
        setCategories(res.results);
      },
      errorCB: (err) => {
        alert(err);
        console.error(err);
      },
    });
  }, [isOpen]);

  // Handle input changes for product details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({
      ...productDetails,
      [name]: value,
    });
  };

  // Handle file change for image
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    setFile(file);
  };

  // Handle form submission (update product details)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform PUT request to update product details
      const formData = new FormData();
      formData.append('name', productDetails.name);
      formData.append('availability', productDetails.availability);
      formData.append('price', productDetails.price);
      formData.append('details', productDetails.details);
      formData.append('category', productDetails.category);
      if (file) {
        formData.append('image', file);
      }
      editProduct({
        id: data?.id,
        data: formData,
        successCB: (res) => {
          window.location.reload();
        },
        errorCB: (err) => {
          alert(err);
          console.error(err);
        },
      });
      closeModal();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <div className='flex justify-end'>
        <MdClose onClick={closeModal} className='cursor-pointer' />
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        {/* Input fields for editing product details */}
        <label>Name:</label>
        <input
          className='border-2'
          type='text'
          name='name'
          value={productDetails?.name}
          onChange={handleInputChange}
          required
        />

        <label>Availability:</label>
        <input
          className='border-2'
          type='number'
          name='availability'
          value={productDetails?.availability}
          onChange={handleInputChange}
          required
        />

        <label>Price:</label>
        <input
          className='border-2'
          type='text'
          name='price'
          value={productDetails?.price}
          onChange={handleInputChange}
          required
        />

        <label>Details:</label>
        <textarea
          className='border-2'
          name='details'
          value={productDetails?.details}
          onChange={handleInputChange}
          required
        />

        <div>
          <label>Existing Image</label>
          <div className='flex items-center'>
            <img
              src={data?.image}
              alt='Product'
              className='h-16 w-16 object-cover mr-2'
            />
          </div>
        </div>
        <div>
          <label>New Image:</label>
          <input
            type='file'
            name='image'
            onChange={handleFileChange}
            accept='image/*'
            className='border-2'
          />
        </div>

        {/* Dropdown for categories */}
        <label>Category:</label>
        <select
          className='border-2'
          name='category'
          value={productDetails?.category}
          onChange={handleInputChange}
          required
        >
          <option value=''>Select Category</option>
          {isLoading ? (
            <option>Loading...</option>
          ) : (
            categories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))
          )}
        </select>

        {/* Submit button */}
        <button
          type='submit'
          className='mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none'
        >
          Update Product
        </button>
      </form>
    </Modal>
  );
};

export default EditProductModal;
