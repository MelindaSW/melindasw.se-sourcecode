<template>
  <div id="gallery">
    <div id="grid">
      <ArtCard
        class="griditem"
        v-for="(item, i) in artCardInfo"
        :key="i"
        :imgname="item.img"
        :mediums="item.mediums"
        :size="item.size"
        :sold="item.sold"
        :title="item.title"
      />
    </div>
  </div>
</template>

<script>
import { ArtCard } from '@/components'
import { artCardInfo } from '../textcontent/gallery'
export default {
  components: { ArtCard },
  data: () => ({
    artCardInfo
  }),
  name: 'Gallery'
}
</script>

<style lang="sass" scoped>
#gallery
  margin-top: 50px
  margin-bottom: 60px
  width: 100%

  #grid
    display: grid
    grid-gap: 4rem
    grid-auto-flow: row
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr))
    height: fit-content
    width: 90%
    margin: auto

    .griditem
      margin: auto

a:link
  color: $darklink

a:visited
  color: $darklink

a:hover
  color: $darklink

a:active
  color: $darklink
</style>
<!-- <span class="title"
      >This page is currently under construction. Some of my drawings can be
      found on
      <a
        href="https://www.instagram.com/melindas_crosshatching/"
        target="_blank"
        >instagram </a
      >, or take a tour in the
      <a href="Vr-Gallery/gallery.html" target="_blank">vr gallery</a>
      I created for an assignments in the client programming course at YRGO. Use
      the arrow keys and the mouse to "walk around. It should work in most
      browsers but can be a bit wonky if you are using your phones
      browser.</span
    > -->
