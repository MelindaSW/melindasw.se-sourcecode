<template>
  <div id="projects">
    <main>
      <div id="intro">
        <h1 class="title">{{ intro.title }}</h1>
        <p>
          {{ intro.subtitle }}
        </p>
      </div>
    </main>
    <div id="projectitems">
      <div class="projectitem" v-for="(item, i) in projects" :key="i">
        <v-card class="mx-auto" outlined>
          <v-card-title id="cardtitle" class="title">{{
            item.name
          }}</v-card-title>

          <v-card-subtitle id="subtitle">{{
            item.description
          }}</v-card-subtitle>

          <template v-for="(img, i) in item.images">
            <img :src="getImgUrl(img)" :key="i" alt="projectimage" />
          </template>

          <v-card-actions id="actions">
            <v-btn outlined>
              <a :href="item.url">Repository</a>
            </v-btn>

            <v-spacer />

            <v-btn outlined @click="toggleReadMore(i)">
              Read More
              <v-icon>
                {{
                  showReadMore.show && showReadMore.key === i
                    ? 'mdi-chevron-up'
                    : 'mdi-chevron-down'
                }}
              </v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showReadMore.show && showReadMore.key === i">
              <v-divider></v-divider>
              <v-card-text id="moretext">
                <h3 class="title" v-if="item.collaborators.length > 0">
                  Collaborators:
                </h3>
                <ul
                  v-for="(item, i) in item.collaborators"
                  :key="item.repourl + i"
                >
                  <li>
                    <a :href="item.repourl">{{ item.name }}</a>
                  </li>
                </ul>
                <h3 class="title">Languages and technologies:</h3>
                <ul v-for="(item, i) in item.technologies" :key="i + item">
                  <li>{{ item }}</li>
                </ul>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </div>
    </div>
    <v-btn
      v-if="showToTopBtn"
      id="totopbtn"
      color="rgba(90, 129, 144, 0.747)"
      depressed
      normal
      @click="scrollToTop"
      >To the top</v-btn
    >
  </div>
</template>

<script>
import { intro, projects } from '../textcontent/projects'
export default {
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  data: () => ({
    intro,
    projects,
    showReadMore: { key: 0, show: false },
    showToTopBtn: false
  }),
  methods: {
    handleScroll() {
      this.showToTopBtn = window.scrollY > 200
    },
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    },
    toggleReadMore(cardIndex) {
      this.showReadMore.show =
        cardIndex === this.showReadMore.key ? !this.showReadMore.show : true
      this.showReadMore.key = cardIndex
    },
    getImgUrl(name) {
      var images = require.context('../assets/images', false, /\.png$/)
      return images('./' + name + '.png')
    }
  },
  name: 'Projects'
}
</script>

<style lang="sass" scoped>
#projects
  background-color: $background
  height: fit-content
  margin-top: 150px
  padding-bottom: 6rem

h1
  margin: auto auto 3% auto
  font-weight: normal

h3
  margin: 5% auto 3% auto

ul
  margin-left: 5%

#intro
  width: 90%
  margin: auto
  padding-bottom: 30px

#cardtitle
  font-size: 1.8rem
  font-weight: normal
  margin: 2% 5% 2% 5%

#subtitle
  font-size: 1.1rem
  margin: 2% 5% 2% 5%

img
  border: 2px solid $lightborder
  width: 90%
  margin-left: 5%

#projectitems
  margin: auto
  width: 97%

.projectitem
  border: 2px solid $lightborder
  border-radius: 0.2rem
  margin-bottom: 20px

#moretext
  font-size: 1.1rem
  margin: 3% 5% 3% 5%

#actions
  margin: 15px

#totopbtn
  position: fixed
  bottom: 100px
  color: white
  right: 10px
  z-index: 99

a:link
  color: $darktext
  text-decoration: underline

a:visited
  color: $darktext

a:hover
  color: $darktext

a:active
  color: $darktext


@media screen and (min-width: 760px)
  #intro
    width: 75%

  #projectitems
    width: 70%

@media screen and (min-width: 1000px)
  #intro
    width: 65%

  #projectitems
    width: 70%
    display: flex
    flex-wrap: wrap
    align-items: self-start
    align-content: space-around
    justify-content: center

  .projectitem
    width: 45%
    margin: 20px auto 20px auto
</style>
