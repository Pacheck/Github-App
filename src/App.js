import React, { Component } from 'react';
import './App.css';
import './css/index.css';
import AppContent from './components/app-content';
import ajax from '@fdaciuk/ajax';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
    };
  }

  // getStarred() {
  //   console.log('favoritos');
  // }

  handleSearch(e) {
    const value = e.target.value;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;
    if (keyCode === ENTER) {
      ajax()
        .get(`https://api.github.com/users/${value}`)
        .then((result) => {
          this.setState({
            userinfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following,
            },
          });
          console.log(result);
        });
    }
    return value;
  }

  getRepos(type) {
    return (e) => {
      console.log('type:' + type);
      ajax()
        .get(
          `https://api.github.com/users/${this.state.userinfo.login}/${type}`
        )
        .then((result) => {
          this.setState({
            [type]: result.map((repo) => {
              return {
                name: repo.name,
                link: repo.html_url,
              };
            }),
          });
        });
    };
  }

  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
      />
    );
  }
}

export default App;
