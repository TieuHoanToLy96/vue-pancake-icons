<script>
export default {
  install(Vue, options) {
    Vue.component('map-pin-off-pcon', this)
  },
  name: 'map-pin-off',
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
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.44007 9.435C9.08847 10.0096 8.9405 10.6858 9.01998 11.3548C9.09946 12.0237 9.40177 12.6464 9.87822 13.1226C10.3547 13.5989 10.9775 13.9009 11.6465 13.98C12.3155 14.0592 12.9916 13.9109 13.5661 13.559M15.0001 11C15.0001 10.2044 14.684 9.44129 14.1214 8.87868C13.5588 8.31607 12.7957 8 12.0001 8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.04809 4.04222C9.57114 3.17496 11.3368 2.83186 13.0738 3.06564C14.8108 3.29943 16.423 4.09717 17.6625 5.33626C18.9021 6.57535 19.7004 8.18721 19.9348 9.92412C20.1693 11.661 19.8268 13.4269 18.9601 14.9502M17.1601 17.1562L13.4151 20.9002C13.0401 21.2749 12.5317 21.4853 12.0016 21.4853C11.4715 21.4853 10.9631 21.2749 10.5881 20.9002L6.34409 16.6572C4.93049 15.2438 4.09724 13.3525 4.0084 11.3554C3.91956 9.35845 4.58157 7.40054 5.86409 5.86722" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    