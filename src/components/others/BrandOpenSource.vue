<script>
export default {
  install(Vue, options) {
    Vue.component('brand-open-source-pcon', this)
  },
  name: 'brand-open-source',
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
<path d="M11.9999 3C14.0668 2.99883 16.0712 3.70911 17.6761 5.01149C19.281 6.31387 20.3888 8.12898 20.8133 10.1518C21.2377 12.1747 20.9529 14.282 20.0069 16.1196C19.0608 17.9573 17.511 19.4133 15.6179 20.243L13.4249 14.641C14.0127 14.3239 14.4778 13.8198 14.7466 13.2085C15.0155 12.5972 15.0726 11.9136 14.9091 11.2662C14.7456 10.6187 14.3707 10.0443 13.8438 9.63394C13.317 9.22359 12.6683 9.00077 12.0004 9.00077C11.3326 9.00077 10.6839 9.22359 10.1571 9.63394C9.63019 10.0443 9.2553 10.6187 9.09178 11.2662C8.92825 11.9136 8.98543 12.5972 9.25427 13.2085C9.52311 13.8198 9.98822 14.3239 10.5759 14.641L8.38294 20.244C6.48937 19.4147 4.93901 17.9588 3.99246 16.121C3.0459 14.2832 2.76085 12.1756 3.18523 10.1524C3.6096 8.12923 4.71752 6.3138 6.32277 5.01127C7.92801 3.70875 9.93273 2.99853 11.9999 3V3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    