<script>
export default {
  install(Vue, options) {
    Vue.component('dental-off-pcon', this)
  },
  name: 'dental-off',
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
<path d="M19.277 15.281C19.74 13.531 20 11.437 20 9.00001C20 5.26001 18.092 4.00601 16 4.00001C14.577 3.99601 13.08 4.91101 12 5.50001C10.926 4.91401 9.417 4.00001 8 4.00001M5.157 5.15301C4.45 5.93701 4 7.17001 4 9.00001C4 13.899 5.056 17.41 6.671 19.537C7.244 20.293 8.641 20.058 9.238 19.301C9.636 18.796 10.057 17.862 10.5 16.5C10.792 15.729 11.392 14.996 12 15C12.602 15.004 13.21 15.737 13.5 16.5C13.943 17.862 14.364 18.795 14.762 19.3C15.359 20.059 16.756 20.293 17.329 19.537C17.634 19.135 17.919 18.684 18.181 18.184" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 5.5L15 7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    