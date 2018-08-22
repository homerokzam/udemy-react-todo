import React, { Component } from 'react';
import { Switch, Link } from 'react-router-dom';

class Routes extends Component {
  render() {
    return(
      <div>
        <Link to="/todos" />
        <Link to="/about" />
        <Link from="*" to="/todos" />
      </div>
    );
  }
}

export default Routes;