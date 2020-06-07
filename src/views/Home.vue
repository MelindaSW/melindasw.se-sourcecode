<template>
  <div id="home">
    <figure id="portrait">
      <img src="../assets/images/portrait.jpg" alt="portrait of author" />
    </figure>
    <main id="aboutme">
      <article>
        <p>
          <span class="title">Hi and welcome to my site.</span>
          My name is Melinda, a thirty something year old Gothenburg resident.
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non
        </p>
        <p>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        </p>
      </article>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="sass" scoped>
#home
  display: flex
  background-color: $background
  height: fit-content
  flex-direction: row
  padding-top: 4rem

img
  border: 4px solid $darkborder
  height: 400px

p
  margin-bottom: 20px

#portrait
  margin-left: 10%
  margin-top: 90px

.title
  font-size: 2rem

#aboutme
  background-color: $background
  width: 40%
  margin-top: 90px
  margin-left: 8%

@media screen and (max-width: 955px)
  #home
    flex-direction: column
    align-items: center

  #portrait
    margin-left: auto
    margin-right: auto
    margin-top: 5rem

  #aboutme
    margin: auto
    width: 90%

  .title
    margin-left: auto
    margin-right: auto
    margin-top: 5rem

  p:first-of-type
    margin-top: 2rem
</style>
