<template>
  <div class='cell'>{{ value }}</div>
</template>

<script>
export default {
  props: ['value'],
}
</script>

<style scoped>
.cell {
  display: inline-block;
  width: 200px;
  padding: 10px 0;
}
</style>
