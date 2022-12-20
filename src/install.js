import * as arrows from "./components/arrows"
import * as brands from "./components/brands"
import * as commerces from "./components/commerces"
import * as communications from "./components/communications"
import * as designs from "./components/designs"
import * as developments from "./components/developments"
import * as educations from "./components/educations"
import * as games from "./components/games"
import * as healths from "./components/healths"
import * as maps from "./components/maps"
import * as maths from "./components/maths"
import * as medias from "./components/medias"
import * as offices from "./components/offices"
import * as peoples from "./components/peoples"
import * as securitys from "./components/securitys"
import * as systems from "./components/systems"
import * as times from "./components/times"
import * as weathers from "./components/weathers"
import * as others from "./components/others"

export * from "./components/arrows"
export * from "./components/brands"
export * from "./components/commerces"
export * from "./components/communications"
export * from "./components/designs"
export * from "./components/developments"
export * from "./components/educations"
export * from "./components/games"
export * from "./components/healths"
export * from "./components/maps"
export * from "./components/maths"
export * from "./components/medias"
export * from "./components/offices"
export * from "./components/peoples"
export * from "./components/securitys"
export * from "./components/systems"
export * from "./components/times"
export * from "./components/weathers"
export * from "./components/others"

let comps = []
export default {
  add(list) {
    comps.concat(list)
  },
  install(Vue) {
    let icons = [arrows, brands, commerces, communications, designs, developments, educations, games, healths, maps, maths, medias, offices, peoples, securitys, systems, times, weathers, others]
    for (let i = 0; i < icons.length; i++) {
      for (let props in icons[i]) {
        const component = icons[i][props]
        if (comps.length) {
          if (comps.includes(component.name) || comps.includes(component.name + "-pcon")) {
            Vue.component(component.name + "-pcon", component)
          }
        } else {
          Vue.component(component.name + "-pcon", component)
        }
      }
    }
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VuePancakeIcons);
}

