<script>
export default {
  install(Vue, options) {
    Vue.component('shopping-bag-open-pcon', this)
  },
  name: 'shopping-bag-open',
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
<path d="M3.4118 7.5H21.4118M16.1618 10.5C16.1618 11.4946 15.7667 12.4484 15.0635 13.1517C14.3602 13.8549 13.4064 14.25 12.4118 14.25C11.4172 14.25 10.4634 13.8549 9.76015 13.1517C9.05689 12.4484 8.6618 11.4946 8.6618 10.5M4.1618 4.5H20.6618C21.076 4.5 21.4118 4.83579 21.4118 5.25V18.75C21.4118 19.1642 21.076 19.5 20.6618 19.5H4.1618C3.74759 19.5 3.4118 19.1642 3.4118 18.75V5.25C3.4118 4.83579 3.74759 4.5 4.1618 4.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    