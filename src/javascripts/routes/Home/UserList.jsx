import React, { Component } from 'react';
import VtsTable from '@components/VtsTable';
import VtsTableRow from '@components/VtsTable/VtsTableRow';
import VtsCell from '@components/VtsTable/VtsCell';
import VtsInput from '@components/VtsInput';
import VtsButton from '@components/VtsButton';

export default class UserList extends Component {
  constructor() {
    super();
    this.updateInput = this.updateInput.bind(this);
    this.addUser = this.addUser.bind(this);
    this.state = {
      name: 'someone',
      height: 1000,
      users: []
    };
  }

  componentDidMount() {
    fetch('/api/some-resource')
      .then(res => res.json())
      .then(json => this.setState({ users: json }));
  }

  addUser() {
    const { name, height } = this.state;

    fetch('/api/user/add', {
      method: 'post',
      body: JSON.stringify({ name, height }),
      headers: { 'Content-Type': 'application/json' }
    }).then(() => this.setState(state => ({ users: [...state.users, { name, height }] })));
  }

  updateInput({ name, value }) {
    this.setState({ [name]: value });
  }

  render() {
    const { name, height } = this.state;

    return (
      <div>
        <VtsTable config={tableConfig}>
          {this.state.users.map((user, i) => (
            <div onClick={() => this.props.history.push(`/user/${i}/edit`)}>
              <VtsTableRow>
                <VtsCell>{user.name}</VtsCell>
                <VtsCell>{user.height}</VtsCell>
              </VtsTableRow>
            </div>
          ))}
        </VtsTable>
        <VtsInput label="User Name" name="name" model={name} onChange={this.updateInput} />
        <VtsInput label="User Height" name="height" model={height} onChange={this.updateInput} />
        <VtsButton onClick={this.addUser}>Add User</VtsButton>
      </div>
    );
  }
}

const tableConfig = {
  columns: [{ title: 'Name' }, { title: 'Height' }]
};
