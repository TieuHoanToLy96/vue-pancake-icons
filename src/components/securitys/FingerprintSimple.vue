<script>
export default {
  install(Vue, options) {
    Vue.component('fingerprint-simple-pcon', this)
  },
  name: 'fingerprint-simple',
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
<path d="M16.6146 12.0009C16.6184 14.9333 16.0472 17.838 14.9333 20.5506M15.4686 9.00057C14.8609 8.32136 14.0614 7.84264 13.1758 7.62775C12.2901 7.41286 11.3601 7.47193 10.5088 7.79715C9.65748 8.12237 8.92495 8.6984 8.40816 9.44903C7.89136 10.1997 7.61466 11.0895 7.61465 12.0009C7.61819 14.2879 7.03801 16.538 5.92902 18.5383M9.11459 3.513C10.4723 3.03448 11.9249 2.88838 13.3507 3.08695C14.7765 3.28552 16.1339 3.82298 17.3092 4.65427C18.4845 5.48557 19.4433 6.58647 20.1055 7.86472C20.7676 9.14296 21.1136 10.5613 21.1146 12.0009C21.1159 14.0195 20.8915 16.032 20.4456 18.0008M2.29858 15.7509C2.83805 14.5744 3.11645 13.2951 3.11465 12.0009C3.11322 10.7344 3.37978 9.48187 3.89682 8.3257C4.41386 7.16953 5.16968 6.13585 6.11463 5.29256M10.4814 19.5009C10.2913 19.9151 10.0861 20.3207 9.8659 20.7176M12.1136 12.0008C12.1147 13.5187 11.9241 15.0307 11.5465 16.5008" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    