<script>
export default {
  install(Vue, options) {
    Vue.component('dna-svg-pcon', this)
  },
  name: 'dna-svg',
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
<path d="M14.8279 14.8281C15.21 14.4591 15.5147 14.0177 15.7243 13.5297C15.934 13.0417 16.0443 12.5168 16.0489 11.9857C16.0535 11.4546 15.9523 10.9278 15.7512 10.4363C15.5501 9.94468 15.2531 9.49807 14.8775 9.1225C14.5019 8.74693 14.0553 8.44992 13.5637 8.24879C13.0722 8.04767 12.5454 7.94646 12.0143 7.95108C11.4832 7.95569 10.9583 8.06604 10.4703 8.27568C9.98229 8.48531 9.54091 8.79004 9.17192 9.17208C8.44329 9.92649 8.04011 10.9369 8.04922 11.9857C8.05834 13.0345 8.47901 14.0377 9.22065 14.7794C9.96228 15.521 10.9655 15.9417 12.0143 15.9508C13.0631 15.9599 14.0735 15.5567 14.8279 14.8281V14.8281Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.17189 20.4851C9.54334 20.1137 9.83798 19.6727 10.039 19.1874C10.24 18.7021 10.3435 18.1819 10.3435 17.6566C10.3435 17.1313 10.24 16.6111 10.039 16.1258C9.83798 15.6405 9.54334 15.1995 9.17189 14.8281C8.80045 14.4567 8.35948 14.162 7.87417 13.961C7.38885 13.76 6.86869 13.6565 6.34339 13.6565C5.81809 13.6565 5.29793 13.76 4.81262 13.961C4.3273 14.162 3.88634 14.4567 3.51489 14.8281" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.8281 3.51489C14.0779 4.26506 13.6565 5.2825 13.6565 6.34339C13.6565 7.40429 14.0779 8.42173 14.8281 9.17189C15.5783 9.92206 16.5957 10.3435 17.6566 10.3435C18.7175 10.3435 19.7349 9.92206 20.4851 9.17189" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    