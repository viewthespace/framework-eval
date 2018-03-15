<template>
  <div class="header">{{ header }}</div>  
</template>

<script>
export default {
  props: ['header']  
}
</script>


<style lang="scss">
.header {
  display: inline-block;
  width: 200px;
}
</style>
