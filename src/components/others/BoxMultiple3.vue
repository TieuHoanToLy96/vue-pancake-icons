<script>
export default {
  install(Vue, options) {
    Vue.component('box-multiple-3-pcon', this)
  },
  name: 'box-multiple-3',
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
<path d="M19 3H9C7.89543 3 7 3.89543 7 5V15C7 16.1046 7.89543 17 9 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 17V19C17 19.5304 16.7893 20.0391 16.4142 20.4142C16.0391 20.7893 15.5304 21 15 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7H7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 10C14.3956 10 14.7822 9.8827 15.1111 9.66294C15.44 9.44318 15.6964 9.13082 15.8478 8.76537C15.9991 8.39992 16.0387 7.99778 15.9616 7.60982C15.8844 7.22186 15.6939 6.86549 15.4142 6.58579C15.1345 6.30608 14.7781 6.1156 14.3902 6.03843C14.0022 5.96126 13.6001 6.00087 13.2346 6.15224C12.8692 6.30362 12.5568 6.55996 12.3371 6.88886C12.1173 7.21776 12 7.60444 12 8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12C12 12.3956 12.1173 12.7822 12.3371 13.1111C12.5568 13.44 12.8692 13.6964 13.2346 13.8478C13.6001 13.9991 14.0022 14.0387 14.3902 13.9616C14.7781 13.8844 15.1345 13.6939 15.4142 13.4142C15.6939 13.1345 15.8844 12.7781 15.9616 12.3902C16.0387 12.0022 15.9991 11.6001 15.8478 11.2346C15.6964 10.8692 15.44 10.5568 15.1111 10.3371C14.7822 10.1173 14.3956 10 14 10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    