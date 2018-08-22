import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Todo from './todo/Todo';
import About from './about/About';

class Routes extends Component {
  render() {
    return(
      <div>
        <Switch>
          <Route exact path="/todos" render={() => (<Todo/>)} />
          <Route exact path="/about" render={() => (<About/>)} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Routes;