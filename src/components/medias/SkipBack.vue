<script>
export default {
  install(Vue, options) {
    Vue.component('skip-back-pcon', this)
  },
  name: 'skip-back',
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
<path d="M5.60278 3.75V20.25M6.64999 11.36L17.9617 4.44733C18.0754 4.37785 18.2055 4.33992 18.3387 4.33742C18.472 4.33493 18.6034 4.36797 18.7197 4.43315C18.8359 4.49832 18.9326 4.59328 19 4.70825C19.0673 4.82322 19.1028 4.95405 19.1028 5.08729V18.9127C19.1028 19.0459 19.0673 19.1768 19 19.2918C18.9326 19.4067 18.8359 19.5017 18.7197 19.5669C18.6034 19.632 18.472 19.6651 18.3387 19.6626C18.2055 19.6601 18.0754 19.6221 17.9617 19.5527L6.64999 12.64C6.54036 12.573 6.44978 12.4789 6.38693 12.3669C6.32409 12.2548 6.29108 12.1285 6.29108 12C6.29108 11.8715 6.32409 11.7452 6.38693 11.6331C6.44978 11.5211 6.54036 11.427 6.64999 11.36Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    