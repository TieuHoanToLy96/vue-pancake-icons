<script>
export default {
  install(Vue, options) {
    Vue.component('zoom-reset-pcon', this)
  },
  name: 'zoom-reset',
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
<path d="M21 21L15 15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.26807 12.0428C3.70503 13.4659 4.58328 14.7132 5.77583 15.6043C6.96839 16.4954 8.41345 16.9841 9.90207 16.9998C11.624 17.0211 13.2936 16.4079 14.5925 15.2772C15.8914 14.1465 16.7288 12.5773 16.9451 10.8688C17.1578 9.16033 16.7335 7.43336 15.7531 6.01803C14.7728 4.6027 13.3053 3.5983 11.6311 3.19681C9.95648 2.79175 8.19141 3.01656 6.67182 3.82845C5.15223 4.64033 3.9842 5.98262 3.39007 7.59981" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 4V8H7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    