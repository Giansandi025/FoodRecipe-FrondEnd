import axios from 'axios'

export const getDetailUser = (userId) => {
  const token = localStorage.getItem('token')
  return {
    type: 'GET_USER_DETAIL',
    payload: axios({
      method: 'GET',
      url: process.env.REACT_APP_BACKEND_URL + 'detail/user/' + userId,
      headers: {
        token
      }
    })
  }
}
