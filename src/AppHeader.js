import React from 'react';
import PropTypes from 'prop-types';

const Name = ({logo}) => 
    (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
        </div>
    );

Name.propTypes = {
    logo: PropTypes.string.isRequired
};

export default Name;