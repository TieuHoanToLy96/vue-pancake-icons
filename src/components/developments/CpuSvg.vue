<script>
export default {
  install(Vue, options) {
    Vue.component('cpu-svg-pcon', this)
  },
  name: 'cpu-svg',
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
<path d="M19.5588 9.75H21.8088M19.5588 14.25H21.8088M2.30878 9.75H4.55878M2.30878 14.25H4.55878M14.3088 19.5V21.75M9.80878 19.5V21.75M14.3088 2.25V4.5M9.80878 2.25V4.5M9.43378 9.375H14.6838V14.625H9.43378V9.375ZM5.30878 4.5H18.8088C19.223 4.5 19.5588 4.83579 19.5588 5.25V18.75C19.5588 19.1642 19.223 19.5 18.8088 19.5H5.30878C4.89456 19.5 4.55878 19.1642 4.55878 18.75V5.25C4.55878 4.83579 4.89456 4.5 5.30878 4.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    