<script>
export default {
  install(Vue, options) {
    Vue.component('heart-off-pcon', this)
  },
  name: 'heart-off',
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
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.4999 12.572L17.9999 14M15.9999 16L11.9999 20L4.49994 12.572M4.49994 12.572C3.83843 11.9284 3.36795 11.1143 3.14062 10.2198C2.91329 9.3253 2.93798 8.38533 3.21194 7.504C3.52845 6.5014 4.15438 5.62482 4.99994 5M7.99994 4C9.55994 4.003 11.0499 4.727 11.9999 6.006C12.4135 5.45602 12.9361 4.99732 13.535 4.65861C14.134 4.31989 14.7964 4.10845 15.4809 4.03752C16.1653 3.96659 16.857 4.0377 17.5127 4.24639C18.1684 4.45509 18.774 4.79687 19.2915 5.25036C19.809 5.70385 20.2274 6.25928 20.5204 6.88189C20.8134 7.5045 20.9747 8.18088 20.9943 8.86871C21.0138 9.55653 20.8912 10.241 20.6341 10.8793C20.377 11.5175 19.9909 12.0958 19.4999 12.578" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    