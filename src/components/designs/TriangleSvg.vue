<script>
export default {
  install(Vue, options) {
    Vue.component('triangle-svg-pcon', this)
  },
  name: 'triangle-svg',
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
<path d="M10.8446 3.78115L2.3834 18.6506C2.24801 18.8885 2.17662 19.1585 2.17639 19.4334C2.17617 19.7083 2.24713 19.9785 2.38213 20.2166C2.51713 20.4548 2.71142 20.6526 2.94543 20.7901C3.17945 20.9276 3.44495 21 3.71521 21H20.6376C20.9078 21 21.1733 20.9276 21.4074 20.7901C21.6414 20.6526 21.8357 20.4548 21.9707 20.2166C22.1057 19.9785 22.1766 19.7083 22.1764 19.4334C22.1762 19.1585 22.1048 18.8885 21.9694 18.6506L13.5082 3.78115C13.373 3.5436 13.1788 3.34638 12.9451 3.20928C12.7113 3.07217 12.4462 3 12.1764 3C11.9066 3 11.6415 3.07217 11.4077 3.20928C11.174 3.34638 10.9798 3.5436 10.8446 3.78115V3.78115Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    