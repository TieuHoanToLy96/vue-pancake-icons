<script>
export default {
  install(Vue, options) {
    Vue.component('lock-laminated-open-pcon', this)
  },
  name: 'lock-laminated-open',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.86475 11.25H20.3647M3.86475 14.25H20.3647M3.86475 17.25H20.3647M8.73975 8.25V4.875C8.73975 3.97989 9.09533 3.12145 9.72826 2.48851C10.3612 1.85558 11.2196 1.5 12.1147 1.5C13.0099 1.5 13.8683 1.85558 14.5012 2.48851C15.1342 3.12145 15.4897 3.97989 15.4897 4.875M4.61475 8.25H19.6147C20.029 8.25 20.3647 8.58579 20.3647 9V19.5C20.3647 19.9142 20.029 20.25 19.6147 20.25H4.61475C4.20053 20.25 3.86475 19.9142 3.86475 19.5V9C3.86475 8.58579 4.20053 8.25 4.61475 8.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    