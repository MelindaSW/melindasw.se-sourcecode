<template>
  <div id="gallery">
    <header>
      <h1 class="title">{{ galleryText.title }}</h1>
      <p class="subtitle">
        {{ galleryText.paragraphs[0] }}
      </p>
      <p>
        {{ galleryText.paragraphs[1] }}
        <a href="Vr-Gallery/gallery.html" target="_blank">VR GALLERY</a>
      </p>
    </header>
    <div id="grid">
      <ArtCard
        class="griditem"
        v-for="(item, i) in artCardInfo"
        :key="i"
        :forsale="item.forsale"
        :imgname="item.img"
        :mediums="item.mediums"
        :size="item.size"
        :sold="item.sold"
        :title="item.title"
        @open-modal="handleModal(true, i)"
      />
      <ArtModal
        v-if="showModal"
        :image="imageInModal"
        @previous="handleModal(true, 1, 'decrement')"
        @next="handleModal(true, 1, 'increment')"
        @close-modal="handleModal(false)"
      />
    </div>
  </div>
</template>

<script>
import { ArtCard, ArtModal } from '@/components'
import { artCardInfo, galleryText } from '../textcontent/gallery'
export default {
  components: { ArtCard, ArtModal },
  data: () => ({
    artCardInfo,
    galleryText,
    showModal: false,
    imageInModal: '',
    currentIndex: 0
  }),
  name: 'Gallery',
  methods: {
    handleModal(show, index = 0, command = '') {
      index =
        command === 'increment'
          ? this.currentIndex++
          : command === 'decrement'
          ? this.currentIndex--
          : index
      this.imageInModal = require('../assets/images/gallery/' +
        artCardInfo[index].img)
      this.showModal = show && window.innerWidth > 700
    }
  }
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
    margin-bottom: 4rem

    h1
      margin-bottom: 2rem
      font-weight: lighter

    p
      margin: 20px auto 20px auto
      width: 90%
      text-align: left
      font-size: 1.1rem

  #grid
    display: grid
    grid-gap: 4rem
    grid-auto-flow: row
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr))
    height: fit-content
    width: 100%
    margin: auto

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
    width: 70%
</style>
