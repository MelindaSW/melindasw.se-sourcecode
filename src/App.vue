<template>
  <div id="root">
    <NavBar />
    <main><router-view /></main>
    <Footer />
  </div>
</template>

<script>
import { NavBar, Footer } from '@/components'

export default {
  components: {
    NavBar,
    Footer
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
