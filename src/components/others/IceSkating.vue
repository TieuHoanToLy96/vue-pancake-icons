<script>
export default {
  install(Vue, options) {
    Vue.component('ice-skating-pcon', this)
  },
  name: 'ice-skating',
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
<path d="M5.90499 5H9.32299C9.52282 5.00013 9.71802 5.06011 9.88343 5.17223C10.0488 5.28434 10.1769 5.44344 10.251 5.629L11.394 8.485C11.5799 8.95 11.8792 9.36106 12.2647 9.68071C12.6502 10.0004 13.1096 10.2184 13.601 10.315L18.318 11.241C18.7919 11.3342 19.2187 11.589 19.5255 11.962C19.8323 12.335 20 12.803 20 13.286V14C20 14.2652 19.8946 14.5196 19.7071 14.7071C19.5196 14.8946 19.2652 15 19 15H5.10499C4.96524 15 4.82703 14.9707 4.69929 14.914C4.57155 14.8573 4.45712 14.7745 4.36336 14.6708C4.26961 14.5672 4.19863 14.445 4.15499 14.3123C4.11134 14.1795 4.09602 14.0391 4.10999 13.9L4.90999 5.9C4.93478 5.65334 5.05031 5.42468 5.23416 5.25838C5.41802 5.09208 5.65709 5 5.90499 5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 19H20C20.2652 19 20.5196 18.8946 20.7071 18.7071C20.8946 18.5196 21 18.2652 21 18" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 15V19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 15V19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    