<script>
export default {
  install(Vue, options) {
    Vue.component('paper-bag-off-pcon', this)
  },
  name: 'paper-bag-off',
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
<path d="M7.158 3.185C7.414 3.066 7.7 3 8 3H16C16.5304 3 17.0391 3.21071 17.4142 3.58579C17.7893 3.96086 18 4.46957 18 5V6.82C18.0001 7.59621 18.1808 8.36175 18.528 9.056L19.472 10.944C19.8192 11.6382 19.9999 12.4038 20 13.18V16M19.823 19.824C19.6645 20.1746 19.4082 20.4721 19.0848 20.6806C18.7615 20.8892 18.3848 21.0001 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V13.18C4.00005 12.4038 4.18082 11.6382 4.528 10.944L6 8V6" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.185 13.1729C12.8892 13.3051 12.63 13.5072 12.4296 13.7618C12.2293 14.0164 12.0938 14.3159 12.0348 14.6344C11.9758 14.953 11.9951 15.2811 12.0909 15.5906C12.1868 15.9001 12.3565 16.1816 12.5853 16.411C12.814 16.6404 13.0951 16.8108 13.4043 16.9075C13.7136 17.0042 14.0416 17.0243 14.3603 16.9662C14.6791 16.908 14.9789 16.7733 15.234 16.5736C15.4891 16.3739 15.6919 16.1153 15.825 15.8199" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 21C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V13.18C7.99995 12.4038 7.81918 11.6382 7.472 10.944L6 8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 7H13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    