<script>
export default {
  install(Vue, options) {
    Vue.component('creative-commons-sa-pcon', this)
  },
  name: 'creative-commons-sa',
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
<path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16C12.7911 16 13.5645 15.7654 14.2223 15.3259C14.8801 14.8864 15.3928 14.2616 15.6955 13.5307C15.9983 12.7998 16.0775 11.9956 15.9231 11.2196C15.7688 10.4437 15.3878 9.73098 14.8284 9.17157C14.269 8.61216 13.5563 8.2312 12.7804 8.07686C12.0044 7.92252 11.2002 8.00173 10.4693 8.30448C9.73836 8.60723 9.11365 9.11993 8.67412 9.77772C8.2346 10.4355 8 11.2089 8 12V13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 12L8 14L10 12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    