import React, { Component } from 'react';
import AppContent from './components/app-content';
import ajax from '@fdaciuk/ajax';
import GlobalStyle from './styles/global';
import Tema from './components/theme';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false,
      isDark: false,
    };
  }

  getGitHubApiUrl(username, type) {
    const internalUser = username ? `/${username}` : '';
    const internalType = type ? `/${type}` : '';
    return `https://api.github.com/users${internalUser}${internalType}`;
  }

  handleSearch(e) {
    const value = e.target.value;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;

    if (keyCode === ENTER) {
      this.setState({
        isFetching: true,
      });

      ajax()
        .get(this.getGitHubApiUrl(value))
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
            repos: [],
            starred: [],
          });
          console.log(result);
        })
        .always(() => {
          this.setState({
            isFetching: false,
          });
        });
    }
    return value;
  }

  getRepos(type) {
    return (e) => {
      const username = this.state.userinfo.login;
      ajax()
        .get(this.getGitHubApiUrl(username, type))
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

  hClick(e) {
    const checked = e.target.checked;
    this.setState({ isDark: checked });
    // checked
    //   ? this.setState({ theme: 'whiteColor' })
    //   : this.setState({ theme: 'blackColor' });
  }

  render() {
    return (
      <>
        <GlobalStyle {...this.state} />
        <AppContent
          {...this.state}
          handleSearch={(e) => this.handleSearch(e)}
          getRepos={this.getRepos('repos')}
          getStarred={this.getRepos('starred')}
        />
        <Tema hClick={(e) => this.hClick(e)} />
      </>
    );
  }
}

export default App;
