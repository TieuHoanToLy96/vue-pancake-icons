<script>
export default {
  install(Vue, options) {
    Vue.component('music-off-pcon', this)
  },
  name: 'music-off',
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
<path d="M6 20C7.65685 20 9 18.6569 9 17C9 15.3431 7.65685 14 6 14C4.34315 14 3 15.3431 3 17C3 18.6569 4.34315 20 6 20Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.4201 14.4502C14.0353 14.6888 13.7096 15.0115 13.4673 15.3939C13.225 15.7764 13.0724 16.2087 13.0209 16.6585C12.9694 17.1083 13.0204 17.5639 13.1701 17.9912C13.3197 18.4185 13.5642 18.8063 13.885 19.1257C14.2059 19.4451 14.5949 19.6878 15.0229 19.8354C15.4508 19.9831 15.9067 20.032 16.3562 19.9785C16.8058 19.9249 17.2374 19.7704 17.6187 19.5263C18.0001 19.2822 18.3212 18.955 18.5581 18.5692" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 17V9M9 5V4H19V15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8H19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    