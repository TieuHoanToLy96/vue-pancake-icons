<script>
export default {
  install(Vue, options) {
    Vue.component('arrow-roundabout-left-pcon', this)
  },
  name: 'arrow-roundabout-left',
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
<path d="M3 9H11C11 8.0111 11.2932 7.0444 11.8427 6.22215C12.3921 5.39991 13.173 4.75904 14.0866 4.3806C15.0002 4.00217 16.0055 3.90315 16.9755 4.09608C17.9454 4.289 18.8363 4.76521 19.5355 5.46447C20.2348 6.16373 20.711 7.05465 20.9039 8.02455C21.0969 8.99446 20.9978 9.99979 20.6194 10.9134C20.241 11.827 19.6001 12.6079 18.7779 13.1573C17.9556 13.7068 16.9889 14 16 14V21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 5L3 9L7 13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    