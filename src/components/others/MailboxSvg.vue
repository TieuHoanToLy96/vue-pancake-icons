<script>
export default {
  install(Vue, options) {
    Vue.component('mailbox-svg-pcon', this)
  },
  name: 'mailbox-svg',
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
<path d="M10 21V14.5C10 13.5717 9.63125 12.6815 8.97487 12.0251C8.3185 11.3687 7.42826 11 6.5 11C5.57174 11 4.6815 11.3687 4.02513 12.0251C3.36875 12.6815 3 13.5717 3 14.5V21H21V15C21 13.9391 20.5786 12.9217 19.8284 12.1716C19.0783 11.4214 18.0609 11 17 11H6.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 11V3H16L18 5L16 7H12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 15H7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    