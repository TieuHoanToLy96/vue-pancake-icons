<script>
export default {
  install(Vue, options) {
    Vue.component('triangles-svg-pcon', this)
  },
  name: 'triangles-svg',
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
<path d="M9.97402 20.9999H18.026C18.2026 20.9998 18.3758 20.9518 18.5272 20.861C18.6786 20.7701 18.8025 20.6399 18.8856 20.4842C18.9688 20.3284 19.0081 20.153 18.9994 19.9767C18.9906 19.8003 18.9342 19.6297 18.836 19.4829L14.811 13.4349C14.7223 13.301 14.6018 13.1912 14.4603 13.1152C14.3188 13.0393 14.1606 12.9995 14 12.9995C13.8394 12.9995 13.6813 13.0393 13.5398 13.1152C13.3983 13.1912 13.2778 13.301 13.189 13.4349L9.16402 19.4829C9.06659 19.6298 9.01071 19.8004 9.00233 19.9764C8.99394 20.1525 9.03335 20.3276 9.11638 20.4831C9.19941 20.6386 9.32297 20.7687 9.47396 20.8597C9.62495 20.9507 9.79774 20.9992 9.97402 20.9999V20.9999Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.98001 16.0002H19.02C19.562 16.0002 20 15.5572 20 15.0112C19.9998 14.822 19.9457 14.6367 19.844 14.4772L12.824 3.45419C12.7363 3.31496 12.6147 3.20023 12.4706 3.12072C12.3265 3.04121 12.1646 2.99951 12 2.99951C11.8354 2.99951 11.6735 3.04121 11.5295 3.12072C11.3854 3.20023 11.2638 3.31496 11.176 3.45419L4.15601 14.4772C4.01544 14.6978 3.96746 14.9649 4.0225 15.2206C4.07753 15.4763 4.23114 15.7 4.45001 15.8432C4.60779 15.9457 4.79188 16.0002 4.98001 16.0002V16.0002Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    