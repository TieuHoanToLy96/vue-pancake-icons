<script>
export default {
  install(Vue, options) {
    Vue.component('arrows-down-up-pcon', this)
  },
  name: 'arrows-down-up',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 16.5L7.5 19.5M7.5 19.5L4.5 16.5M7.5 19.5V4.5M13.5 7.5L16.5 4.5M16.5 4.5L19.5 7.5M16.5 4.5V19.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    