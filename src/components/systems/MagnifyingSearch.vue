<script>
export default {
  install(Vue, options) {
    Vue.component('magnifying-search-pcon', this)
  },
  name: 'magnifying-search',
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
<path d="M17.0313 16.4438L21.5876 21.0001M19.3381 10.875C19.3381 15.2242 15.8124 18.75 11.4631 18.75C7.11389 18.75 3.58813 15.2242 3.58813 10.875C3.58813 6.52576 7.11389 3 11.4631 3C15.8124 3 19.3381 6.52576 19.3381 10.875Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    