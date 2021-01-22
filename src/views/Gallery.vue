<template>
  <div id="gallery">
    <header>
      <h1 class="title">{{ galleryText.title }}</h1>
      <p class="subtitle">
        {{ galleryText.paragraphs[0] }}
      </p>
      <p class="subtitle">
        {{ galleryText.paragraphs[1] }}
        <a href="Vr-Gallery/gallery.html" target="_blank">VR GALLERY</a>
      </p>
    </header>
    <masonry
      id="grid"
      :cols="{ default: 3, 1500: 2, 1000: 1 }"
      :gutter="{ default: '30px', 1500: '16px' }"
    >
      <art-card
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
      <art-modal
        v-if="showModal"
        :image="imageInModal"
        @previous="handleModal(true, 1, 'prev')"
        @next="handleModal(true, 1, 'next')"
        @close-modal="handleModal(false)"
      />
    </masonry>
    <to-top-button />
  </div>
</template>

<script>
import { ArtCard, ArtModal, ToTopButton } from '@/components'
import { artCardInfo, galleryText } from '../textcontent/gallery'
export default {
  components: { ArtCard, ArtModal, ToTopButton },
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
      if (command === 'next') {
        this.currentIndex += 1
        if (this.currentIndex >= artCardInfo.length) {
          this.currentIndex = 0
        }
      } else if (command === 'prev') {
        this.currentIndex -= 1
        if (this.currentIndex < 0) {
          this.currentIndex = artCardInfo.length - 1
        }
      } else {
        this.currentIndex = index
      }
      this.imageInModal = require('../assets/images/gallery/' +
        artCardInfo[this.currentIndex].img)
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
    height: fit-content
    width: 100%
    margin: auto

a:link,
a:visited,
a:hover,
a:active
  color: $darklink

@media screen and (min-width: 1500px)
  #gallery header p
    width: 70%

@media screen and (min-width: 500px)
  #gallery
    width: 80%
</style>
