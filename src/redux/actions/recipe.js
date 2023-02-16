import axios from 'axios'

export const getLatestRecipe = () => {
  return {
    type: 'GET_LATEST_RECIPE',
    payload: axios({
      method: 'GET',
      url: process.env.REACT_APP_BACKEND_URL + 'recipe/latest'
    })
  }
}
export const getListRecipe = (searchData, filterType, sort, pageNumber) => {
  const token = localStorage.getItem('token')
  return {
    type: 'GET_LIST_RECIPE',
    payload: axios({
      method: 'GET',
      url: process.env.REACT_APP_BACKEND_URL + 'list/recipe?name=' + searchData + '&sortField=' + filterType + '&sortType=' + sort + '&page=' + pageNumber + '&limit=3',
      headers: {
        token
      }
    })
  }
}
export const getMyRecipe = () => {
  const token = localStorage.getItem('token')
  return {
    type: 'GET_MY_RECIPE',
    payload: axios({
      method: 'GET',
      url: process.env.REACT_APP_BACKEND_URL + 'show/myrecipe',
      headers: {
        token
      }
    })
  }
}
export const getDetailRecipe = (recipeId) => {
  const token = localStorage.getItem('token')
  return {
    type: 'GET_DETAIL_RECIPE',
    payload: axios({
      method: 'GET',
      url: process.env.REACT_APP_BACKEND_URL + 'recipe/detail/' + recipeId,
      headers: {
        token
      }
    })
  }
}
export const insertRecipe = (data) => {
  const token = localStorage.getItem('token')
  return new Promise((resolve, reject) => {
    axios.post(process.env.REACT_APP_BACKEND_URL + 'insert/recipe', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        token
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
export const editRecipe = (data, id) => {
  const token = localStorage.getItem('token')
  return new Promise((resolve, reject) => {
    axios.put(process.env.REACT_APP_BACKEND_URL + 'edit/recipe/' + id, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        token
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
export const deleteRecipe = (id) => {
  const token = localStorage.getItem('token')
  return new Promise((resolve, reject) => {
    axios.delete(process.env.REACT_APP_BACKEND_URL + 'delete/recipe/' + id, {
      headers: {
        token
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
