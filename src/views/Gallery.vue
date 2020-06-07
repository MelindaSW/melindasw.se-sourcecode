<template>
  <div id="gallery">
    <span class="title"
      >This page is currently under construction. In the meantime you can find
      some of my work at my
      <a
        href="https://www.instagram.com/melindas_crosshatching/"
        target="_blank"
        >instagram </a
      >. Or take a tour in my
      <a href="Vr-Gallery/gallery.html" target="_blank">vr gallery</a>, created
      for an assignment in the client programming course at YRGO</span
    >
  </div>
</template>

<script>
export default {
  name: 'Gallery'
}
</script>

<style lang="sass" scoped>
#gallery
  margin-top: 150px
  height: inherited
  margin-left: 5%
  margin-right: 5%

  a:link
    color: $darklink

  a:visited
    color: $darklink

  a:hover
    color: $darklink

  a:active
    color: $darklink
</style>
