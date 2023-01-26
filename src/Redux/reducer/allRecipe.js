const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

const allRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST_ALL_RECIPE_PENDING':
      return { ...state, isLoading: true };
    case 'GET_LIST_ALL_RECIPE_FULFILLED':
      return { ...state, isLoading: false, data: action.payload.data.rows };
    case 'GET_LIST_ALL_RECIPE_REJECTED':
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};

export default allRecipeReducer;
