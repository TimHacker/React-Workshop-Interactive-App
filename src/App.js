import React from 'react';

import AppHeader from './AppHeader';
import Name from './Name';
import FavouriteMovies from './FavouriteMovies';

import logo from './logo.svg';
import './App.css';

const App = () => {
  const movieList = [
    { name: 'LOTR', rating: 5 },
    { name: 'Star Wars', rating: 5 },
    { name: 'Iron Man', rating: 4 },
    { name: 'The worse', rating: 0 },
  ];

  return (
    <div className="App">
      <AppHeader logo={logo} />
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <div>
        <h3>Custom Name Component:</h3>
        <Name person={{ name: 'Tim', age: 27, favouriteColour: 'Blue' }} />
      </div>
      <FavouriteMovies movies={movieList} />
    </div>
  );
};

export default App;
