const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  errorMessage: ''
}

// pending, fulfilled, reject
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_DETAIL_PENDING':
      return { ...state, isLoading: true }
    case 'GET_USER_DETAIL_FULFILLED':
      return { ...state, isLoading: false, data: action.payload.data.data }
    case 'GET_USER_DETAIL_REJECTED':
      return { ...state, isLoading: false, isError: true, errorMessage: action.payload.err }
    default:
      return state
  }
}
export default userReducer
