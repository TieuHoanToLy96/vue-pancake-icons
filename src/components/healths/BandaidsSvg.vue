<script>
export default {
  install(Vue, options) {
    Vue.component('bandaids-svg-pcon', this)
  },
  name: 'bandaids-svg',
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
<path d="M4.92287 8.87132C4.36026 8.30871 4.04419 7.54565 4.04419 6.75C4.04419 5.95435 4.36026 5.19129 4.92287 4.62868C5.48548 4.06607 6.24854 3.75 7.04419 3.75C7.83984 3.75 8.6029 4.06607 9.16551 4.62868L19.6655 15.1287C20.2281 15.6913 20.5442 16.4544 20.5442 17.25C20.5442 18.0457 20.2281 18.8087 19.6655 19.3713C19.1029 19.9339 18.3398 20.25 17.5442 20.25C16.7485 20.25 15.9855 19.9339 15.4229 19.3713L4.92287 8.87132Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.4229 4.62868C15.9855 4.06607 16.7485 3.75 17.5442 3.75C17.9382 3.75 18.3283 3.8276 18.6922 3.97836C19.0562 4.12913 19.3869 4.3501 19.6655 4.62868C19.9441 4.90726 20.1651 5.23797 20.3158 5.60195C20.4666 5.96593 20.5442 6.35603 20.5442 6.75C20.5442 7.14397 20.4666 7.53407 20.3158 7.89805C20.1651 8.26203 19.9441 8.59275 19.6655 8.87132L9.16551 19.3713C8.88693 19.6499 8.55622 19.8709 8.19224 20.0216C7.82826 20.1724 7.43816 20.25 7.04419 20.25C6.65022 20.25 6.26012 20.1724 5.89614 20.0216C5.53216 19.8709 5.20145 19.6499 4.92287 19.3713C4.36026 18.8087 4.04419 18.0457 4.04419 17.25C4.04419 16.4544 4.36026 15.6913 4.92287 15.1287L15.4229 4.62868Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.5" d="M12.2942 12.375C12.5013 12.375 12.6692 12.2071 12.6692 12C12.6692 11.7929 12.5013 11.625 12.2942 11.625C12.0871 11.625 11.9192 11.7929 11.9192 12C11.9192 12.2071 12.0871 12.375 12.2942 12.375Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.2933 12.9375C12.8106 12.9375 13.23 12.5178 13.23 12C13.23 11.4822 12.8106 11.0625 12.2933 11.0625C11.776 11.0625 11.3567 11.4822 11.3567 12C11.3567 12.5178 11.776 12.9375 12.2933 12.9375Z" fill="currentColor"/>
</svg>

</template>
    