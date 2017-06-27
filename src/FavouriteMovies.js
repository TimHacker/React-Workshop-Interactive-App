import React from 'react';
import PropTypes from 'prop-types';

const FavouriteMovies = ({ movies }) =>
  (
    <ul>
      {movies.map(movie =>
      (
        <li key={movie.name}>
          Movie title: &quot;{movie.name}&quot;, my rating is: {movie.rating} out of 5
        </li>
      ))}
    </ul>
  );

FavouriteMovies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequired,
};

export default FavouriteMovies;
