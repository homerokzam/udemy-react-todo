import React, { Component } from 'react'

class PageHeader extends Component {
  render() {
    return(
      <header>
        <h2>{this.props.name} <small>{this.props.name}</small></h2>
      </header>
    )
  }
}

export default PageHeader;