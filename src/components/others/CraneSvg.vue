<script>
export default {
  install(Vue, options) {
    Vue.component('crane-svg-pcon', this)
  },
  name: 'crane-svg',
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
<path d="M6 21H12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 21V3L3 9H21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 3L19 9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 9V13C17.3956 13 17.7822 13.1173 18.1111 13.3371C18.44 13.5568 18.6964 13.8692 18.8478 14.2346C18.9991 14.6001 19.0387 15.0022 18.9616 15.3902C18.8844 15.7781 18.6939 16.1345 18.4142 16.4142C18.1345 16.6939 17.7781 16.8844 17.3902 16.9616C17.0022 17.0387 16.6001 16.9991 16.2346 16.8478C15.8692 16.6964 15.5568 16.44 15.3371 16.1111C15.1173 15.7822 15 15.3956 15 15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    