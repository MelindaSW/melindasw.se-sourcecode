<template>
  <div id="home">
    <figure id="portrait">
      <img src="../assets/images/portrait.jpg" alt="portrait of author" />
    </figure>
    <main id="aboutme">
      <article>
        <span class="title">{{ title }}</span>
        <template v-for="(paragraph, i) in paragraphs"
          ><p :key="i">{{ paragraph }}</p></template
        >
      </article>
    </main>
  </div>
</template>

<script>
import { about } from '../textcontent/home'
export default {
  data: () => ({
    title: about.title,
    paragraphs: about.paragraphs
  }),
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
  font-size: 1.5rem

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
