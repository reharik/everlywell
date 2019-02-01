import { reducerMerge } from './../redux/reducerMerge';
import selectn from 'selectn';

export const RECIPELIST_REQUEST = 'everlywell/RECIPELIST_REQUEST';
export const RECIPELIST_SUCCESS = 'everlywell/RECIPELIST_SUCCESS';
export const RECIPELIST_FAILURE = '@@everlywell/RECIPELIST_FAILURE';

export default (state = [], action = {}) => {
  switch (action.type) {
    case RECIPELIST_REQUEST.SUCCESS:
      let recipes = selectn('action.payload.meals', action);
      return reducerMerge(state, recipes, 'idMeal');
    }
    default:
      return state;
  }
};

function fetchRecipes(search) {
  return {
    [RSAA]: {
      headers: {'Content-Type': 'application/json'},
      endpoint: `www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
      method:'GET',
      types:[RECIPELIST_REQUEST,RECIPELIST_SUCCESS,RECIPELIST_FAILURE]
    }
  };
}
