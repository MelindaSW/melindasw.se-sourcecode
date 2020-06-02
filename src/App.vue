<template>
  <div id="root">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import { NavBar } from '@/components'

export default {
  components: {
    NavBar
  },
  name: 'App'
}
</script>

<style lang="sass">
#root
  color: $darktext
  height: 100%
  min-height: 0
  font-family: 'Barlow Semi Condensed', sans-serif
  font-weight: 500
  font-size: 20px
  position: absolute
  width: 100%

.title
  font-family: 'Raleway', sans-serif
</style>
