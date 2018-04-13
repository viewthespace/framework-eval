import React, { Component } from 'react';
import UserList from './UserList';

export default class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <UserList history={this.props.history} />
      </div>
    );
  }
}
