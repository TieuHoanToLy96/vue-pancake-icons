<script>
export default {
  install(Vue, options) {
    Vue.component('caret-circle-left-pcon', this)
  },
  name: 'caret-circle-left',
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
<path d="M14.0017 9.18247C14.3096 8.90538 14.3346 8.43116 14.0575 8.12328C13.7804 7.81539 13.3062 7.79044 12.9983 8.06753L14.0017 9.18247ZM9.75 12L9.24828 11.4425C9.09024 11.5848 9 11.7874 9 12C9 12.2126 9.09024 12.4152 9.24828 12.5575L9.75 12ZM12.9983 15.9325C13.3062 16.2096 13.7804 16.1846 14.0575 15.8767C14.3346 15.5688 14.3096 15.0946 14.0017 14.8175L12.9983 15.9325ZM20.25 12C20.25 16.5563 16.5563 20.25 12 20.25V21.75C17.3848 21.75 21.75 17.3848 21.75 12H20.25ZM12 20.25C7.44365 20.25 3.75 16.5563 3.75 12H2.25C2.25 17.3848 6.61522 21.75 12 21.75V20.25ZM3.75 12C3.75 7.44365 7.44365 3.75 12 3.75V2.25C6.61522 2.25 2.25 6.61522 2.25 12H3.75ZM12 3.75C16.5563 3.75 20.25 7.44365 20.25 12H21.75C21.75 6.61522 17.3848 2.25 12 2.25V3.75ZM12.9983 8.06753L9.24828 11.4425L10.2517 12.5575L14.0017 9.18247L12.9983 8.06753ZM9.24828 12.5575L12.9983 15.9325L14.0017 14.8175L10.2517 11.4425L9.24828 12.5575Z" fill="currentColor"/>
</svg>

</template>
    