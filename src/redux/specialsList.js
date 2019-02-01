import { reducerMerge } from './../redux/reducerMerge';
import selectn from 'selectn';
import { RSAA } from 'redux-api-middleware';

export const RECIPELIST_REQUEST = 'everlywell/RECIPELIST_REQUEST';
export const RECIPELIST_SUCCESS = 'everlywell/RECIPELIST_SUCCESS';
export const RECIPELIST_FAILURE = '@@everlywell/RECIPELIST_FAILURE';

export const RECIPE_REQUEST = 'everlywell/RECIPE_REQUEST';
export const RECIPE_SUCCESS = 'everlywell/RECIPE_SUCCESS';
export const RECIPE_FAILURE = '@@everlywell/RECIPE_FAILURE';
export default (state = {}, action = {}) => {
  switch (action.type) {
    case RECIPE_REQUEST:
    case RECIPELIST_REQUEST: {
      return {...state, isFetching: true}
    }
    case RECIPE_FAILURE:
      case RECIPELIST_FAILURE: {
      return {...state, isFetching: false, errorMessage: "Were sorry there seems to have been an error"}
    }
    case RECIPE_SUCCESS:
    case RECIPELIST_SUCCESS: {
      let recipes = selectn('payload.meals', action);
      return {...state,
        isFetching: false,
        errorMessage:'',
        recipes:reducerMerge(state.recipes, recipes, 'idMeal')};
    }
    default:
      return state;
  }
};

function fetchRecipes(search) {
  return {
    [RSAA]: {
      endpoint: `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
      method:'GET',
      types:[RECIPELIST_REQUEST,RECIPELIST_SUCCESS,RECIPELIST_FAILURE]
    }
  };
}

function fetchRecipe(id) {
  return {
    [RSAA]: {
      endpoint: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
      method:'GET',
      types:[RECIPELIST_REQUEST,RECIPELIST_SUCCESS,RECIPELIST_FAILURE]
    }
  };
}

export {
  fetchRecipes,
  fetchRecipe
}
