<script>
export default {
  install(Vue, options) {
    Vue.component('school-svg-pcon', this)
  },
  name: 'school-svg',
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
<path d="M22 9L12 5L2 9L12 13L22 9ZM22 9V15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 10.6001V16.0001C6 16.7957 6.63214 17.5588 7.75736 18.1214C8.88258 18.684 10.4087 19.0001 12 19.0001C13.5913 19.0001 15.1174 18.684 16.2426 18.1214C17.3679 17.5588 18 16.7957 18 16.0001V10.6001" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    