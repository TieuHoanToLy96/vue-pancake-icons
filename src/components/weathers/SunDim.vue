<script>
export default {
  install(Vue, options) {
    Vue.component('sun-dim-pcon', this)
  },
  name: 'sun-dim',
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
<path d="M12.8235 3.375V2.625M6.72469 5.9012L6.19436 5.37087M4.19849 12H3.44849M6.72469 18.0988L6.19436 18.6291M12.8235 20.625V21.375M18.9223 18.0988L19.4526 18.6291M21.4485 12H22.1985M18.9223 5.9012L19.4526 5.37087M18.4485 12C18.4485 15.1066 15.9301 17.625 12.8235 17.625C9.71688 17.625 7.19849 15.1066 7.19849 12C7.19849 8.8934 9.71688 6.375 12.8235 6.375C15.9301 6.375 18.4485 8.8934 18.4485 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    