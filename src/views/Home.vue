<template>
  <div class="home">
    <Header />
    <AboutMe />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import AboutMe from '@/components/AboutMe.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    AboutMe
  }
}
</script>
