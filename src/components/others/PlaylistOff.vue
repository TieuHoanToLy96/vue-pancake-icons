<script>
export default {
  install(Vue, options) {
    Vue.component('playlist-off-pcon', this)
  },
  name: 'playlist-off',
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
<path d="M14 14C13.4067 14 12.8266 14.1759 12.3333 14.5056C11.8399 14.8352 11.4554 15.3038 11.2284 15.8519C11.0013 16.4001 10.9419 17.0033 11.0576 17.5853C11.1734 18.1672 11.4591 18.7018 11.8787 19.1213C12.2982 19.5409 12.8328 19.8266 13.4147 19.9424C13.9967 20.0581 14.5999 19.9987 15.1481 19.7716C15.6962 19.5446 16.1648 19.1601 16.4944 18.6667C16.8241 18.1734 17 17.5933 17 17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 13V4H21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 5H9M5 5H3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 9H9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 13H3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    