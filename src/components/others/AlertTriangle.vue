<script>
export default {
  install(Vue, options) {
    Vue.component('alert-triangle-pcon', this)
  },
  name: 'alert-triangle',
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
<path d="M12 9V11M12 15V15.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.99995 19H18.9999C19.3263 18.9977 19.647 18.9156 19.9343 18.7609C20.2216 18.6061 20.4667 18.3835 20.6482 18.1123C20.8296 17.841 20.942 17.5296 20.9754 17.205C21.0088 16.8804 20.9623 16.5525 20.8399 16.25L13.7399 4.00002C13.567 3.68741 13.3135 3.42685 13.0057 3.2454C12.6979 3.06396 12.3472 2.96826 11.9899 2.96826C11.6327 2.96826 11.2819 3.06396 10.9742 3.2454C10.6664 3.42685 10.4129 3.68741 10.2399 4.00002L3.13995 16.25C3.01989 16.5456 2.97228 16.8656 3.0011 17.1833C3.02991 17.501 3.13432 17.8073 3.3056 18.0764C3.47688 18.3456 3.71006 18.5698 3.98567 18.7305C4.26129 18.8912 4.57134 18.9836 4.88995 19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    