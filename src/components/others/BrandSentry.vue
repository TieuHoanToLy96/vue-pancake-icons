<script>
export default {
  install(Vue, options) {
    Vue.component('brand-sentry-pcon', this)
  },
  name: 'brand-sentry',
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
<path d="M3.00003 18C2.99357 18.381 3.10005 18.7554 3.30603 19.076C3.47723 19.3452 3.71034 19.5695 3.98589 19.7303C4.26145 19.891 4.57145 19.9835 4.89003 20C5.53603 20.033 4.35303 20 5.00003 20H8.00003C7.99981 18.9084 7.64176 17.8469 6.98072 16.9782C6.31968 16.1094 5.3921 15.4813 4.34003 15.19C4.89803 14.217 5.58003 13.041 6.38003 11.659C8.04092 12.3316 9.46313 13.4848 10.4644 14.9709C11.4657 16.4569 12.0004 18.2081 12 20H16C16.663 20 18.337 20.005 19 20C19.3263 19.9977 19.6471 19.9156 19.9344 19.7609C20.2217 19.6061 20.4668 19.3835 20.6482 19.1123C20.8297 18.841 20.9421 18.5296 20.9755 18.205C21.0089 17.8804 20.9624 17.5525 20.84 17.25L13.74 5.00002C13.5671 4.68741 13.3135 4.42685 13.0058 4.2454C12.698 4.06396 12.3473 3.96826 11.99 3.96826C11.6328 3.96826 11.282 4.06396 10.9743 4.2454C10.6665 4.42685 10.413 4.68741 10.24 5.00002L8.40003 8.17602C12.882 10.226 16 14.747 16 20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    