<script>
export default {
  install(Vue, options) {
    Vue.component('warning-octagon-pcon', this)
  },
  name: 'warning-octagon',
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
<path d="M12 7.5V12.75M15.4173 3H8.58274C8.48425 3 8.38672 3.0194 8.29573 3.05709C8.20473 3.09478 8.12205 3.15003 8.05241 3.21967L3.21967 8.05241C3.15003 8.12205 3.09478 8.20473 3.05709 8.29573C3.0194 8.38672 3 8.48425 3 8.58274V15.4173C3 15.5158 3.0194 15.6133 3.05709 15.7043C3.09478 15.7953 3.15003 15.8779 3.21967 15.9476L8.05241 20.7803C8.12205 20.85 8.20473 20.9052 8.29573 20.9429C8.38672 20.9806 8.48425 21 8.58274 21H15.4173C15.5158 21 15.6133 20.9806 15.7043 20.9429C15.7953 20.9052 15.878 20.85 15.9476 20.7803L20.7803 15.9476C20.85 15.8779 20.9052 15.7953 20.9429 15.7043C20.9806 15.6133 21 15.5158 21 15.4173V8.58274C21 8.48425 20.9806 8.38672 20.9429 8.29573C20.9052 8.20473 20.85 8.12205 20.7803 8.05241L15.9476 3.21967C15.878 3.15003 15.7953 3.09478 15.7043 3.05709C15.6133 3.0194 15.5158 3 15.4173 3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9991 17.0625C12.5164 17.0625 12.9358 16.6428 12.9358 16.125C12.9358 15.6072 12.5164 15.1875 11.9991 15.1875C11.4818 15.1875 11.0625 15.6072 11.0625 16.125C11.0625 16.6428 11.4818 17.0625 11.9991 17.0625Z" fill="currentColor"/>
</svg>

</template>
    