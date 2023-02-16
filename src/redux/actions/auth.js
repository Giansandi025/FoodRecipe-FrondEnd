import axios from 'axios'

export const login = (data) => {
  return new Promise((resolve, reject) => {
    axios.post(process.env.REACT_APP_BACKEND_URL + 'login', data)
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export const register = (data) => {
  return new Promise((resolve, reject) => {
    axios.post(process.env.REACT_APP_BACKEND_URL + 'register', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
