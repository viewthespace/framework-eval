import React, { Component } from 'react'
import { render } from 'react-dom'
import UserList from './routes/UserList'

class App extends Component {
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

render(<App />, document.querySelector('#app'))
