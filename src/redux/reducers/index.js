import { combineReducers } from 'redux'
import userReducer from './users'
import listRecipeReducer from './recipe'
import detailRecipeReducer from './detailRecipe'
import latestRecipeReducer from './latestRecipe'
import myRecipeReducer from './myRecipe'

const rootReducers = combineReducers({
  user: userReducer,
  listRecipe: listRecipeReducer,
  detailRecipe: detailRecipeReducer,
  latestRecipe: latestRecipeReducer,
  myRecipe: myRecipeReducer
})

export default rootReducers
