<template>
  <div id="root">
    <Menu />
    <router-view />
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
  name: 'App',

  components: {
    Menu
  },

  data: () => ({})
}
</script>

<style>
#root {
  background-color: rgb(255, 255, 255);
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
