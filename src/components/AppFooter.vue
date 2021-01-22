<template>
  <v-footer id="footer" padless>
    <v-col class="text-center" cols="12">
      <div id="contactitemscontainer">
        <div class="contactitem">
          <a href="mailto:sandstrommelinda@gmail.com?Subject=Hi!">
            <img src="../assets/gmail-logo.png" alt="gmail logo" />
          </a>
        </div>
        <div class="contactitem">
          <a
            href="https://www.linkedin.com/in/melinda-sandstr%C3%B6m-wagner/"
            target="_blank"
          >
            <img src="../assets/linkedin-logo.png" alt="linkedin logo" />
          </a>
        </div>
        <div class="contactitem">
          <a href="https://github.com/MelindaSW" target="_blank">
            <img src="../assets/GitHub-Mark-64px.png" alt="github logo" />
          </a>
        </div>
        <div class="contactitem">
          <a
            href="https://www.instagram.com/melindas_crosshatching/"
            target="_blank"
          >
            <img src="../assets/instagram-logo.png" alt="instagram logo" />
          </a>
        </div>
      </div>
      <p>
        This site is built using
        <a href="https://cli.vuejs.org/">Vue CLI</a> and the sourcecode can be
        found
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
export default { name: 'AppFooter' }
</script>

<style lang="sass" scoped>
#footer
  background-color: $primaryopaque
  font-size: 0.9rem
  text-align: center
  padding-top: 5px
  padding-bottom: 5px
  margin-top: auto
  width: 100%

p:first-child
  margin-top: 20px
  margin-bottom: 7px

#contactitemscontainer
  display: flex
  flex-direction: row
  align-items: center
  justify-content: center

  img
    height: 24px
    margin: 20px

a:link
  color: $darktext

a:visited
  color: $darktext

a:hover
  color: $darktext

a:active
  color: $darktext
</style>
