<template>
  <div id="root">
    <nav-bar />
    <main><router-view /></main>
    <app-footer />
  </div>
</template>

<script>
import { NavBar, AppFooter } from '@/components'

export default {
  components: {
    NavBar,
    AppFooter
  },
  name: 'App'
}
</script>

<style lang="sass">
#root
  background-color: $background
  color: $darktext
  font-family: $font-text
  font-weight: 500
  font-size: 20px
  margin: 0
  min-height: 100%
  position: absolute
  width: 100%
  display: flex
  flex-direction: column

.title
  font-family: $font-title

main
  margin-top: 78px
</style>
