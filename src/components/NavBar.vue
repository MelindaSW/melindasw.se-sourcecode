<template>
  <div id="navcontainer" v-resize="onResize">
    <span class="title">MELINDA SANDSTRÖM-WAGNER</span>

    <ul v-if="showNavList">
      <router-link v-for="(item, i) in menuitems" :key="i" :to="{ name: item }">
        <li>
          <span>{{ item }}</span>
        </li>
      </router-link>
    </ul>

    <BarsMenu
      :display="showBars"
      :menuitems="menuitems"
      color="rgb(255, 255, 255)"
    />
    <div id="contactcontainer">
      <div v-if="showMobileBars" id="barsicon">
        <BarsMenu
          :display="showMobileBars"
          :menuitems="menuitems"
          color="white"
        />
      </div>

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
  </div>
</template>

<script>
import BarsMenu from './BarsMenu'
export default {
  data: () => ({
    menuitems: ['Home', 'Projects', 'Gallery' /*
    , 'HaikuCreator'*/],
    showBars: false,
    showMobileBars: false,
    showNavList: true,
    windowSize: {
      x: 0,
      y: 0
    }
  }),
  components: {
    BarsMenu
  },
  mounted() {
    this.onResize()
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      this.showBars = this.windowSize.x < 1368 && this.windowSize.x > 955
      this.showNavList = this.windowSize.x >= 1368
      this.showMobileBars = this.windowSize.x <= 955
    }
  },
  name: 'NavBar'
}
</script>

<style lang="sass" scoped>
#navcontainer
  background-color: $primary
  color: $lighttext
  display: flex
  flex-direction: row
  align-items: center
  justify-content: center
  flex-wrap: nowrap
  height: 78px
  font-size: 2rem
  position: fixed
  width: 100%
  z-index:1

  ul
    list-style-type: none

    li
      display: inline
      margin: 2rem

  .title
    margin-left: 2rem
    margin-right: 2rem

  #contactcontainer
    background-color: $background
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    align-items: center
    justify-content: center
    margin-left: auto
    margin-right: 2%
    padding: 0.4rem

    .contactitem
      margin-right: 1rem
      margin-left: 1rem
      margin-top: 0.2rem
      text-align: center

    .contactitem img:hover
      background-color: $primary
      border-radius: 5px

  #barsicon
    margin-right: 1rem
    margin-left: 1rem
    text-align: center

  img
    height: 2rem

  a:link
    color: $lightlink
    text-decoration: none

  a:visited
    color: $lightlink

  a:hover
    color: $darklink

  a:active
    color: $darklink

@media screen and (max-width: 955px)
  #navcontainer
    align-items: center
    flex-direction: column
    justify-content: space-evenly
    height: 120px
    font-size: 18px

    #contactcontainer
      margin: auto

    #barsicon
      background-color: rgba(90, 129, 144, 0.747)
      border-radius: 2px
      padding: 4px

    .title
      margin: auto

@media screen and (max-width: 570px)
  #contactcontainer
    width: fit-content

  .title
    font-size: 19px
    margin: auto

@media screen and (max-width: 320px)
  #contactcontainer
    width: 98%
</style>
