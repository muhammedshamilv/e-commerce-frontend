import React, { useState } from 'react';
import Modal from 'react-modal';
import { placeOrder } from '../../api/product';
import { useNavigate } from 'react-router-dom';

const OrderModal = ({ userId, data, isOpen, closeModal }) => {
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleOrder = (e) => {
    e.preventDefault();
    placeOrder({
      user: userId,
      product: data.id,
      quantity: quantity,
      unit_price: quantity * data.price,
      address: address,
      successCB: (res) => {
        navigate('/home');
      },
      errorCB: (err) => {
        alert(err);
        console.error(err);
      },
    });

    // Perform action on ordering with quantity and address
    console.log(`Ordering ${quantity} item(s) to address: ${address}`);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <div className='flex flex-col items-center'>
        <h2>Order Details</h2>
        <form onSubmit={handleOrder} className='flex flex-col'>
          <label>Quantity:</label>
          <input
            type='number'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min='1'
            required
          />

          <label>Address:</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <button
            type='submit'
            className='mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none'
          >
            Order
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default OrderModal;
