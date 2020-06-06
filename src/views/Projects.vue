<template>
  <div id="projects">
    <!-- <span class="title">Projects page, technical portfolio</span> -->
    <h1 class="title">Projects</h1>
    <p>
      <span class="title">Welcome to my technical portfolio</span> Lorem ipsum
      dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </p>
    <div id="projectitems"><div class="item">Projectsitems</div></div>
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
  margin-left: 10%

.title
  font-weight: normal
</style>
