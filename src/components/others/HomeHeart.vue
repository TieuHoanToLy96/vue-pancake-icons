<script>
export default {
  install(Vue, options) {
    Vue.component('home-heart-pcon', this)
  },
  name: 'home-heart',
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
<path d="M21 12L12 3L3 12H5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 21V15C9 14.4696 9.21071 13.9609 9.58579 13.5858C9.96086 13.2107 10.4696 13 11 13H13C13.39 13 13.754 13.112 14.061 13.304" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.994 21.5L21.512 18.92C21.8245 18.5964 21.9995 18.1642 22.0002 17.7143C22.001 17.2644 21.8274 16.8317 21.516 16.507C21.3645 16.3487 21.1826 16.2227 20.9812 16.1364C20.7799 16.0502 20.5631 16.0055 20.3441 16.005C20.125 16.0045 19.9081 16.0483 19.7063 16.1337C19.5046 16.2191 19.3221 16.3444 19.17 16.502L19.002 16.674L18.834 16.502C18.6824 16.3438 18.5005 16.2178 18.2991 16.1317C18.0977 16.0455 17.8809 16.0009 17.6618 16.0005C17.4428 16.0001 17.2259 16.044 17.0242 16.1295C16.8224 16.215 16.6401 16.3403 16.488 16.498C16.1758 16.8216 16.001 17.2535 16.0002 17.7032C15.9995 18.1529 16.1729 18.5854 16.484 18.91L18.994 21.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    