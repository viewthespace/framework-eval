<template>
  <ul>
    <li v-for='item in dataSet'>{{ item }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      title: 'Some List of Things'
    }
  },

  props: ['data-set']
}
</script>

<style scoped>
li + li {
  background-color: black;
  color: blue;
}

li {
  color: red;
}
</style>
