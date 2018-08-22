import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import Todo from './todo/Todo';
import About from './about/About';

class Routes extends Component {
  render() {
    return(
      <Router>
        <Route path="/todos" component={Todo} />
        <Route path="/about" component={About} />
        <Route from="*" to="/todos" />
      </Router>
    );
  }
}

export default Routes;