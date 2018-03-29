import React, { Component } from 'react'
import VtsTable from '@components/vts-table'
import VtsTableRow from '@components/vts-table/vts-table-row'
import VtsCell from '@components/vts-table/vts-cell'

export default class UserList extends Component {
  render() {
    return (
      <VtsTable config={tableConfig}>
        {this.props.users.map(user => (
          <VtsTableRow>
            <VtsCell>{user.name}</VtsCell>
            <VtsCell>{user.height}</VtsCell>
          </VtsTableRow>
        ))}
      </VtsTable>
    )
  }
}

const tableConfig = {
  columns: [{ title: 'Name' }, { title: 'Height' }]
}
