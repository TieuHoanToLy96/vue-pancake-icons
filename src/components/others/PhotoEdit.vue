<script>
export default {
  install(Vue, options) {
    Vue.component('photo-edit-pcon', this)
  },
  name: 'photo-edit',
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
<path d="M15 8H15.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 20H7C6.20435 20 5.44129 19.6839 4.87868 19.1213C4.31607 18.5587 4 17.7956 4 17V7C4 6.20435 4.31607 5.44129 4.87868 4.87868C5.44129 4.31607 6.20435 4 7 4H17C17.7956 4 18.5587 4.31607 19.1213 4.87868C19.6839 5.44129 20 6.20435 20 7V11" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 14.9998L8 10.9998C8.928 10.1068 10.072 10.1068 11 10.9998L14 13.9998" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 13.9998L15 12.9998C15.31 12.7018 15.644 12.5028 15.987 12.4038" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.42 15.6102C18.615 15.4152 18.8465 15.2605 19.1013 15.155C19.3561 15.0494 19.6292 14.9951 19.905 14.9951C20.1808 14.9951 20.4539 15.0494 20.7087 15.155C20.9635 15.2605 21.195 15.4152 21.39 15.6102C21.585 15.8052 21.7397 16.0368 21.8452 16.2915C21.9508 16.5463 22.0051 16.8194 22.0051 17.0952C22.0051 17.371 21.9508 17.6441 21.8452 17.8989C21.7397 18.1537 21.585 18.3852 21.39 18.5802L18 22.0002H15V19.0002L18.42 15.6102Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    