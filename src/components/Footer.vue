<template>
  <v-footer id="footer" padless>
    <v-col class="text-center" cols="12">
      <p>
        This is a single page
        <a href="https://cli.vuejs.org/">Vue CLI</a> application with components
        from <a href="https://vuetifyjs.com/en/">Vuetify</a>. Sourcecode can be
        found
        <a href="https://github.com/MelindaSW/melindasw.se-sourcecode">here</a>.
      </p>
      <p>
        Does something look weird or behave strange? Suggest changes or report
        an issue
        <a href="https://github.com/MelindaSW/melindasw.se-sourcecode/issues"
          >here</a
        >
        or send me an email on sandstrommelinda@gmail.com.
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
