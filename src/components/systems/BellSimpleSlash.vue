<script>
export default {
  install(Vue, options) {
    Vue.component('bell-simple-slash-pcon', this)
  },
  name: 'bell-simple-slash',
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
<path d="M4.97046 3.75002L19.9705 20.25M9.47046 20.9981H15.4705M9.14258 3.87956C10.1711 3.29167 11.3373 2.98753 12.5219 2.99826C16.2334 3.02585 19.2022 6.11088 19.2022 9.83281V10.4981C19.2022 13.0006 19.5924 14.7203 20.0473 15.8748M17.9232 17.9981H5.06268C4.93079 17.9977 4.80133 17.9626 4.68735 17.8963C4.57336 17.8299 4.4789 17.7347 4.41347 17.6202C4.34805 17.5056 4.31398 17.3759 4.31471 17.244C4.31544 17.1121 4.35093 16.9828 4.41762 16.869C5.03668 15.804 5.7395 13.8556 5.7395 10.4981V9.74807C5.73715 8.37672 6.15368 7.03736 6.93336 5.90921" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    