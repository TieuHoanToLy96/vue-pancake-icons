<script>
export default {
  install(Vue, options) {
    Vue.component('anchor-svg-pcon', this)
  },
  name: 'anchor-svg',
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
<path d="M12.5293 21.75V6.75M12.5293 21.75C12.5293 20.7554 12.1342 19.8016 11.4309 19.0983C10.7277 18.3951 9.77386 18 8.7793 18C7.58582 18 6.44123 17.5259 5.59732 16.682C4.7534 15.8381 4.2793 14.6935 4.2793 13.5M12.5293 21.75C12.5293 20.7554 12.9244 19.8016 13.6276 19.0983C14.3309 18.3951 15.2847 18 16.2793 18C17.4728 18 18.6174 17.5259 19.4613 16.682C20.3052 15.8381 20.7793 14.6935 20.7793 13.5M12.5293 6.75C13.5648 6.75 14.4043 5.91053 14.4043 4.875C14.4043 3.83947 13.5648 3 12.5293 3C11.4938 3 10.6543 3.83947 10.6543 4.875C10.6543 5.91053 11.4938 6.75 12.5293 6.75ZM8.7793 10.5H16.2793" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    