<script>
export default {
  install(Vue, options) {
    Vue.component('meat-svg-pcon', this)
  },
  name: 'meat-svg',
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
<path d="M13.6201 8.38192L15.5861 6.41492C15.3535 6.18239 15.1819 5.89609 15.0863 5.58138C14.9908 5.26667 14.9744 4.93325 15.0385 4.61067C15.1026 4.28809 15.2452 3.98629 15.4538 3.73201C15.6624 3.47774 15.9305 3.27882 16.2343 3.1529C16.5382 3.02697 16.8684 2.97791 17.1957 3.01007C17.523 3.04223 17.8373 3.15462 18.1108 3.33727C18.3843 3.51992 18.6086 3.76721 18.7637 4.05722C18.9188 4.34723 19 4.67103 19.0001 4.99992C19.3291 4.99968 19.653 5.0806 19.9433 5.2355C20.2335 5.3904 20.481 5.61451 20.6639 5.88795C20.8468 6.16139 20.9595 6.47573 20.9918 6.80311C21.0242 7.13048 20.9753 7.46079 20.8495 7.76476C20.7237 8.06873 20.5249 8.33697 20.2706 8.54572C20.0163 8.75446 19.7145 8.89726 19.3919 8.96146C19.0692 9.02566 18.7357 9.00928 18.4209 8.91377C18.1061 8.81826 17.8197 8.64657 17.5871 8.41392L15.7671 10.2349" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.90401 18.5959C8.63701 21.3299 11.804 22.5959 12.974 21.4249C14.146 20.2529 12.88 17.0869 10.146 14.3539C7.41301 11.6199 4.24601 10.3539 3.07601 11.5249C1.90401 12.6969 3.17001 15.8629 5.90401 18.5959Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 16L8.5 17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.9749 21.425C16.8799 17.519 17.8299 12.137 15.0959 9.40397C12.3629 6.66997 6.98093 7.61997 3.07593 11.525" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    