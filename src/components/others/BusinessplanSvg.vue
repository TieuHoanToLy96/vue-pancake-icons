<script>
export default {
  install(Vue, options) {
    Vue.component('businessplan-svg-pcon', this)
  },
  name: 'businessplan-svg',
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
<path d="M16 9C18.7614 9 21 7.65685 21 6C21 4.34315 18.7614 3 16 3C13.2386 3 11 4.34315 11 6C11 7.65685 13.2386 9 16 9Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 6V10C11 11.657 13.239 13 16 13C18.761 13 21 11.657 21 10V6" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 10V14C11 15.657 13.239 17 16 17C18.761 17 21 15.657 21 14V10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 14V18C11 19.657 13.239 21 16 21C18.761 21 21 19.657 21 18V14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 9H4.5C4.10218 9 3.72064 9.15804 3.43934 9.43934C3.15804 9.72064 3 10.1022 3 10.5C3 10.8978 3.15804 11.2794 3.43934 11.5607C3.72064 11.842 4.10218 12 4.5 12H5.5C5.89782 12 6.27936 12.158 6.56066 12.4393C6.84196 12.7206 7 13.1022 7 13.5C7 13.8978 6.84196 14.2794 6.56066 14.5607C6.27936 14.842 5.89782 15 5.5 15H3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 15V16M5 8V9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    