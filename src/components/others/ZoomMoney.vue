<script>
export default {
  install(Vue, options) {
    Vue.component('zoom-money-pcon', this)
  },
  name: 'zoom-money',
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
<path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 21L15 15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7H9.5C9.10218 7 8.72064 7.15804 8.43934 7.43934C8.15804 7.72064 8 8.10218 8 8.5C8 8.89782 8.15804 9.27936 8.43934 9.56066C8.72064 9.84196 9.10218 10 9.5 10H10.5C10.8978 10 11.2794 10.158 11.5607 10.4393C11.842 10.7206 12 11.1022 12 11.5C12 11.8978 11.842 12.2794 11.5607 12.5607C11.2794 12.842 10.8978 13 10.5 13H8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 13V14M10 6V7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    