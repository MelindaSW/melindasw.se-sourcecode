<template>
  <div id="gallery">
    <span class="title"
      >This page is currently under construction. Some of my drawings can be
      found on
      <a
        href="https://www.instagram.com/melindas_crosshatching/"
        target="_blank"
        >instagram </a
      >. You can also take a tour in the
      <a href="Vr-Gallery/gallery.html" target="_blank">vr gallery</a>. It was
      one of the assignments for a client programming course at YRGO. Use the
      arrow keys and the mouse to "walk around".</span
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
  padding-bottom: 600px

  a:link
    color: $darklink

  a:visited
    color: $darklink

  a:hover
    color: $darklink

  a:active
    color: $darklink
</style>
