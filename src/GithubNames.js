import React from 'react';

class GithubNames extends React.Component {

  constructor(props) {
    super(props);

    this.state = { name: '' };
  }

  componentWillMount() {
    this.searchForUser('timhacker');
  }

  getGitHubUser(name) {
    return fetch(`http://github-proxy-api.herokuapp.com/users/${name}`)
      .then(data => data.json());
  }

  searchForUser(name) {
    this.getGitHubUser(name).then((info) => {
      this.setState({ name: info.name });
    });
  }

  render() {
    return (
      <div>
        <h2>Find a github user&apos;s full name</h2>
        <input type="text" ref={(c) => { this.textInput = c; }} />
        <button onClick={() => this.searchForUser(this.textInput.value)}>Search</button>
        <div>Full name: { this.state.name }</div>
      </div>
    );
  }
}

export default GithubNames;
