<script>
export default {
  install(Vue, options) {
    Vue.component('plus-circle-pcon', this)
  },
  name: 'plus-circle',
  props: {
    size: {
      type: Number,
      default: 24
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    strokeWidth: {
      type: Number,
      default: 1.7
    },
    color: {
      type: String,
      default: "currentColor"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.95557 12H16.4556M12.7056 8.25V15.75M21.7056 12C21.7056 16.9706 17.6761 21 12.7056 21C7.735 21 3.70557 16.9706 3.70557 12C3.70557 7.02944 7.735 3 12.7056 3C17.6761 3 21.7056 7.02944 21.7056 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    