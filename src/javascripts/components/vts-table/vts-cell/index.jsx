import React, { Component } from 'react'
import CellStyles from '@styles/vts-cell'

export default class VtsCell extends Component {
  render() {
    return (
      <div className="table-cell" style={CellStyles}>
        {this.props.children}
      </div>
    )
  }
}