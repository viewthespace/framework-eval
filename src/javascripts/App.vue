<template>
  <div class='app'>
    <h1>Data table</h1>
    <vts-table class='some-table' :config='config' empty-message='No people were found matching that criteria'>
      <vts-table-row :key='column.title' v-for='column in tableData'>
        <vts-cell :value='column.name' />
        <vts-cell :value='column.height' />
        <vts-cell :value='column.age' />
      </vts-table-row>
    </vts-table>

    <h1>Styled list</h1>
    <list :data-set='dataSource'></list>
    <h1>Unstyled list</h1>
    <!-- this list is here to demonstrate scoped stylings -->
    <ul>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>
  </div>
</template>

<script>
import List from './List'
import VtsTable from './components/Table'
import VtsTableRow from './components/Table/VtsTableRow'
import VtsCell from './components/Table/VtsCell'

export default {
  name: 'app',
  components: {
    List,
    VtsTable,
    VtsTableRow,
    VtsCell
  },

  created() {
    fetch('/api/some-resource')
      .then(res => res.json())
      .then(json => (this.tableData = json))
  },

  data() {
    return {
      dataSource: [1, 2, 3],
      tableData: [],
      config: {
        columns: [
          { width: 5, title: 'name' },
          { width: 4, title: 'height' },
          { width: 3, title: 'age' }
        ]
      }
    }
  }
}
</script>

<style lang='scss'>
.some-title {
  margin-top: 20px;
}

.some-table {
  display: inline-block;
  width: 700px;
}
</style>

