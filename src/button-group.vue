<template>
  <div class="h-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.h-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .h-button {
    border-radius: 0;
    margin-left: -1px;
    // &:not(:first-child) {
    //   border-left: none;
    // }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
