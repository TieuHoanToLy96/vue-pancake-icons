<script>
export default {
  install(Vue, options) {
    Vue.component('cursor-text-pcon', this)
  },
  name: 'cursor-text',
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
<path d="M10 12H14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 4C9.79565 4 10.5587 4.31607 11.1213 4.87868C11.6839 5.44129 12 6.20435 12 7V17C12 17.7956 11.6839 18.5587 11.1213 19.1213C10.5587 19.6839 9.79565 20 9 20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 4C14.2044 4 13.4413 4.31607 12.8787 4.87868C12.3161 5.44129 12 6.20435 12 7V17C12 17.7956 12.3161 18.5587 12.8787 19.1213C13.4413 19.6839 14.2044 20 15 20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    