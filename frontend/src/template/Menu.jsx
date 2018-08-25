import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return(

<nav className="navbar navbar-inverse">
  <div className="container">
    <div className="navbar-header">
      <Link className="navbar-brand" to="#" >
        <i className="fa fa-calendar-check-o"></i>Todo App
      </Link>
    </div>
    <div id="navbar" className="navbar-collapse">
      <ul className="nav navbar-nav">
        <li><Link to="todos">Tarefas</Link></li>
        <li><Link to="about">Sobre</Link></li>
      </ul>
    </div>
  </div>
</nav>

    );
  }
}

export default Menu;