<script>
export default {
  install(Vue, options) {
    Vue.component('headers-svg-pcon', this)
  },
  name: 'headers-svg',
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
<path d="M20.1818 4H3.81818C3.36631 4 3 4.34112 3 4.7619V8.57143C3 8.99222 3.36631 9.33333 3.81818 9.33333H20.1818C20.6337 9.33333 21 8.99222 21 8.57143V4.7619C21 4.34112 20.6337 4 20.1818 4Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 13L21 13M3.00063 16.5H21M3.00063 20H16.0909" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    