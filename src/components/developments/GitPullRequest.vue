<script>
export default {
  install(Vue, options) {
    Vue.component('git-pull-request-pcon', this)
  },
  name: 'git-pull-request',
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
<path d="M6.375 15C4.92525 15 3.75 16.1753 3.75 17.625C3.75 19.0747 4.92525 20.25 6.375 20.25C7.82475 20.25 9 19.0747 9 17.625C9 16.1753 7.82475 15 6.375 15ZM6.375 15V9M6.375 9C7.82475 9 9 7.82475 9 6.375C9 4.92525 7.82475 3.75 6.375 3.75C4.92525 3.75 3.75 4.92525 3.75 6.375C3.75 7.82475 4.92525 9 6.375 9ZM17.6252 15C16.1755 15 15.0002 16.1753 15.0002 17.625C15.0002 19.0747 16.1755 20.25 17.6252 20.25C19.075 20.25 20.2502 19.0747 20.2502 17.625C20.2502 16.1753 19.075 15 17.6252 15ZM17.6252 15L17.6251 11.2389C17.625 10.0454 17.1509 8.90093 16.3071 8.05706L12.75 4.5M12.75 4.5V8.25M12.75 4.5H16.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    