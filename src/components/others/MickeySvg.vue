<script>
export default {
  install(Vue, options) {
    Vue.component('mickey-svg-pcon', this)
  },
  name: 'mickey-svg',
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
<path d="M5.49977 3C6.07178 2.99994 6.63509 3.14008 7.1404 3.40815C7.64571 3.67622 8.07762 4.06405 8.39832 4.5377C8.71902 5.01136 8.91875 5.55639 8.98002 6.12512C9.04129 6.69384 8.96223 7.26891 8.74977 7.8C7.79049 8.30349 6.96082 9.02226 6.32577 9.9C5.84478 10.0175 5.34434 10.0316 4.85749 9.94143C4.37064 9.85123 3.90848 9.65875 3.50152 9.37673C3.09456 9.0947 2.75207 8.72954 2.49667 8.30536C2.24127 7.88118 2.07878 7.40764 2.01993 6.91602C1.96108 6.42439 2.0072 5.92588 2.15526 5.4534C2.30332 4.98093 2.54994 4.54524 2.87883 4.17512C3.20772 3.80501 3.6114 3.50888 4.0632 3.30632C4.515 3.10375 5.00464 2.99935 5.49977 3V3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.5 3C18.9944 3.0005 19.4831 3.10576 19.9339 3.30883C20.3847 3.5119 20.7874 3.80818 21.1154 4.17815C21.4434 4.54812 21.6893 4.98339 21.8369 5.45528C21.9844 5.92717 22.0304 6.42497 21.9716 6.91589C21.9129 7.40682 21.7508 7.87973 21.496 8.30346C21.2412 8.7272 20.8996 9.09215 20.4935 9.37428C20.0875 9.6564 19.6263 9.8493 19.1403 9.94026C18.6543 10.0312 18.1546 10.0182 17.674 9.902C17.0394 9.02307 16.2097 8.30322 15.25 7.799C15.0377 7.26796 14.9588 6.693 15.0202 6.12441C15.0816 5.55582 15.2813 5.01094 15.602 4.53742C15.9227 4.0639 16.3545 3.67617 16.8597 3.40816C17.3649 3.14014 17.9281 3 18.5 3V3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 21C15.866 21 19 17.866 19 14C19 10.134 15.866 7 12 7C8.13401 7 5 10.134 5 14C5 17.866 8.13401 21 12 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    