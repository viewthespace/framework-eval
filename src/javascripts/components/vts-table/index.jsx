import React, { Component } from 'react'
import CellStyles from '@styles/vts-cell'

export default class VtsTable extends Component {
  render() {
    return (
      <div className="table">
        <div className="table-header">
          {this.props.config.columns.map(column => (
            <div className="table-head" style={CellStyles}>{column.title}</div>
          ))}
        </div>
        {this.props.children}
      </div>
    )
  }
}