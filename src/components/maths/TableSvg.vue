<script>
export default {
  install(Vue, options) {
    Vue.component('table-svg-pcon', this)
  },
  name: 'table-svg',
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
<path d="M3.64722 9.75H21.6472M3.64722 14.25H21.6472M8.89722 9.75V18.75M3.64724 5.25H21.6472V18C21.6472 18.1989 21.5682 18.3897 21.4275 18.5303C21.2869 18.671 21.0961 18.75 20.8972 18.75H4.39724C4.19832 18.75 4.00756 18.671 3.86691 18.5303C3.72625 18.3897 3.64724 18.1989 3.64724 18V5.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    