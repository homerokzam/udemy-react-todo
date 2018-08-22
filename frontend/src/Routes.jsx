import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Todo from './todo/Todo';
import About from './about/About';

class Routes extends Component {
  render() {
    return(
      <Switch>
        <Route path="/todos" render={() => (<Todo />)} />
        <Route path="/about" render={() => (<About/>)} />
        <Route from="*" to="/todos" />
      </Switch>
    );
  }
}

export default Routes;