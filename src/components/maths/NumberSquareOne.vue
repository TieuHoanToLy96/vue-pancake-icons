<script>
export default {
  install(Vue, options) {
    Vue.component('number-square-one-pcon', this)
  },
  name: 'number-square-one',
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
<path d="M10.4778 9.37434L12.7278 7.875V16.5M4.85278 3.75H19.8528C20.267 3.75 20.6028 4.08579 20.6028 4.5V19.5C20.6028 19.9142 20.267 20.25 19.8528 20.25H4.85278C4.43857 20.25 4.10278 19.9142 4.10278 19.5V4.5C4.10278 4.08579 4.43857 3.75 4.85278 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    