<script>
export default {
  install(Vue, options) {
    Vue.component('cannabis-svg-pcon', this)
  },
  name: 'cannabis-svg',
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
<path d="M7 20C7 20 7 18 8 16.5C6.5 16.5 6 16 4 15C4 15 5.839 13.62 9 14C7.211 13.03 5.721 11.97 4 8C4 8 7.98 7.7 10.5 11.5C8.216 6.6 12 2 12 2C14.734 7.47 14.389 9.5 13.5 11.5C16.031 7.73 20 8 20 8C18.279 11.97 16.789 13.03 15 14C18.161 13.62 20 15 20 15C18 16 17.5 16.5 16 16.5C17 18 17 20 17 20C15 20 12.562 17.78 12 17C11.437 17.78 9 20 7 20Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22V17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    