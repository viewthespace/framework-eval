import React, { Component } from 'react'
import UserList from './UserList'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  componentWillMount() {
    fetch('/api/some-resource')
      .then(res => res.json())
      .then(json => this.setState({ users: json }))
  }

  render() {
    return (
      <div>
        <UserList users={this.state.users} />
      </div>
    )
  }
}