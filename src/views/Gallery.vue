<template>
  <div id="gallery">
    <header>
      <h1 class="title">{{ galleryText.title }}</h1>
      <a href="Vr-Gallery/gallery.html" target="_blank">vr gallery</a>
    </header>
    <div id="grid">
      <ArtCard
        class="griditem"
        v-for="(item, i) in artCardInfo"
        :key="i"
        :imgname="item.img"
        :mediums="item.mediums"
        :price="item.price"
        :size="item.size"
        :sold="item.sold"
        :title="item.title"
      />
    </div>
  </div>
</template>

<script>
import { ArtCard } from '@/components'
import { artCardInfo, galleryText } from '../textcontent/gallery'
export default {
  components: { ArtCard },
  data: () => ({
    artCardInfo,
    galleryText
  }),
  name: 'Gallery'
}
</script>

<style lang="sass" scoped>
#gallery
  margin-top: 50px
  margin-bottom: 60px
  width: 100%
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  margin: 50px auto 60px auto

  header
    text-align: center
    width: 100%
    margin-top: 2rem
    margin-bottom: 3rem

  #grid
    display: grid
    grid-gap: 4rem
    grid-auto-flow: row
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr))
    height: fit-content
    width: 100%
    margin: auto

    .griditem
      margin: auto
      align-self: center

a:link
  color: $darklink

a:visited
  color: $darklink

a:hover
  color: $darklink

a:active
  color: $darklink

@media screen and (min-width: 500px)
  #gallery
    width: 80%
</style>
