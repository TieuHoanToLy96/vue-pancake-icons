<script>
export default {
  install(Vue, options) {
    Vue.component('text-hthree-pcon', this)
  },
  name: 'text-hthree',
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
<path d="M3.75 5.25V16.5M13.5 10.875H3.75M13.5 5.25V16.5M17.9997 10.1243H22.4997L19.8753 13.875C20.307 13.875 20.732 13.9815 21.1127 14.185C21.4934 14.3885 21.8181 14.6827 22.0579 15.0416C22.2977 15.4006 22.4453 15.8131 22.4877 16.2427C22.53 16.6723 22.4657 17.1057 22.3005 17.5045C22.1353 17.9034 21.8743 18.2553 21.5406 18.5292C21.2069 18.803 20.8108 18.9903 20.3874 19.0746C19.964 19.1588 19.5264 19.1373 19.1133 19.012C18.7002 18.8867 18.3244 18.6614 18.0191 18.3562" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    