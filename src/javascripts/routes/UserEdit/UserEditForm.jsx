import React, { Component } from 'react'
import clone from 'lodash/clone'
import merge from 'lodash/merge'

import Styles from './index.css'

export default class UserEditForm extends Component {
  constructor(props) {
    super()
    const { user } = props
    this.state = { user }
  }

  render() {
    return (
      <div className={Styles['modal-container']}>
        <div className={Styles['modal']}>
          <input
            value={this.state.user.name}
            onChange={name =>
              this.setState({ user: merge(clone(this.state.user), { name }) })
            }
          />
          <input
            value={this.state.user.height}
            onChange={height =>
              this.setState({ user: merge(clone(this.state.user), { height }) })
            }
          />
        </div>
      </div>
    )
  }
}
