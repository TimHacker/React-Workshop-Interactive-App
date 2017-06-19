import React from 'react';
import PropTypes from 'prop-types';

const Name = ({person}) => 
    (
        <p>My name is {person.name} and my favourite colour is {person.favouriteColour}</p>
    );

Name.propTypes = {
    person: PropTypes.objectOf(PropTypes.string).isRequired
};

export default Name;