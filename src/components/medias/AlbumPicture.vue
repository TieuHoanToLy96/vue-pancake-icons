<script>
export default {
  install(Vue, options) {
    Vue.component('album-picture-pcon', this)
  },
  name: 'album-picture',
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
<path d="M17 3H4C3.44772 3 3 3.44772 3 4V17C3 17.5523 3.44772 18 4 18H17C17.5523 18 18 17.5523 18 17V4C18 3.44772 17.5523 3 17 3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linejoin="round"/>
<path d="M21 6V19.5C21 19.8978 20.842 20.2794 20.5607 20.5607C20.2794 20.842 19.8978 21 19.5 21H6M3 12.5L6.828 9.097C7.01249 8.93302 7.25111 8.84307 7.49794 8.84446C7.74476 8.84584 7.98236 8.93846 8.165 9.1045L13 13.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 11.5L13.3925 9.50597C13.5655 9.36193 13.782 9.28045 14.007 9.27474C14.2321 9.26902 14.4524 9.33939 14.6325 9.47447L18 12M3 9.49997V13.5M18 9.49997V13.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    