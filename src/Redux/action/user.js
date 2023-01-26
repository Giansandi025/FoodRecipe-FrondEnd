import axios from 'axios';

//LOGIN
export const userLogin = (form) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, form)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// REGISTER
export const userRegister = (form) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/register`, form)

      .then((response) => {
        resolve(response);
        alert('');
      })
      .catch((err) => {
        reject(err);
      });
  });
};
