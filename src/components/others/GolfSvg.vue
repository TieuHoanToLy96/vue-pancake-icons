<script>
export default {
  install(Vue, options) {
    Vue.component('golf-svg-pcon', this)
  },
  name: 'golf-svg',
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
<path d="M12 18V3L19 7L12 11" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 17.6699C8.38 18.0299 8 18.4899 8 18.9999C8 20.0999 9.8 20.9999 12 20.9999C14.2 20.9999 16 20.0999 16 18.9999C16 18.4999 15.62 18.0299 15 17.6699" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    