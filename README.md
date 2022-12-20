# Install
npm install vue-pancake-icons

# Use 1
_in component
```html
<script>
import { ArrowUp } from "vue-pancake-icons"
export default {
  components: { ArrowUp }
}
</script>
<template>
  <ArrowUp/>
</template>
```

# Use 2
_multi component in app.js
```html
import { ArrowUp } from "vue-pancake-icons"
app.use(ArrowUp)
```

# Use 3
_Note: this usage is not recommended as it cannot be tree-shaken
_all component global in app.js
```html
import VuePancakeIcons from 'vue-pancake-icons'
app.use(VuePancakeIcons)
```
# Demo
Click [here](https://tieuhoan.dev)
