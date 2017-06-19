import React, { Component } from 'react';

import AppHeader from './AppHeader'
import Name from './Name';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader logo={logo} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <h3>Custom Name Component:</h3>
          <Name person={{name: "Tim", favouriteColour: "Blue"}} />
        </div>
      </div>
    );
  }
}

export default App;
