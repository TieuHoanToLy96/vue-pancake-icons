<script>
export default {
  install(Vue, options) {
    Vue.component('gift-off-pcon', this)
  },
  name: 'gift-off',
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
<path d="M12 8H20C20.2652 8 20.5196 8.10536 20.7071 8.29289C20.8946 8.48043 21 8.73478 21 9V11C21 11.2652 20.8946 11.5196 20.7071 11.7071C20.5196 11.8946 20.2652 12 20 12H16M12 12H4C3.73478 12 3.48043 11.8946 3.29289 11.7071C3.10536 11.5196 3 11.2652 3 11V9C3 8.73478 3.10536 8.48043 3.29289 8.29289C3.48043 8.10536 3.73478 8 4 8H8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12V21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 12V15M19 19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 7.99994C7.13245 7.99998 6.7694 7.91897 6.43673 7.76268C6.10406 7.60639 5.80994 7.37867 5.57532 7.09573C5.3407 6.8128 5.17136 6.48161 5.07935 6.12576C4.98734 5.7699 4.97493 5.39814 5.043 5.03694M7.066 3.03694C7.206 3.01394 7.352 2.99994 7.5 2.99994C9.474 2.96594 11.26 4.94994 12 7.99994C12.74 4.94994 14.526 2.96594 16.5 2.99994C17.163 2.99994 17.7989 3.26333 18.2678 3.73217C18.7366 4.20102 19 4.8369 19 5.49994C19 6.16298 18.7366 6.79887 18.2678 7.26771C17.7989 7.73655 17.163 7.99994 16.5 7.99994" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    