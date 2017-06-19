import React from 'react';
import PropTypes from 'prop-types';

const Name = ({person}) => 
    (
        <div>
            <p>My name is {person.name} and my favourite colour is {person.favouriteColour}</p>
            <p>And I'm the ripe old age of {person.age}</p>
        </div>
    );

Name.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        favouriteColour: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
    }).isRequired
};

export default Name;