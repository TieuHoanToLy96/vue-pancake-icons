<script>
export default {
  install(Vue, options) {
    Vue.component('hand-grabbing-pcon', this)
  },
  name: 'hand-grabbing',
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
<path d="M12.8823 11.625V8.625M12.8823 8.625C12.8823 8.12772 12.6848 7.65081 12.3331 7.29917C11.9815 6.94754 11.5046 6.75 11.0073 6.75C10.51 6.75 10.0331 6.94754 9.6815 7.29917C9.32987 7.65081 9.13232 8.12772 9.13232 8.625V13.875V10.875H7.25732C6.76004 10.875 6.28313 11.0725 5.9315 11.4242C5.57987 11.7758 5.38232 12.2527 5.38232 12.75V14.25C5.38232 16.2391 6.1725 18.1468 7.57902 19.5533C8.98555 20.9598 10.8932 21.75 12.8823 21.75C14.8714 21.75 16.7791 20.9598 18.1856 19.5533C19.5921 18.1468 20.3823 16.2391 20.3823 14.25V10.125C20.3823 9.62772 20.1848 9.15081 19.8331 8.79917C19.4815 8.44754 19.0046 8.25 18.5073 8.25C18.01 8.25 17.5331 8.44754 17.1815 8.79917C16.8299 9.15081 16.6323 9.62772 16.6323 10.125V11.625V8.625C16.6323 8.12772 16.4348 7.65081 16.0831 7.29917C15.7315 6.94754 15.2546 6.75 14.7573 6.75C14.26 6.75 13.7831 6.94754 13.4315 7.29917C13.0799 7.65081 12.8823 8.12772 12.8823 8.625Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    