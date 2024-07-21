/* eslint-disable no-unused-vars */
import { combineReducers } from 'redux';
import {
  ADD_MOVIES,
  ADD_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SET_SHOW_FAVORITES,
} from '../actions';

const initialMoviesState = {
  list: [],
  favorites: [],
  showFavorites: false,
};
export function movies(state = initialMoviesState, action) {
  // if (action.type === ADD_MOVIES) {
  //   return {
  //     ...state,
  //     list: action.movies,
  //   };
  // }
  console.log('MOVIES REDUCER');
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVORITES:
      return {
        ...state,
        favorites: [action.movie, ...state.favorites],
      };
    case REMOVE_FROM_FAVORITES: {
      const filteredArray = state.favorites.filter(
        (m) => m.Title !== action.movie.Title
      );
      return {
        ...state,
        favorites: filteredArray,
      };
    }
    case SET_SHOW_FAVORITES:
      return {
        ...state,
        showFavorites: action.value,
      };

    default:
      return state;
  }
}
const initilaSearchState = {
  result: {},
};
export function search(state = initilaSearchState, action) {
  console.log('SEARCH_REDUCER');
  return state;
}

const initialRootState = {
  movies: initialMoviesState,
  search: initilaSearchState,
};
// export default function rootReducer(state = initialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }

export default combineReducers({
  movies,
  search,
});
