import * as components from "./components"

const VuePancakeIcons = {
  install(Vue) {
    for (let props in components) {
      const component = components[props]
      console.log(component, "componentcomponentcomponent")
      Vue.component(component.name, component)
    }
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VuePancakeIcons);
}

export default VuePancakeIcons