import axios from './axios';

const login = ({ email, password, successCB }) => {
  console.log({ email }, { password });
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
    .catch((err) => console.log(err));
};

const signup = ({ email, password, successCB }) => {
  console.log({ email }, { password });
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
    .catch((err) => console.log(err));
};

export { login, signup };
