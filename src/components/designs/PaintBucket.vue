<script>
export default {
  install(Vue, options) {
    Vue.component('paint-bucket-pcon', this)
  },
  name: 'paint-bucket',
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
<path d="M11.2404 9.54972L4.49036 2.79972M21.8441 11.5767L12.8285 20.5923C12.5472 20.8736 12.1657 21.0316 11.7678 21.0316C11.37 21.0316 10.9885 20.8736 10.7072 20.5923L2.75184 12.6369C2.61255 12.4976 2.50206 12.3323 2.42668 12.1503C2.3513 11.9683 2.3125 11.7732 2.3125 11.5763C2.3125 11.3793 2.3513 11.1842 2.42668 11.0022C2.50206 10.8203 2.61255 10.6549 2.75184 10.5156L11.7675 1.5L21.8441 11.5767ZM14.4412 10.8755C14.4412 11.9111 13.6017 12.7505 12.5662 12.7505C11.5306 12.7505 10.6912 11.9111 10.6912 10.8755C10.6912 9.84001 11.5306 9.00055 12.5662 9.00055C13.6017 9.00055 14.4412 9.84001 14.4412 10.8755ZM20.4412 19.125C20.4412 17.2505 22.3162 15.375 22.3162 15.375C22.3162 15.375 24.1912 17.2505 24.1912 19.125C24.1912 19.6223 23.9936 20.0992 23.642 20.4508C23.2904 20.8025 22.8135 21 22.3162 21C21.8189 21 21.342 20.8025 20.9904 20.4508C20.6387 20.0992 20.4412 19.6223 20.4412 19.125Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    