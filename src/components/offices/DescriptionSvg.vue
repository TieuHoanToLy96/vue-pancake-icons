<script>
export default {
  install(Vue, options) {
    Vue.component('description-svg-pcon', this)
  },
  name: 'description-svg',
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
<path d="M3 20H12.5294M3 15.8095H21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.4483 11.833L6.72414 4L3 11.833M12.1032 7.24748C12.4366 6.89095 12.8826 6.69475 13.3448 6.70122C14.259 6.70122 15 7.42324 15 8.31389V11.833M9.35294 9.52916H4.09533M15 10.3873C15 11.278 14.259 12 13.3448 12C12.4307 12 11.6897 11.278 11.6897 10.3873C11.6897 9.49668 12.4307 8.77466 13.3448 8.77466C14.259 8.77466 15 9.49668 15 10.3873Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    