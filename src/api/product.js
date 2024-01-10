import LocalStorageService from '../utils/LocalStorageService';
import axios from './axios';

const createProduct = ({ data, successCB, errorCB }) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (key === 'image') {
      formData.append(key, data[key], data[key].name);
    } else {
      formData.append(key, data[key]);
    }
  });

  axios
    .post('product/', formData)
    .then((response) => {
      successCB(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      if (errorCB) {
        errorCB(err);
      }
    });
};

const cartProduct = ({ user, product, successCB, errorCB }) => {
  const data = {
    user: user,
    product: product,
  };
  axios
    .post('product/cart/', data)
    .then((response) => {
      successCB(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      if (errorCB) {
        errorCB(err);
      }
    });
};

const getProductId = ({ id, successCB, errorCB }) => {
  axios
    .get(`product/${id}/`)
    .then((response) => {
      successCB(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      if (errorCB) {
        errorCB(err);
      }
    });
};

const placeOrder = ({
  user,
  product,
  quantity,
  unit_price,
  address,
  successCB,
  errorCB,
}) => {
  const data = {
    user: user,
    product: product,
    quantity: quantity,
    unit_price: unit_price,
    address: address,
  };
  axios
    .post('product/order/', data)
    .then((response) => {
      successCB(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      if (errorCB) {
        errorCB(err);
      }
    });
};
const getAllProduct = ({ successCB, errorCB }) => {
  axios
    .get('product/all/')
    .then((response) => {
      successCB(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      if (errorCB) {
        errorCB(err);
      }
    });
};

const getAllCartItems = ({ userId, successCB, errorCB }) => {
  axios
    .get(`product/user/${userId}/cart/`)
    .then((response) => {
      successCB(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      if (errorCB) {
        errorCB(err);
      }
    });
};

const getOrders = ({ userId, successCB, errorCB }) => {
  axios
    .get(`product/user/${userId}/orders/`)
    .then((response) => {
      successCB(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      if (errorCB) {
        errorCB(err);
      }
    });
};

const deleteCartItem = ({ id, successCB, errorCB }) => {
  axios
    .delete(`product/cart/${id}/`)
    .then((response) => {
      successCB(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      if (errorCB) {
        errorCB(err);
      }
    });
};

const deleteOrderItem = ({ id, successCB, errorCB }) => {
  axios
    .delete(`product/order/${id}/`)
    .then((response) => {
      successCB(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      if (errorCB) {
        errorCB(err);
      }
    });
};

const searchProduct = ({ successCB, errorCB, query }) => {
  axios
    .get(`product/all/?search=${query}`)
    .then((response) => {
      successCB(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      if (errorCB) {
        errorCB(err);
      }
    });
};

const filterProduct = ({ successCB, errorCB, query }) => {
  console.log({ query });
  const queryString = query?.map((item) => `${item}`).join('&');
  axios
    .get(`product/all/?category__name=${queryString}`)
    .then((response) => {
      successCB(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      if (errorCB) {
        errorCB(err);
      }
    });
};
const editProduct = ({ id, data, successCB, errorCB }) => {
  axios
    .put(`product/${id}/`, data)
    .then((response) => {
      successCB(response.data);
    })
    .catch((err) => {
      console.error(err);
      if (errorCB) {
        errorCB(err);
      }
    });
};

export {
  getAllProduct,
  editProduct,
  searchProduct,
  createProduct,
  cartProduct,
  placeOrder,
  getAllCartItems,
  getOrders,
  deleteCartItem,
  deleteOrderItem,
  getProductId,
  filterProduct,
};
