<script>
export default {
  install(Vue, options) {
    Vue.component('arrow-big-top-pcon', this)
  },
  name: 'arrow-big-top',
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
<path d="M9.00009 20.0001V12.0001H5.41409C5.21634 12.0001 5.02305 11.9414 4.85864 11.8315C4.69423 11.7216 4.56609 11.5654 4.49042 11.3827C4.41475 11.2 4.39494 10.999 4.43351 10.8051C4.47208 10.6111 4.56728 10.4329 4.70709 10.2931L11.2931 3.70709C11.4806 3.51962 11.7349 3.41431 12.0001 3.41431C12.2653 3.41431 12.5196 3.51962 12.7071 3.70709L19.2931 10.2931C19.4329 10.4329 19.5281 10.6111 19.5667 10.8051C19.6052 10.999 19.5854 11.2 19.5098 11.3827C19.4341 11.5654 19.306 11.7216 19.1416 11.8315C18.9771 11.9414 18.7838 12.0001 18.5861 12.0001H15.0001V20.0001C15.0001 20.2653 14.8947 20.5197 14.7072 20.7072C14.5197 20.8947 14.2653 21.0001 14.0001 21.0001H10.0001C9.73488 21.0001 9.48052 20.8947 9.29299 20.7072C9.10545 20.5197 9.00009 20.2653 9.00009 20.0001V20.0001Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    