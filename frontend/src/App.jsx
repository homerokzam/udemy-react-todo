import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import React, { Component } from 'react';
import './App.css';
import Menu from './template/Menu';
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Menu />
        <Routes />
      </div>
    );
  }
}

export default App;