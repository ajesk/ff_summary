import React, { Component } from 'react';
import Nav from './components/Nav';
import Container from './components/Container';

import './App.css';

class App extends Component {
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
    return (
      <div className="App">
        <Nav openSideBar={this.openSideBar.bind(this)}/>
        <Container />
      </div>
    );
  }
}

export default App;
