import axios from 'axios';

//ADD
export const insertRecipe = (addForm) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/recipe`, addForm)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//UPDATE
export const updateRecipe = (id, form) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${process.env.REACT_APP_API_URL}/recipe/${id}`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//DELETE
export const deleteRecipe = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/recipe/${id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//GET DETAIL
export const getRecipeProfile = () => {
  return {
    type: 'GET_LIST_PROFILE_RECIPE',
    payload: axios({
      url: `${process.env.REACT_APP_API_URL}/recipe/profile`,
      method: 'GET',
    }),
  };
};

export const getRecipe = (sorting, limit, page) => {
  return {
    type: 'GET_LIST_DETAIL_PROFILE',
    payload: axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/recipe?sorting=${sorting}&limit=${limit}${page ? `&page=${page}` : ''}`,
    }),
  };
};

export const getIdRecipe = (id) => {
  return {
    type: 'GET_LIST_DETAIL',
    payload: axios({
      url: `${process.env.REACT_APP_API_URL}/recipe/${id}`,
      method: 'GET',
    }),
  };
};

//SEARCH

export const getAllRecipe = (resultSearch) => {
  return {
    type: 'GET_LIST_ALL_RECIPE',
    payload: axios({
      url: `${process.env.REACT_APP_API_URL}/recipe?searchRecipe=${resultSearch}`,
      method: 'GET',
    }),
  };
};
