<script>
export default {
  install(Vue, options) {
    Vue.component('highlighter-circle-pcon', this)
  },
  name: 'highlighter-circle',
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
<path d="M10.5146 13.5V9L15.0147 6.75V13.5M16.5147 20.1842V14.25C16.5147 14.0511 16.4356 13.8603 16.295 13.7197C16.1543 13.579 15.9636 13.5 15.7647 13.5H9.76465C9.56574 13.5 9.37497 13.579 9.23432 13.7197C9.09367 13.8603 9.01465 14.0511 9.01465 14.25V20.1842M21.7647 12C21.7647 16.9706 17.7352 21 12.7646 21C7.79409 21 3.76465 16.9706 3.76465 12C3.76465 7.02944 7.79409 3 12.7646 3C17.7352 3 21.7647 7.02944 21.7647 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    