<script>
export default {
  install(Vue, options) {
    Vue.component('telegram-logo-pcon', this)
  },
  name: 'telegram-logo',
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
<path d="M8.42645 12.6443L16.8562 20.0625C16.9537 20.1483 17.0719 20.2073 17.1991 20.2337C17.3263 20.2602 17.4582 20.2531 17.5818 20.2132C17.7055 20.1734 17.8167 20.102 17.9045 20.0063C17.9923 19.9105 18.0537 19.7936 18.0827 19.667L21.609 4.27953C21.6395 4.14649 21.6331 4.00765 21.5905 3.87798C21.5479 3.7483 21.4707 3.63271 21.3673 3.54365C21.2639 3.4546 21.1381 3.39545 21.0036 3.37259C20.869 3.34973 20.7307 3.36403 20.6037 3.41394L3.30151 10.2112C3.15071 10.2705 3.02316 10.3769 2.93792 10.5147C2.85269 10.6525 2.81436 10.8142 2.82868 10.9756C2.84299 11.1369 2.90918 11.2893 3.01733 11.41C3.12549 11.5306 3.26979 11.613 3.42866 11.6447L8.42645 12.6443ZM8.42645 12.6443L21.187 3.42835M8.42645 12.6443L8.42645 18.7485C8.42645 18.8968 8.47044 19.0418 8.55285 19.1652C8.63526 19.2885 8.75239 19.3846 8.88944 19.4414C9.02648 19.4982 9.17728 19.513 9.32277 19.4841C9.46825 19.4551 9.60189 19.3837 9.70678 19.2788L12.6365 16.3491" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    