<template>
  <div class='app'>
    <div>hello, world!</div>
    <list :data-set='dataSource'></list>
    <h1 class='some-title'>Another list</h1>
    <!-- this list is here to demonstrate scoped stylings -->
    <ul>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>
  </div>
</template>

<script>
import List from './List.vue'

export default {
  name: 'app',
  components: {
    List
  },
  data() {
    return {
      dataSource: [1, 2, 3]
    }
  }
}
</script>

<style lang='scss'>
.some-title {
  margin-top: 20px;
}
</style>

