<script>
export default {
  install(Vue, options) {
    Vue.component('brand-badoo-pcon', this)
  },
  name: 'brand-badoo',
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
<path d="M22 9.4299C22 15.2679 17.523 19.9999 12 19.9999C6.47701 19.9999 2.00001 15.3379 2.00001 9.4999C1.99601 6.8329 3.83001 4.4899 6.32201 4.0709C8.81401 3.6529 11.222 5.4629 12 7.9999C12.768 5.4599 15.177 3.6459 17.668 4.0689C20.163 4.4859 22 6.7589 22 9.4289V9.4299Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 10C7.5 12.761 9.515 15 12 15C14.485 15 16.5 12.761 16.5 10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    