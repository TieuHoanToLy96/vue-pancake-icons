<script>
export default {
  install(Vue, options) {
    Vue.component('cards-svg-pcon', this)
  },
  name: 'cards-svg',
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
<path d="M6.11816 4.5H20.3682C20.5671 4.5 20.7578 4.57902 20.8985 4.71967C21.0391 4.86032 21.1182 5.05109 21.1182 5.25V16.5M3.86816 7.5H17.3682C17.7824 7.5 18.1182 7.83579 18.1182 8.25V18.75C18.1182 19.1642 17.7824 19.5 17.3682 19.5H3.86816C3.45395 19.5 3.11816 19.1642 3.11816 18.75V8.25C3.11816 7.83579 3.45395 7.5 3.86816 7.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    