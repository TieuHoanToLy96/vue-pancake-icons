<script>
export default {
  install(Vue, options) {
    Vue.component('brand-airbnb-pcon', this)
  },
  name: 'brand-airbnb',
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
<path d="M12 10C10 10 9 11 9 13C9 14.5 10.494 16.535 12 18.5C13 19.5 13.5 20 14.5 20.5C15.5 21 17 21.5 19 20C21 18.5 20.5 16.5 19.5 14C18.5 11.5 17.167 8.5 14.5 4.5C13.666 3.5 13 3 11.997 3C10.997 3 10.374 3.45 9.5 4.5C6.833 8.5 5.5 11.5 4.5 14C3.5 16.5 3 18.5 5 20C7 21.5 8.5 21 9.5 20.5C10.5 20 11 19.5 12 18.5C13.506 16.535 15 14.5 15 13C15 11 14 10 12 10Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    