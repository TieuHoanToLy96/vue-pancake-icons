<script>
export default {
  install(Vue, options) {
    Vue.component('letter-d-pcon', this)
  },
  name: 'letter-d',
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
<path d="M7 4H13C14.3261 4 15.5979 4.52678 16.5355 5.46447C17.4732 6.40215 18 7.67392 18 9V15C18 16.3261 17.4732 17.5979 16.5355 18.5355C15.5979 19.4732 14.3261 20 13 20H7V4Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    