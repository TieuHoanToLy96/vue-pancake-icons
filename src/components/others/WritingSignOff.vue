<script>
export default {
  install(Vue, options) {
    Vue.component('writing-sign-off-pcon', this)
  },
  name: 'writing-sign-off',
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
<path d="M3 19C6.333 17 8 15 8 13C8 10 7 10 6 10C5 10 3.968 11.085 4 13C4.034 15.048 5.658 15.877 6.5 17C8 19 9 19.5 10 18C10.667 17 11.167 16.167 11.5 15.5C12.5 17.833 13.833 19 15.5 19H18" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 16V17L18 19L18.5 18.5M20 16V5C20 3.879 19.121 3 18 3C16.879 3 16 3.879 16 5V12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 7H20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    