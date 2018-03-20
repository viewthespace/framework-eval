<template>
  <div class='app'>
    <h1>Data table</h1>
    <vts-table class='some-table' :config='config' empty-message='No people were found matching that criteria'>
      <!-- this @click.native is weird. don't want to have to add a modifier to click handlers. -->
      <vts-table-row :key='user.title' v-for='(user, index) in users' @click.native='openUserForm(index, user)'>
        <vts-cell :value='user.name' />
        <vts-cell :value='user.height' />
        <vts-cell :value='user.age' />
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
import List from '@routes/List'
import VtsTable from '@components/Table'
import VtsTableRow from '@components/Table/VtsTableRow'
import VtsCell from '@components/Table/VtsCell'

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
      .then(json => (this.users = json))
  },

  data() {
    return {
      dataSource: [1, 2, 3],
      users: [],
      config: {
        columns: [
          { width: 5, title: 'name' },
          { width: 4, title: 'height' },
          { width: 3, title: 'age' }
        ]
      }
    }
  },
  
  methods: {
    openUserForm(index, user) {
      this.$router.push({ path: `/user/${index}` })
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

