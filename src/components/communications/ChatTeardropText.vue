<script>
export default {
  install(Vue, options) {
    Vue.component('chat-teardrop-text-pcon', this)
  },
  name: 'chat-teardrop-text',
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
<path d="M10.0808 10.4993H15.7058M10.0808 13.4993H15.7058M13.0809 20.2493H5.17462C4.984 20.2493 4.80118 20.1735 4.66639 20.0388C4.5316 19.904 4.45587 19.7211 4.45587 19.5305V11.6243C4.45587 10.4916 4.67896 9.37004 5.11241 8.32361C5.54586 7.27718 6.18117 6.32637 6.98207 5.52547C7.78297 4.72456 8.73379 4.08925 9.78022 3.6558C10.8266 3.22236 11.9482 2.99927 13.0809 2.99927C14.2135 2.99927 15.3351 3.22236 16.3815 3.65581C17.428 4.08925 18.3788 4.72457 19.1797 5.52547C19.9806 6.32638 20.6159 7.27719 21.0493 8.32362C21.4828 9.37006 21.7059 10.4916 21.7059 11.6243C21.7059 13.9118 20.7972 16.1056 19.1797 17.7231C17.5622 19.3406 15.3684 20.2493 13.0809 20.2493Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    