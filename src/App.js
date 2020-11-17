import React, { Component } from 'react';
import Nav from './components/Nav';
import SideBar from './components/SideBar';
import Container from './components/Container';

import './App.css';

class App extends Component {
  state = {
    leagueInfo: [
      {
        leagueId: 222468, teamId: 6, seasonId: 2018
      }
    ],
    showSideBar: false,
  };

  componentDidMount() {
  }

  closeMenus() {
    this.setState({
      showSideBar: false
    });
  }

  openSideBar() {
    this.setState({
      showSideBar: true
    });
  }

  render() {
    const {leagueInfo} = this.state;

    return (
      <div className="App">
        <Nav openSideBar={this.openSideBar.bind(this)}/>
        <SideBar close={this.closeMenus.bind(this)} open={this.state.showSideBar} />
        <Container leagueInfo={leagueInfo[0]} />
      </div>
    );
  }
}

export default App;
