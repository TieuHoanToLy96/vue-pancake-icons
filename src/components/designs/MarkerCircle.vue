<script>
export default {
  install(Vue, options) {
    Vue.component('marker-circle-pcon', this)
  },
  name: 'marker-circle',
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
<path d="M17.4471 20.3161V16.8C17.4471 16.5878 17.3628 16.3843 17.2128 16.2343C17.0628 16.0843 16.8593 16 16.6471 16H8.64712C8.43495 16 8.23146 16.0843 8.08143 16.2343C7.9314 16.3843 7.84712 16.5878 7.84712 16.8V20.3164M9.44712 16V13.6C9.44712 13.3878 9.5314 13.1843 9.68143 13.0343C9.83146 12.8843 10.0349 12.8 10.2471 12.8H15.0471C15.2593 12.8 15.4628 12.8843 15.6128 13.0343C15.7628 13.1843 15.8471 13.3878 15.8471 13.6V16M14.631 12.8L13.4303 7.03684C13.2534 6.18772 12.0408 6.18772 11.8639 7.03684L10.6633 12.8M22.2471 12C22.2471 17.3019 17.9491 21.6 12.6471 21.6C7.34518 21.6 3.04712 17.3019 3.04712 12C3.04712 6.69807 7.34518 2.4 12.6471 2.4C17.9491 2.4 22.2471 6.69807 22.2471 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    