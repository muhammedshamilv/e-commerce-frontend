import axios from './axios';

const login = ({ email, password, successCB, errorCB }) => {
  const data = {
    email: email,
    password: password,
  };
  axios
    .post('sign-in/', data)
    .then((response) => {
      successCB(response.data);
      return response.data;
    })
    .catch((err) => {
      console.error(err);
      if (errorCB) {
        errorCB(err);
      }
    });
};

const signup = ({ email, password, successCB, errorCB }) => {
  const data = {
    email: email,
    password1: password,
  };
  axios
    .post('sign-up/', data)
    .then((response) => {
      successCB(response.data);
      return response.data;
    })
    .catch((err) => {
      console.error(err);
      if (errorCB) {
        errorCB(err);
      }
    });
};

export { login, signup };
