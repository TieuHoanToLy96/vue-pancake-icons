<script>
export default {
  install(Vue, options) {
    Vue.component('rocket-off-pcon', this)
  },
  name: 'rocket-off',
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
<path d="M9.29 9.275C9.18292 9.51237 9.08617 9.75426 9 10C7.98026 10.0337 6.98596 10.3268 6.11106 10.8518C5.23617 11.3767 4.50959 12.1161 4 13C5.78309 13.2119 7.44305 14.0175 8.71276 15.2872C9.98247 16.557 10.7881 18.2169 11 20C11.8839 19.4904 12.6233 18.7638 13.1482 17.8889C13.6732 17.014 13.9663 16.0197 14 15C14.241 14.915 14.478 14.82 14.708 14.717M17.136 13.107C18.8464 11.5197 19.8733 9.33002 20 7C20 6.20435 19.6839 5.44129 19.1213 4.87868C18.5587 4.31607 17.7956 4 17 4C14.67 4.12668 12.4803 5.15358 10.893 6.864" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.99999 14C5.95922 14.5876 5.11765 15.4726 4.58315 16.5416C4.04865 17.6106 3.84559 18.8148 3.99999 20C5.18515 20.1544 6.38942 19.9513 7.45841 19.4168C8.52741 18.8823 9.41242 18.0408 9.99999 17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 10C15.5523 10 16 9.55228 16 9C16 8.44772 15.5523 8 15 8C14.4477 8 14 8.44772 14 9C14 9.55228 14.4477 10 15 10Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    