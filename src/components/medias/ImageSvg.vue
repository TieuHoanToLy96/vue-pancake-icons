<script>
export default {
  install(Vue, options) {
    Vue.component('image-svg-pcon', this)
  },
  name: 'image-svg',
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
<path d="M3.23523 15.75L7.95489 11.0303C8.02453 10.9607 8.10721 10.9054 8.1982 10.8677C8.2892 10.8301 8.38673 10.8107 8.48522 10.8107C8.58371 10.8107 8.68124 10.8301 8.77223 10.8677C8.86322 10.9054 8.9459 10.9607 9.01555 11.0303L13.2049 15.2197C13.2745 15.2893 13.3572 15.3446 13.4482 15.3822C13.5392 15.4199 13.6367 15.4393 13.7352 15.4393C13.8337 15.4393 13.9312 15.4199 14.0222 15.3822C14.1132 15.3446 14.1959 15.2893 14.2655 15.2197L16.2049 13.2803C16.2745 13.2107 16.3572 13.1554 16.4482 13.1177C16.5392 13.0801 16.6367 13.0607 16.7352 13.0607C16.8337 13.0607 16.9312 13.0801 17.0222 13.1177C17.1132 13.1554 17.1959 13.2107 17.2655 13.2803L21.2352 17.25M3.98523 4.5H20.4852C20.8994 4.5 21.2352 4.83579 21.2352 5.25V18.75C21.2352 19.1642 20.8994 19.5 20.4852 19.5H3.98523C3.57102 19.5 3.23523 19.1642 3.23523 18.75V5.25C3.23523 4.83579 3.57102 4.5 3.98523 4.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.8594 10.3125C15.3767 10.3125 15.796 9.89277 15.796 9.375C15.796 8.85723 15.3767 8.4375 14.8594 8.4375C14.3421 8.4375 13.9227 8.85723 13.9227 9.375C13.9227 9.89277 14.3421 10.3125 14.8594 10.3125Z" fill="currentColor"/>
</svg>

</template>
    