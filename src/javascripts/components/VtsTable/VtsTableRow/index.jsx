import React, { Component } from 'react'

import styles from './index.css'

export default class VtsTableRow extends Component {
  render() {
    return <div className={styles['table-row']}>{this.props.children}</div>
  }
}
