/* eslint-disable react/prop-types */
import React from 'react';
import { addFavorites, removeFromFavorites } from '../actions';
class MovieCard extends React.Component {
  handleFavouriteClick = () => {
    const { movies } = this.props;
    this.props.dispatch(addFavorites(movies));
  };
  handleUnFavouriteClick = () => {
    const { movies } = this.props;
    this.props.dispatch(removeFromFavorites(movies));
  };

  render() {
    const { movies, isFavourite } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movies.Poster} />
        </div>
        <div className="right">
          <div className="title">{movies.Title}</div>
          <div className="plot">{movies.Plot}</div>

          <div className="footer">
            <div className="rating">{movies.imdbRating}</div>
            <div className="year">{movies.Year}</div>
            {isFavourite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnFavouriteClick}
              >
                Unfavourite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleFavouriteClick}
              >
                Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
