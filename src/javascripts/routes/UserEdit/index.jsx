import React, { Component } from 'react'
import Styles from './index.css'

import UserEditForm from './UserEditForm'

export default class UserEdit extends Component {
  constructor() {
    super()
    this.state = { user: null }
  }

  componentWillMount() {
    fetch(`/api/user/${this.props.match.params.id}/edit`)
      .then(res => res.json())
      .then(user => this.setState({ user }))
  }

  render() {
    return (
      <div className={Styles['modal-container']} onClick={() => this.props.history.push('/')}>
        {this.state.user ? (
          <UserEditForm className={Styles['modal']} user={this.state.user} />
        ) : null}
      </div>
    )
  }
}
