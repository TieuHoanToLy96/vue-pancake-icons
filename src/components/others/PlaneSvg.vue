<script>
export default {
  install(Vue, options) {
    Vue.component('plane-svg-pcon', this)
  },
  name: 'plane-svg',
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
<path d="M16 10H20C20.5304 10 21.0391 10.2107 21.4142 10.5858C21.7893 10.9609 22 11.4696 22 12C22 12.5304 21.7893 13.0391 21.4142 13.4142C21.0391 13.7893 20.5304 14 20 14H16L12 21H9L11 14H7L5 16H2L4 12L2 8H5L7 10H11L9 3H12L16 10Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    