import React, { Component } from 'react'
import CellStyles from '@styles/CellStyles.css'

export default class VtsTable extends Component {
  render() {
    return (
      <div className="table">
        <div className="table-header">
          {this.props.config.columns.map(column => (
            <div className={CellStyles['table-cell']}>{column.title}</div>
          ))}
        </div>
        {this.props.children}
      </div>
    )
  }
}