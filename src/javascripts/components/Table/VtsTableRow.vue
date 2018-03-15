<template>
<div class="table-row"><slot></slot></div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.table-row {
  transition: all 150ms ease;
  cursor: pointer;

  &:hover {
    background-color: lightgrey;
  }
}
</style>

