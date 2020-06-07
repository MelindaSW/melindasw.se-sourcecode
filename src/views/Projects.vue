<template>
  <div id="projects">
    <!-- <span class="title">Projects page, technical portfolio</span> -->
    <main>
      <div id="intro">
        <h1 class="title">Projects</h1>
        <p>
          <span class="title">Welcome to my technical portfolio</span> Lorem
          ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
      </div>
    </main>
    <div id="projectitems"><article class="item">Projectsitems</article></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    projectdata: [
      {
        name: 'Lorem ipsum',
        description:
          'Ut enim ad minim veniam, quis nostrud exercitatio ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        collaborators: ['Lorem I', 'Ipsum L'],
        image: '',
        url: ''
      }
    ]
  }),
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

.title
  font-weight: normal
  margin-bottom: 20px
</style>
