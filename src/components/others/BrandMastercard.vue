<script>
export default {
  install(Vue, options) {
    Vue.component('brand-mastercard-pcon', this)
  },
  name: 'brand-mastercard',
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
<path d="M14 15C15.6569 15 17 13.6569 17 12C17 10.3431 15.6569 9 14 9C12.3431 9 11 10.3431 11 12C11 13.6569 12.3431 15 14 15Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 9.765C11.5685 9.3786 11.0343 9.12539 10.4619 9.03597C9.88962 8.94654 9.30365 9.02472 8.7748 9.26106C8.24594 9.4974 7.79682 9.8818 7.48166 10.3678C7.16651 10.8539 6.99881 11.4207 6.99881 12C6.99881 12.5793 7.16651 13.1461 7.48166 13.6322C7.79682 14.1182 8.24594 14.5026 8.7748 14.7389C9.30365 14.9753 9.88962 15.0535 10.4619 14.964C11.0343 14.8746 11.5685 14.6214 12 14.235" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    