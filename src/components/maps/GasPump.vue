<script>
export default {
  install(Vue, options) {
    Vue.component('gas-pump-pcon', this)
  },
  name: 'gas-pump',
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
<path d="M5.60278 20.25V5.25C5.60278 4.85218 5.76082 4.47064 6.04212 4.18934C6.32343 3.90804 6.70496 3.75 7.10278 3.75H14.6028C15.0006 3.75 15.3821 3.90804 15.6634 4.18934C15.9447 4.47064 16.1028 4.85218 16.1028 5.25V20.25M3.35278 20.25H18.3528M16.1028 10.5H18.3528C18.7506 10.5 19.1321 10.658 19.4134 10.9393C19.6948 11.2206 19.8528 11.6022 19.8528 12V15.75C19.8528 16.1478 20.0108 16.5294 20.2921 16.8107C20.5734 17.092 20.955 17.25 21.3528 17.25C21.7506 17.25 22.1321 17.092 22.4134 16.8107C22.6948 16.5294 22.8528 16.1478 22.8528 15.75V8.12132C22.8528 7.7235 22.6948 7.34197 22.4134 7.06066L20.6028 5.25M13.1028 10.5H8.60278" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    