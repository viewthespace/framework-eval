import React, { Component } from 'react'
import CellStyles from '@styles/CellStyles.css'

export default class VtsCell extends Component {
  render() {
    return (
      <div className={CellStyles['table-cell']}>
        {this.props.children}
      </div>
    )
  }
}
