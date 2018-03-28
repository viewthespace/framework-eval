import React, { Component } from 'react'
import { render } from 'react-dom'
import VtsTable from '@components/vts-table'
import VtsTableRow from '@components/vts-table/vts-table-row'
import VtsCell from '@components/vts-table/vts-cell'

class App extends Component {
  constructor() {
    super()
    this.state = {
      users:
        [
          { name: "Kyle Holzinger", height: 978234 },
          { name: "Evan Goodberry", height: 234789 },
          { name: "Maurice Cruz", height: 4534897 },
          { name: "Omar Zamudio", height: 34586778 },
          { name: "Chuck Groom", height: 7859834 }
        ]
    }
  }

  render() {
    return (<div>
      <VtsTable config={tableConfig}>
        {this.state.users.map(user => (
          <VtsTableRow>
            <VtsCell>{user.name}</VtsCell>
            <VtsCell>{user.height}</VtsCell>
          </VtsTableRow>
        ))}
      </VtsTable>
    </div>)
  }
}

const tableConfig = {
  columns: [
    { title: 'Name' },
    { title: 'Height' }
  ]
}

render(<App />, document.querySelector('#app'))
