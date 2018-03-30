import React, { Component } from 'react'
import VtsTable from '@components/VtsTable'
import VtsTableRow from '@components/VtsTable/VtsTableRow'
import VtsCell from '@components/VtsTable/VtsCell'

export default class UserList extends Component {
  render() {
    return (
      <VtsTable config={tableConfig}>
        {this.props.users.map((user, i) => (
          <div onClick={() => this.props.history.push(`/user/${i}/edit`)}>
            <VtsTableRow>
              <VtsCell>{user.name}</VtsCell>
              <VtsCell>{user.height}</VtsCell>
            </VtsTableRow>
          </div>
        ))}
      </VtsTable>
    )
  }
}

const tableConfig = {
  columns: [{ title: 'Name' }, { title: 'Height' }]
}
