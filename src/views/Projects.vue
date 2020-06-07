<template>
  <div id="projects">
    <main>
      <div id="intro">
        <p>
          <span class="title">{{ intro.title }}</span>
          {{ intro.subtitle }}
        </p>
      </div>
    </main>

    <div id="projectitems">
      <div class="projectitem" v-for="(item, i) in projects" :key="i">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-card-title class="title">
            {{ item.name }}
          </v-card-title>

          <v-card-subtitle>
            {{ item.description }}
          </v-card-subtitle>

          <img :src="item.imagesrc" />

          <v-card-actions>
            <v-btn outlined><a :href="item.url">Project repo</a></v-btn>

            <v-spacer />

            <v-btn outlined @click="toggleReadMore(i)"
              >Read more
              <v-icon>{{
                showReadMore.show && showReadMore.key === i
                  ? 'mdi-chevron-up'
                  : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showReadMore.show && showReadMore.key === i">
              <v-divider></v-divider>
              <v-card-text
                >Collaborators:
                <span v-for="(item, i) in item.collaborators" :key="i"
                  >{{ item.name + '... ' + item.repo }},
                </span>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import { intro, projects } from '../textcontent/projects'
export default {
  data: () => ({
    intro,
    projects,
    showReadMore: { key: null, show: false }
  }),
  methods: {
    toggleReadMore(index) {
      this.showReadMore.key = index
      this.showReadMore.show = !this.showReadMore.show
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

#intro
  width: 90%
  margin: auto
  padding-bottom: 30px

  .title
    font-weight: normal
    margin-bottom: 20px

img
   height: 200px

#projectitems
  margin: auto
  width:97%

.projectitem
  margin-bottom: 20px

a:link
  color: $darktext
  text-decoration: none

a:visited
  color: $darktext

a:hover
  color: $darktext

a:active
  color: $darktext
</style>
