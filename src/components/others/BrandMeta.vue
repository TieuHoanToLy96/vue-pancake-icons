<script>
export default {
  install(Vue, options) {
    Vue.component('brand-meta-pcon', this)
  },
  name: 'brand-meta',
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
<path d="M12 10.174C13.766 7.39 15.315 6 16.648 6C18.648 6 19.911 8.213 20.648 11.217C21.352 14.086 21.148 18 18.648 18C17.534 18 16 16.435 14.5 14.348C13.5455 13.0329 12.709 11.6361 12 10.174V10.174Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 10.174C10.234 7.39 8.68499 6 7.35199 6C5.35199 6 4.08899 8.213 3.35199 11.217C2.64799 14.086 2.85199 18 5.35199 18C6.46599 18 7.99999 16.435 9.49999 14.348C10.5 12.957 11.333 11.565 12 10.174Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    