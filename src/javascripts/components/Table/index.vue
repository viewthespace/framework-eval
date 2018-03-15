<template>
<div class="table">
  <div class="header-row">
    <vts-table-header
      v-for='column in config.columns'
      :key='column.title'
      :header='column.title'></vts-table-header>
  </div>

  <slot>
    {{ emptyMessage }}
  </slot>
</div>
</template>

<script>
import VtsTableHeader from './VtsTableHeader'

export default {
  components: { VtsTableHeader },
  props: ['emptyMessage', 'config']
}
</script>

<style scoped>
</style>
