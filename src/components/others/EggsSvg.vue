<script>
export default {
  install(Vue, options) {
    Vue.component('eggs-svg-pcon', this)
  },
  name: 'eggs-svg',
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
<path d="M13 22C10 22 8.13201 19.882 8.00501 17C8.00001 14 10 12 13 12C17 12 21.01 14.5 21.005 17C21 19.5 17 22 13 22V22Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 18C4.97 17.804 3 15.691 3 12.62C3 8.313 5.75 3.995 8.5 4C11.114 4.005 13.748 7.915 14 12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    