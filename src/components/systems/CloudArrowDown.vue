<script>
export default {
  install(Vue, options) {
    Vue.component('cloud-arrow-down-pcon', this)
  },
  name: 'cloud-arrow-down',
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
<path d="M11.7736 16.318L14.9556 19.5M14.9556 19.5L18.1376 16.318M14.9556 19.5V12M9.70559 19.5H7.45559C6.71106 19.4993 5.9752 19.3402 5.29685 19.0333C4.61851 18.7265 4.01318 18.2788 3.52107 17.7201C3.02895 17.1614 2.6613 16.5045 2.4425 15.7928C2.22371 15.0812 2.15878 14.3311 2.25204 13.5924C2.34529 12.8538 2.59458 12.1434 2.98338 11.5084C3.37217 10.8735 3.89157 10.3285 4.5071 9.90964C5.12263 9.49078 5.82021 9.20762 6.55353 9.07897C7.28686 8.95032 8.03917 8.97912 8.76052 9.16346M8.20559 12C8.2057 10.8117 8.48819 9.64035 9.02978 8.5826C9.57137 7.52485 10.3566 6.61093 11.3206 5.91615C12.2847 5.22137 13.4001 4.76563 14.5748 4.58646C15.7496 4.4073 16.9501 4.50985 18.0775 4.88566C19.2048 5.26148 20.2267 5.8998 21.059 6.74802C21.8913 7.59625 22.5101 8.6301 22.8644 9.76438C23.2187 10.8987 23.2985 12.1009 23.0971 13.2721C22.8956 14.4432 22.4188 15.5497 21.7058 16.5004" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    