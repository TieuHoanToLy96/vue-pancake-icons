<script>
export default {
  install(Vue, options) {
    Vue.component('blur-svg-pcon', this)
  },
  name: 'blur-svg',
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
<path d="M12 21C12.7832 21.0006 13.5631 20.8991 14.32 20.698C16.0819 20.2271 17.6592 19.2324 18.8433 17.8454C20.0274 16.4583 20.7624 14.7445 20.951 12.9306C21.1396 11.1166 20.773 9.28822 19.8996 7.68726C19.0262 6.0863 17.6873 4.78828 16.06 3.965C14.8469 3.35283 13.5108 3.02332 12.1521 3.00119C10.7934 2.97907 9.44734 3.26489 8.21488 3.83723C6.98241 4.40957 5.89554 5.25357 5.03581 6.3059C4.17608 7.35824 3.56581 8.59159 3.25077 9.91345C2.93573 11.2353 2.9241 12.6113 3.21676 13.9383C3.50942 15.2653 4.09877 16.5088 4.94059 17.5755C5.78242 18.6422 6.85487 19.5045 8.07748 20.0975C9.3001 20.6906 10.6412 20.9992 12 21V21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3V20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12H21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 9H20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6H18" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 18H18" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 15H20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    