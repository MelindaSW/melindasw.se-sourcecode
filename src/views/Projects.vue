<template>
  <div id="projects">
    <main>
      <div id="intro">
        <h1 class="title">{{ intro.title }}</h1>
        <p>
          {{ intro.subtitle }}
        </p>
      </div>
      <project-items :projects="projects" />
    </main>
    <to-top-button />
  </div>
</template>

<script>
import { ToTopButton, ProjectItems } from '@/components'
import { intro, projects } from '../textcontent/projects'
export default {
  components: { ToTopButton, ProjectItems },
  data: () => ({
    intro,
    projects
  }),
  name: 'Projects'
}
</script>

<style lang="sass" scoped>
#projects
  background-color: $background
  height: fit-content
  margin-top: 10px
  padding-bottom: 6rem
  text-align: center

  main
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center

    #intro
      margin-bottom: 3%

h1
  margin: auto auto 3% auto
  font-weight: normal

@media screen and (min-width: 760px)
  #intro
    width: 75%

@media screen and (min-width: 1000px)
  #intro
    width: 65%
</style>
