<template>
  <masonry
    id="projectitems"
    :cols="{ default: 2, 1500: 2, 1250: 1 }"
    :gutter="{ default: '40px', 1500: '30px' }"
  >
    <div class="projectitem" v-for="(item, i) in projects" :key="i">
      <v-card class="mx-auto" outlined>
        <v-card-title id="cardtitle" class="title">{{
          item.name
        }}</v-card-title>

        <v-card-subtitle id="subtitle">{{ item.description }}</v-card-subtitle>

        <template v-for="(img, i) in item.images">
          <img :src="getImgUrl(img)" :key="i" alt="projectimage" />
        </template>

        <v-card-actions id="actions">
          <v-btn outlined tile>
            <a :href="item.url">Repository</a>
          </v-btn>

          <v-spacer />

          <v-btn outlined tile @click="toggleReadMore(i)">
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
  </masonry>
</template>

<script>
export default {
  name: 'ProjectItems',
  props: ['projects'],
  data: () => ({
    showReadMore: { key: 0, show: false }
  }),
  methods: {
    toggleReadMore(cardIndex) {
      this.showReadMore.show =
        cardIndex === this.showReadMore.key ? !this.showReadMore.show : true
      this.showReadMore.key = cardIndex
    },
    getImgUrl(name) {
      var images = require.context('../assets/images', false, /\.png$/)
      return images('./' + name + '.png')
    }
  }
}
</script>

<style lang="sass" scoped>
#projectitems
  width: 97%

.projectitem
  border: 1px solid $darkborder
  margin-bottom: 40px

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
  text-align: left

img
  border: 2px solid $lightborder
  width: 95%
  margin: auto

#moretext
  text-align: left
  font-size: 1.1rem
  margin: 3% 5% 3% 5%

#actions
  margin: 15px

a:link, a:visited, a:hover, a:active
  color: $darktext
  text-decoration: underline

@media screen and (min-width: 760px)
  #projectitems
    width: 80%

@media screen and (min-width: 1000px)
  #projectitems
    width: 70%
</style>
