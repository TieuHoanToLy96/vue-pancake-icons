<script>
export default {
  install(Vue, options) {
    Vue.component('satellite-svg-pcon', this)
  },
  name: 'satellite-svg',
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
<path d="M3.70685 6.29285L6.29285 3.70685C6.48038 3.51938 6.73468 3.41406 6.99985 3.41406C7.26501 3.41406 7.51932 3.51938 7.70685 3.70685L13.2928 9.29285C13.4803 9.48038 13.5856 9.73468 13.5856 9.99985C13.5856 10.265 13.4803 10.5193 13.2928 10.7068L10.7068 13.2928C10.5193 13.4803 10.265 13.5856 9.99985 13.5856C9.73468 13.5856 9.48038 13.4803 9.29285 13.2928L3.70685 7.70685C3.51938 7.51932 3.41406 7.26501 3.41406 6.99985C3.41406 6.73468 3.51938 6.48038 3.70685 6.29285V6.29285Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 10L3 13L6 16L9 13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 6L13 3L16 6L13 9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12L13.5 13.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 17C15.163 17 15.7989 16.7366 16.2678 16.2678C16.7366 15.7989 17 15.163 17 14.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 21C16.5913 21 18.1174 20.3679 19.2426 19.2426C20.3679 18.1174 21 16.5913 21 15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    