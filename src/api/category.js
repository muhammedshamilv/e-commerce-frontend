import LocalStorageService from '../utils/LocalStorageService';
import axios from './axios';

const token = LocalStorageService.getAccessToken();
const headers = {
  Authorization: `Bearer ${token}`,
};
const getCategories = ({ successCB, errorCB }) => {
  axios
    .get('product/category/', { headers })
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
