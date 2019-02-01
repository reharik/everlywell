import logger from 'redux-logger';
import rootReducer from '../redux/rootReducer';
import { apiMiddleware } from 'redux-api-middleware';
import { applyMiddleware, createStore } from 'redux';

export default function configureStore() {
  const initialState = {
    recipeList:{
      errorMessage:'',
      isFetching: false,
      recipes:[],
    },
    specialsList: {
      date:'',
      specials:[],
    }
  };

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(apiMiddleware, logger),
  );
}
