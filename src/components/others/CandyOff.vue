<script>
export default {
  install(Vue, options) {
    Vue.component('candy-off-pcon', this)
  },
  name: 'candy-off',
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
<path d="M11.174 7.16993L11.293 7.04993C11.668 6.67499 12.1767 6.46436 12.707 6.46436C13.2373 6.46436 13.7459 6.67499 14.121 7.04993L16.95 9.87993C17.3249 10.255 17.5356 10.7636 17.5356 11.2939C17.5356 11.8243 17.3249 12.3329 16.95 12.7079L16.826 12.8319M14.83 14.8279L12.707 16.9509C12.3319 17.3259 11.8233 17.5365 11.293 17.5365C10.7627 17.5365 10.254 17.3259 9.87899 16.9509L7.04999 14.1199C6.67505 13.7449 6.46442 13.2363 6.46442 12.7059C6.46442 12.1756 6.67505 11.667 7.04999 11.2919L9.16299 9.17993" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.243 9.172L19.329 8.4C19.5866 8.33566 19.8224 8.20411 20.0125 8.01879C20.2026 7.83348 20.3401 7.60103 20.411 7.3452C20.4819 7.08936 20.4836 6.8193 20.4159 6.56258C20.3483 6.30587 20.2137 6.07171 20.026 5.884L17.81 3.66701C17.6367 3.49354 17.4234 3.36522 17.189 3.29329C16.9546 3.22135 16.7061 3.20799 16.4653 3.25437C16.2245 3.30076 15.9987 3.40547 15.8078 3.55935C15.6168 3.71322 15.4665 3.91156 15.37 4.13701L14.122 7.05001" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.172 16.2431L8.4 19.3291C8.33566 19.5866 8.20411 19.8225 8.01879 20.0126C7.83348 20.2027 7.60103 20.3402 7.3452 20.411C7.08936 20.4819 6.8193 20.4836 6.56258 20.416C6.30587 20.3484 6.07171 20.2138 5.884 20.0261L3.66701 17.8101C3.49354 17.6367 3.36522 17.4235 3.29329 17.1891C3.22135 16.9546 3.20799 16.7061 3.25437 16.4653C3.30076 16.2245 3.40547 15.9988 3.55935 15.8078C3.71322 15.6169 3.91156 15.4666 4.13701 15.3701L7.05001 14.1221" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    