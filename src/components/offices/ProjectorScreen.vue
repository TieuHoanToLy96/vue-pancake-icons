<script>
export default {
  install(Vue, options) {
    Vue.component('projector-screen-pcon', this)
  },
  name: 'projector-screen',
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
<path d="M4.55884 17.25V6.75M19.5588 6.75V17.25M12.0588 17.25V20.25M12.0588 20.25C11.2304 20.25 10.5588 20.9216 10.5588 21.75C10.5588 22.5784 11.2304 23.25 12.0588 23.25C12.8873 23.25 13.5588 22.5784 13.5588 21.75C13.5588 20.9216 12.8873 20.25 12.0588 20.25ZM3.05884 17.25H21.0588M3.80884 3.75H20.3088C20.7231 3.75 21.0588 4.08579 21.0588 4.5V6C21.0588 6.41421 20.7231 6.75 20.3088 6.75H3.80884C3.39462 6.75 3.05884 6.41421 3.05884 6V4.5C3.05884 4.08579 3.39462 3.75 3.80884 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    