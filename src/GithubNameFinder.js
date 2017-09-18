import React from 'react';
import PropTypes from 'prop-types';

class GithubNameFinder extends React.Component {

  constructor(props) {
    super(props);

    this.state = { name: '', isLoading: false };
  }

  componentWillMount() {
    this.searchForUser(this.props.username);
  }

  getGitHubUser(name) {
    return fetch(`http://github-proxy-api.herokuapp.com/users/${name}`)
      .then(data => data.json());
  }

  searchForUser(name) {
    this.setState({ isLoading: true });
    this.getGitHubUser(name).then((info) => {
      this.setState({ name: info.name, isLoading: false });
    });
  }

  render() {
    return (
      <div>
        <h2>Find a github user&apos;s full name</h2>
        <input type="text" ref={(c) => { this.textInput = c; }} />
        <button onClick={() => this.searchForUser(this.textInput.value)}>Search</button>

        {!this.state.isLoading &&
          <div>Full name: { this.state.name }</div>
        }
        {this.state.isLoading &&
          <div>LOADING...</div>
        }
      </div>
    );
  }
}

GithubNameFinder.propTypes = {
  username: PropTypes
    .string
    .isRequired,
};

export default GithubNameFinder;
