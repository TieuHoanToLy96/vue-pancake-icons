<script>
export default {
  install(Vue, options) {
    Vue.component('bug-svg-pcon', this)
  },
  name: 'bug-svg',
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
<path d="M14.8594 9.5625C15.3767 9.5625 15.796 9.14277 15.796 8.625C15.796 8.10723 15.3767 7.6875 14.8594 7.6875C14.3421 7.6875 13.9227 8.10723 13.9227 8.625C13.9227 9.14277 14.3421 9.5625 14.8594 9.5625Z" fill="currentColor"/>
<path d="M9.60937 9.5625C10.1267 9.5625 10.546 9.14277 10.546 8.625C10.546 8.10723 10.1267 7.6875 9.60937 7.6875C9.09208 7.6875 8.67273 8.10723 8.67273 8.625C8.67273 9.14277 9.09208 9.5625 9.60937 9.5625Z" fill="currentColor"/>
<path d="M12.2352 12V21M12.2352 21C14.2244 21 16.132 20.2098 17.5385 18.8033C18.9451 17.3968 19.7352 15.4891 19.7352 13.5V10.5C19.7352 8.51088 18.9451 6.60322 17.5385 5.1967C16.132 3.79018 14.2244 3 12.2352 3C10.2461 3 8.33845 3.79018 6.93193 5.1967C5.52541 6.60322 4.73523 8.51088 4.73523 10.5V13.5C4.73523 15.4891 5.52541 17.3968 6.93193 18.8033C8.33845 20.2098 10.2461 21 12.2352 21ZM23.1102 12L1.36023 12M21.978 17.625L19.2835 16.0694M21.978 6.37501L19.2835 7.93067M2.49244 6.375L5.18693 7.93066M2.49244 17.625L5.18691 16.0694" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    