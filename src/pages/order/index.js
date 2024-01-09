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
      <h1>Your Cart</h1>
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
