<template>
  <button class="h-button" :class="{ [`icon-${iconPosition}`]: true }" @click="$emit('click')">
    <h-icon class="icon" v-if="icon && !loading" :name="icon"></h-icon>
    <h-icon class="icon loading" v-if="loading" name="loading"></h-icon>
    <div class="content"><slot></slot></div>
  </button>
</template>
<script>
export default {
  //props: ['icon', 'iconPosition']
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(val) {
        // if (val !== 'left' && val !== 'right') {
        //   return false
        // } else {
        //   return true
        // }
        //return !(val !== 'left' && val !== 'right')
        return val === 'left' || val === 'right'
      }
    }
  }
}
</script>
<style lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.h-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.3em;
      margin-right: 0;
    }
    > .content {
      order: 1;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>
