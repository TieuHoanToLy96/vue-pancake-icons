<script>
export default {
  install(Vue, options) {
    Vue.component('bread-svg-pcon', this)
  },
  name: 'bread-svg',
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
<path d="M17.0001 5C17.6074 5.00024 18.2004 5.18481 18.7006 5.52931C19.2008 5.8738 19.5846 6.362 19.8014 6.92934C20.0181 7.49669 20.0576 8.11645 19.9145 8.7067C19.7714 9.29694 19.4526 9.82987 19.0001 10.235V17C19.0001 17.5304 18.7894 18.0391 18.4143 18.4142C18.0392 18.7893 17.5305 19 17.0001 19H7.0001C6.46967 19 5.96096 18.7893 5.58589 18.4142C5.21082 18.0391 5.0001 17.5304 5.0001 17V10.236C4.55839 9.84096 4.24357 9.32395 4.09536 8.7502C3.94714 8.17644 3.97216 7.57164 4.16727 7.01209C4.36238 6.45254 4.71884 5.96331 5.19167 5.60611C5.6645 5.24891 6.23253 5.03974 6.8241 5.005L7.0001 5H17.0001V5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    