<script>
export default {
  install(Vue, options) {
    Vue.component('ce-svg-pcon', this)
  },
  name: 'ce-svg',
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
<path d="M11 4C8.87827 4 6.84344 4.84285 5.34315 6.34315C3.84285 7.84344 3 9.87827 3 12C3 14.1217 3.84285 16.1566 5.34315 17.6569C6.84344 19.1571 8.87827 20 11 20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 4C17.8783 4 15.8434 4.84285 14.3431 6.34315C12.8429 7.84344 12 9.87827 12 12C12 14.1217 12.8429 16.1566 14.3431 17.6569C15.8434 19.1571 17.8783 20 20 20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12H20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    