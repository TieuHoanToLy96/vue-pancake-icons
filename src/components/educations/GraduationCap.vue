<script>
export default {
  install(Vue, options) {
    Vue.component('graduation-cap-pcon', this)
  },
  name: 'graduation-cap',
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
<path d="M17.8008 22.5V12L12.1758 9M20.8008 10.4V15.5113C20.8011 15.6731 20.7488 15.8306 20.6518 15.9601C20.0202 16.8005 17.3557 19.875 12.1758 19.875C6.99582 19.875 4.33136 16.8005 3.6998 15.9601C3.60277 15.8306 3.55047 15.6731 3.55078 15.5113V10.4M0.925781 9L12.1758 3L23.4258 9L12.1758 15L0.925781 9Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    