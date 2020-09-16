<template>
  <v-footer id="footer" padless>
    <v-col class="text-center" cols="12">
      <p>
        This is a single page
        <a href="https://cli.vuejs.org/">Vue CLI</a> website with components
        from <a href="https://vuetifyjs.com/en/">Vuetify</a>. The sourcecode can
        be found
        <a href="https://github.com/MelindaSW/melindasw.se-sourcecode">here</a>.
      </p>
      <p>
        Does something look weird or behave strange? Suggest changes by creating
        an issue
        <a href="https://github.com/MelindaSW/melindasw.se-sourcecode/issues"
          >here</a
        >, or email me on sandstrommelinda@gmail.com.
      </p>
    </v-col></v-footer
  >
</template>

<script>
export default { name: 'Footer' }
</script>

<style lang="sass" scoped>
#footer
      background: linear-gradient(0deg, $background 0%, $primaryopaque 100%)
      height: 80px
      font-size: 0.9rem
      text-align: center

p:first-child
    margin-top: 20px
    margin-bottom: 7px
</style>
