import LocalStorageService from '../utils/LocalStorageService';
import axios from './axios';

const token = LocalStorageService.getAccessToken();
const headers = {
  Authorization: `Bearer ${token}`,
};
const createProduct = ({ data, successCB }) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (key === 'image') {
      formData.append(key, data[key], data[key].name); // Append the file with its name
    } else {
      formData.append(key, data[key]);
    }
  });

  axios
    .post('product/create/', formData, { headers: headers })
    .then((response) => {
      successCB(response.data);
      return response.data;
    })
    .catch((err) => console.log(err));
};

const cartProduct = ({ user, product, successCB }) => {
  console.log({ user });
  const data = {
    user: user,
    product: product,
  };
  axios
    .post('product/cart/', data, { headers: headers })
    .then((response) => {
      successCB(response.data);
      return response.data;
    })
    .catch((err) => console.log(err));
};

const placeOrder = ({
  user,
  product,
  quantity,
  unit_price,
  address,
  successCB,
}) => {
  const data = {
    user: user,
    product: product,
    quantity: quantity,
    unit_price: unit_price,
    address: address,
  };
  axios
    .post('product/order/', data, { headers: headers })
    .then((response) => {
      successCB(response.data);
      return response.data;
    })
    .catch((err) => console.log(err));
};
const getAllProduct = ({ successCB, errorCB }) => {
  axios
    .get('product/', { headers })
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
    .get(`product/?search=${query}`, { headers })
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
const editProduct = ({ id, name, successCB, errorCB }) => {
  const data = {
    id: id,
    name: name,
  };
  axios
    .put(`product/${id}/`, data, { headers })
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
};
