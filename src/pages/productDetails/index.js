import { cartProduct, editProduct, getProductId } from '../../api/product';
import LocalStorageService from '../../utils/LocalStorageService';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import OrderModal from '../../components/productOrder';
import EditProductModal from '../../components/editProductModal';
export default function ProductDetails({}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const [data, setData] = useState();
  const isAdmin = LocalStorageService.getUserRole();

  const userId = LocalStorageService.getUserid();

  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    getProductId({
      id: id,
      successCB: (res) => {
        setData(res);
      },
      errorCB: (err) => {
        alert(err);
        console.error(err);
      },
    });
  }, []);

  // const editProductDetails = (e) => {
  //   editProduct({
  //     id: id,
  //     name: productName,
  //     successCB: (res) => {
  //       getAllProduct();
  //     },
  //     errorCB: (err) => {
  //       console.error(err);
  //     },
  //   });
  //   setIsModalOpen(false);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    cartProduct({
      user: userId,
      product: data.id,
      successCB: (res) => {
        navigate('/home');
      },
      errorCB: (err) => {
        alert(err);
        console.error(err);
      },
    });
  };
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const orderProduct = () => {
    openModal();
  };
  const openEditModal = () => {
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  // Function to handle deletion logic
  const handleEdit = () => {
    // Implement deletion logic here
    // This function should perform the actual deletion of the product
    // Close the modal after deletion
    closeEditModal();
  };
  const iconSize = 32;
  return (
    <div className='bg-white w-screen h-screen'>
      <div className='pt-6'>
        <div className='mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8'>
          <div className='aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block'>
            <img
              src={data?.image}
              alt={data?.name}
              className='h-full w-full object-cover object-center'
            />
          </div>
        </div>

        {/* Product info */}
        <div className='mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16'>
          <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
              {data?.name}
            </h1>
          </div>

          {/* Options */}
          <div className='mt-4 lg:row-span-3 lg:mt-0'>
            <h2 className='sr-only'>Product information</h2>
            <p className='text-3xl tracking-tight text-gray-900'>
              {data?.price}
            </p>
            <p className='text-3xl tracking-tight text-gray-900'>
              count {data?.availability}
            </p>

            {!isAdmin && (
              <div className='mt-10'>
                <button
                  onClick={handleSubmit}
                  type='submit'
                  className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  Add to cart
                </button>
              </div>
            )}
            {!isAdmin && (
              <div className='mt-10'>
                <button
                  onClick={orderProduct}
                  type='submit'
                  className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  Buy now
                </button>
              </div>
            )}
            {isAdmin && (
              <div className='mt-10'>
                <button
                  onClick={openEditModal}
                  type='submit'
                  className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  Edit Product
                </button>
              </div>
            )}
            <EditProductModal
              isOpen={isEditModalOpen}
              closeModal={closeEditModal}
              data={data}
              handleEdit={handleEdit}
            />

            {data && (
              <OrderModal
                userId={userId}
                data={data}
                isOpen={modalIsOpen}
                closeModal={closeModal}
              />
            )}
          </div>

          <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6'>
            <div className='mt-10'>
              <h2 className='text-sm font-medium text-gray-900'>Details</h2>

              <div className='mt-4 space-y-6'>
                <p className='text-sm text-gray-600'>{data?.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
