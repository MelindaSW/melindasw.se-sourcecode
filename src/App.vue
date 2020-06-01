<template>
  <div id="root">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  components: {
    NavBar
  },
  name: 'App'
}
</script>

<style>
#root {
  background-color: rgb(255, 255, 255);
  color: rgb(34, 34, 34);
  height: 100%;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 500;
  font-size: 20px;
  position: fixed;
  width: 100%;
}

.title {
  font-family: 'Raleway', sans-serif;
}
</style>
