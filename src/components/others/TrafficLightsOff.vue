<script>
export default {
  install(Vue, options) {
    Vue.component('traffic-lights-off-pcon', this)
  },
  name: 'traffic-lights-off',
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
<path d="M8 4C8.912 2.781 10.36 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V13M17 17C17 18.3261 16.4732 19.5979 15.5355 20.5355C14.5979 21.4732 13.3261 22 12 22C10.6739 22 9.40215 21.4732 8.46447 20.5355C7.52678 19.5979 7 18.3261 7 17V7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8C12.1978 8 12.3911 7.94135 12.5556 7.83147C12.72 7.72159 12.8482 7.56541 12.9239 7.38268C12.9996 7.19996 13.0194 6.99889 12.9808 6.80491C12.9422 6.61093 12.847 6.43275 12.7071 6.29289C12.5673 6.15304 12.3891 6.0578 12.1951 6.01922C12.0011 5.98063 11.8 6.00043 11.6173 6.07612C11.4346 6.15181 11.2784 6.27998 11.1685 6.44443C11.0586 6.60888 11 6.80222 11 7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.291 11.2949C11.1093 11.484 11.0092 11.7369 11.0122 11.9992C11.0151 12.2614 11.121 12.512 11.307 12.6969C11.4929 12.8818 11.7441 12.9862 12.0063 12.9877C12.2686 12.9893 12.5209 12.8877 12.709 12.7049" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    