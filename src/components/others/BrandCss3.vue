<script>
export default {
  install(Vue, options) {
    Vue.component('brand-css3-pcon', this)
  },
  name: 'brand-css3',
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
<path d="M20 4L18 18.5L12 20.5L6 18.5L4 4H20Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 8H15.5L11 12H15L14.5 15.5L12 16.25L9.5 15.5L9.4 15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    