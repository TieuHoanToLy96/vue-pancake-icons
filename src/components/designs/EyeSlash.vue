<script>
export default {
  install(Vue, options) {
    Vue.component('eye-slash-pcon', this)
  },
  name: 'eye-slash',
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
<path d="M5.38232 3.75L20.3823 20.25M15.4049 14.7748C14.6689 15.4437 13.6974 15.7929 12.704 15.7455C11.7107 15.6982 10.7768 15.2582 10.1078 14.5223C9.4388 13.7864 9.08952 12.815 9.13678 11.8216C9.18404 10.8282 9.62397 9.89425 10.3598 9.22521M7.8193 6.43065C3.99719 8.36617 2.38232 12 2.38232 12C2.38232 12 5.38232 18.7493 12.8823 18.7493C14.6396 18.7633 16.3749 18.3585 17.9446 17.5685M20.4395 15.8531C22.4834 14.0224 23.3823 12 23.3823 12C23.3823 12 20.3823 5.24927 12.8823 5.24927C12.2328 5.24821 11.5842 5.30102 10.9434 5.40716M13.588 8.31636C14.3851 8.4694 15.111 8.87675 15.6569 9.47729C16.2028 10.0778 16.5393 10.8392 16.6159 11.6472" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    