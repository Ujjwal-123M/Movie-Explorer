/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, setShowFavorites } from '../actions';
class App extends React.Component {
  componentDidMount() {
    // make a api call
    // dispatch action
    const { store } = this.props;
    store.subscribe(() => {
      console.log('Updated');
      this.forceUpdate(); // don't use this method it update forcefully
    });
    this.props.store.dispatch({
      type: 'ADD_MOVIES',
      movies: data,
    });
    console.log('STATE', this.props.store.getState());
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const index = movies.favorites.indexOf(movie);
    if (index !== -1) {
      // found the movie
      return true;
    }
    return false;
  };
  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavorites(val));
  };
  render() {
    const { movies } = this.props.store.getState();
    const { list, favorites, showFavorites } = movies; // Accessing the list array correctly
    console.log('render', this.props.store.getState());
    const displayMovie = showFavorites ? favorites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavorites ? '' : 'active-tabs'}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavorites ? 'active-tabs' : ''}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favorites
            </div>
          </div>

          <div className="list">
            {displayMovie.map((movie, index) => (
              <MovieCard
                movies={movie}
                key={`movies-${index}`} // Use index instead of index}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              /> // Change prop name to 'movies' and use 'index' directly
            ))}
          </div>
          {displayMovie.length === 0 && (
            <div className="no-movies">No movies to display</div>
          )}
        </div>
      </div>
    );
  }
}
export default App;
