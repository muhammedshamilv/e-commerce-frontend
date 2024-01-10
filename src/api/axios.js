import axios from 'axios';
import LocalStorageService from '../utils/LocalStorageService';

const url = process.env.REACT_APP_BASE_URL;

const instance = axios.create({ baseURL: url });
instance.interceptors.request.use(
  (config) => {
    if (config.headers === undefined) {
      config.headers = {};
    }
    const token = LocalStorageService.getAccessToken();
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default instance;
