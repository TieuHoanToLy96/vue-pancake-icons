<script>
export default {
  install(Vue, options) {
    Vue.component('brand-ember-pcon', this)
  },
  name: 'brand-ember',
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
<path d="M3 12.9581C11.466 14.6051 14.112 11.7621 15.17 10.6641C17.286 8.46807 15.17 4.07508 12.524 5.17408C9.88 6.27008 6.174 12.8601 9.35 17.2521C11.466 20.1801 15.35 19.4301 21 15.0001" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    