# Install
npm install vue-pancake-icons

# Use 1
in component
<script>
import { ArrowUp } from "vue-pancake-icons"
export default {
  components: { ArrowUp }
}
</script>
<template>
  <ArrowUp/>
</template>

# Use 2
multi component in app.js
import { ArrowUp } from "vue-pancake-icons"
app.use(ArrowUp)

# Use 3
all component global in app.js
import VuePancakeIcons from 'vue-pancake-icons'
app.use(VuePancakeIcons)

# Demo
Click [here](https://tieuhoan.dev)
