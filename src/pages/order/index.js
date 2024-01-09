import React, { useState, useEffect } from 'react';
import CartItem from '../../components/cartCard';
import { useDispatch, useSelector } from 'react-redux';
import { selectName, updateCart } from '../../store/product';
import { getAllCartItems, getOrders } from '../../api/product';
import LocalStorageService from '../../utils/LocalStorageService';
const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch();
  const values = useSelector(selectName);
  const userId = LocalStorageService.getUserid();
  useEffect(() => {
    if (values.is_cart) {
      getAllCartItems({
        userId: userId,
        successCB: (res) => {
          setCartItems(res.data);
        },
        errorCB: (err) => {
          alert(err);
          console.error(err);
        },
      });
      return;
    }
    getOrders({
      userId: userId,
      successCB: (res) => {
        setCartItems(res.data);
      },
      errorCB: (err) => {
        alert(err);
        console.error(err);
      },
    });
  }, [refresh]);

  return (
    <div>
      <h1
        className={`text-2xl font-bold p-5 ${
          values.is_cart ? 'text-blue-500' : 'text-green-500'
        }`}
      >
        {values.is_cart ? 'Your Cart' : 'Your Orders'}
      </h1>

      <div>
        {cartItems.map((item) => (
          <CartItem
            item={item.product}
            id={item.id}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
