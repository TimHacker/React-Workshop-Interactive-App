import React from 'react';
import PropTypes from 'prop-types';

const AppHeader = ({ logo }) =>
  (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
  );

AppHeader.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default AppHeader;
