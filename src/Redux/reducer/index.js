import recipeReducer from './recipe';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  listRecipe: recipeReducer,
  idrecipe: recipeReducer,
  recipe: recipeReducer,
  listProfileRecipe: recipeReducer,
});

export default rootReducer;
