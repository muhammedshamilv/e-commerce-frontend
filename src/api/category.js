import LocalStorageService from '../utils/LocalStorageService';
import axios from './axios';

const getCategories = ({ successCB, errorCB }) => {
  axios
    .get('product/category/')
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

export { getCategories };
