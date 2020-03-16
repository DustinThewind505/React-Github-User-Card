import React from 'react';

import './App.css';
import ListContainer from './components/ListContainer';

class App extends React.Component {

  state = {
    userName: "",
    avatarUrl: "",
    followers: [],
  }

  componentDidMount() {
    fetch("https://api.github.com/users/DustinThewind505")
      .then(res => res.json())
      .then(response => {
        this.setState({
          userName: response.login,
          avatarUrl: response.avatar_url
        })
      })
      .catch(err => console.error(err))

    fetch("https://api.github.com/users/DustinThewind505/followers")
      .then(res => res.json())
      .then(response => {
        this.setState({
          followers: response
        })
      })
      .catch(err => console.error(err))

  };

  render() {
    console.log(this.state.followers)
    return (
      <div className="App">
        <header className="App-header">
          <div>
          <h1>User: {this.state.userName}</h1>
          <img className="App-logo" src={this.state.avatarUrl} />
            <ListContainer followers={this.state.followers} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
