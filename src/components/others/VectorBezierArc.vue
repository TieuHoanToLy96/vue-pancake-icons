<script>
export default {
  install(Vue, options) {
    Vue.component('vector-bezier-arc-pcon', this)
  },
  name: 'vector-bezier-arc',
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
<path d="M6 10H4C3.44772 10 3 10.4477 3 11V13C3 13.5523 3.44772 14 4 14H6C6.55228 14 7 13.5523 7 13V11C7 10.4477 6.55228 10 6 10Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 10H18C17.4477 10 17 10.4477 17 11V13C17 13.5523 17.4477 14 18 14H20C20.5523 14 21 13.5523 21 13V11C21 10.4477 20.5523 10 20 10Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 3H11C10.4477 3 10 3.44772 10 4V6C10 6.55228 10.4477 7 11 7H13C13.5523 7 14 6.55228 14 6V4C14 3.44772 13.5523 3 13 3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 17H11C10.4477 17 10 17.4477 10 18V20C10 20.5523 10.4477 21 11 21H13C13.5523 21 14 20.5523 14 20V18C14 17.4477 13.5523 17 13 17Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 10C19 8.67392 18.4732 7.40215 17.5355 6.46447C16.5979 5.52678 15.3261 5 14 5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 14C5 15.3261 5.52678 16.5979 6.46447 17.5355C7.40215 18.4732 8.67392 19 10 19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    