<script>
export default {
  install(Vue, options) {
    Vue.component('beer-svg-pcon', this)
  },
  name: 'beer-svg',
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
<path d="M9 20H15V15.889C15.0001 14.6469 15.2894 13.4219 15.845 12.311L16.155 11.689C16.7106 10.5781 16.9999 9.35309 17 8.111V4H7V8.111C7.00008 9.35309 7.28939 10.5781 7.845 11.689L8.155 12.311C8.71061 13.4219 8.99992 14.6469 9 15.889V20Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 8H17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    