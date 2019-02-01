import recipeList from './../redux/recipeList';
import specialsList from './../redux/specialsList';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  recipeList,
  specialsList
});

export default rootReducer;
