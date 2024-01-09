import React from 'react';
import { deleteCartItem, deleteOrderItem } from '../../api/product';
import { useDispatch, useSelector } from 'react-redux';
import { selectName, updateCart } from '../../store/product';

const CartItem = ({ item, id, refresh, setRefresh }) => {
  const values = useSelector(selectName);
  const handleDelete = () => {
    if (values.is_cart) {
      deleteCartItem({
        id: id,
        successCB: (res) => {
          setRefresh(!refresh);
        },
        errorCB: (err) => {
          alert(err);
          console.error(err);
        },
      });
      return;
    }
    deleteOrderItem({
      id: id,
      successCB: (res) => {
        setRefresh(!refresh);
      },
      errorCB: (err) => {
        alert(err);
        console.error(err);
      },
    });
  };

  return (
    <div className='border p-4 mb-4 flex items-center'>
      <img src={item.image} alt={item.name} className='w-20 h-20 mr-4' />
      <div>
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <p>availability: {item.availability}</p>
        <button
          onClick={handleDelete}
          className='bg-red-500 text-white px-2 py-1 rounded mt-2'
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
