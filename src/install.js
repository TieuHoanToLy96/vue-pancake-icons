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

const VuePancakeIcons = {
  install(Vue) {
    let icons = [arrows, brands, commerces, communications, designs, developments, educations, games, healths, maps, maths, medias, offices, peoples, securitys, systems, times, weathers]
    for (let i = 0; i < icons.length; i++) {
      for (let props in icons[i]) {
        const component = icons[i][props]
        Vue.component(component.name + "-pcon", component)
      }
    }
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VuePancakeIcons);
}

export default VuePancakeIcons