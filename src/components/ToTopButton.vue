<template>
  <v-btn
    v-if="display"
    id="totopbtn"
    color="rgba(90, 129, 144, 0.747)"
    depressed
    x-large
    icon
    @click="scrollToTop"
    ><v-icon> mdi-arrow-collapse-up </v-icon></v-btn
  >
</template>

<script>
export default {
  name: 'ToTopButton',
  data: () => ({
    display: false
  }),
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.display = window.scrollY > 200
    },
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style lang="sass" scoped>
#totopbtn
  background-color: $primaryopaque
  position: fixed
  bottom: 100px
  color: white
  right: 10px
  z-index: 99
</style>
