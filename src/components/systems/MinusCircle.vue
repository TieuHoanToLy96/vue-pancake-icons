<script>
export default {
  install(Vue, options) {
    Vue.component('minus-circle-pcon', this)
  },
  name: 'minus-circle',
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
<path d="M9.01489 12H16.5149M21.7649 12C21.7649 16.9706 17.7355 21 12.7649 21C7.79433 21 3.76489 16.9706 3.76489 12C3.76489 7.02944 7.79433 3 12.7649 3C17.7355 3 21.7649 7.02944 21.7649 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    