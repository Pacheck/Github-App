import React, { Component } from 'react';
import AppContent from './components/app-content';
import ajax from '@fdaciuk/ajax';
import GlobalStyle from './styles/global';
import Switch from './components/theme/index';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
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
    console.log(value);
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;

    if (value) {
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
            this.notify('success', 'Carregado com sucesso!');
          })
          .catch((err) => {
            console.log(err);
            this.notify('error', 'Não foi possível encontrar');
          })
          .always(() => {
            this.setState({
              isFetching: false,
            });
          });
      }
    } else {
      console.error('Digite um valor para pesquisar');
    }

    return value;
  }

  // Repos requester
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

  // Theme color clickHandler
  hClick(e) {
    const checked = e.target.checked;
    this.setState({ isDark: checked });
  }

  // Toast Notification
  notify(type, message) {
    
    if (type === 'success') {
      toast.success(message, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  
  }

  render() {
    return (
      <>
        <Switch hClick={(e) => this.hClick(e)} />
        <GlobalStyle {...this.state} />
        <AppContent
          {...this.state}
          handleSearch={(e) => this.handleSearch(e)}
          getRepos={this.getRepos('repos')}
          getStarred={this.getRepos('starred')}
        />
      </>
    );
  }
}

export default App;
