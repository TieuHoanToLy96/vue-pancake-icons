<script>
export default {
  install(Vue, options) {
    Vue.component('file-x-pcon', this)
  },
  name: 'file-x',
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
<path d="M14.2502 3H5.24951C5.0506 3 4.85983 3.07902 4.71918 3.21967C4.57853 3.36032 4.49951 3.55109 4.49951 3.75V20.25C4.49951 20.4489 4.57853 20.6397 4.71918 20.7803C4.85983 20.921 5.0506 21 5.24951 21H18.7502C18.8487 21 18.9463 20.9806 19.0373 20.9429C19.1283 20.9052 19.2109 20.85 19.2806 20.7803C19.3502 20.7107 19.4055 20.628 19.4432 20.537C19.4808 20.446 19.5002 20.3485 19.5002 20.25V8.25M14.2502 3L19.5002 8.25M14.2502 3V8.25H19.5002M9.74915 12L14.2491 16.5M14.2491 12L9.74915 16.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    