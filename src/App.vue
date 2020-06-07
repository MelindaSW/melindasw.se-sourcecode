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
  background-color: $background
  color: $darktext
  height: 100%
  min-height: 0
  font-family: $font-text
  font-weight: 500
  font-size: 20px
  position: absolute
  width: 100%

.title
  font-family: $font-title
</style>
