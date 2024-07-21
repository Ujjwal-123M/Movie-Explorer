// {
//   type: 'INCREASE_COUNT',

// }

// {
//   type: 'DECREASE_COUNT',
// }

// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVORITES = 'ADD_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const SET_SHOW_FAVORITES = 'SET_SHOW_FAVORITES';

// action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
export function addFavorites(movie) {
  return {
    type: ADD_FAVORITES,
    movie,
  };
}
export function removeFromFavorites(movie) {
  return {
    type: REMOVE_FROM_FAVORITES,
    movie,
  };
}
export function setShowFavorites(value) {
  return {
    type: SET_SHOW_FAVORITES,
    value,
  };
}
