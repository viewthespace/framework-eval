import React, { Component } from 'react'

export default class VtsTableRow extends Component {
  render() {
    return (
      <div className="table-row">
        {this.props.children}
      </div>
    )
  }
}