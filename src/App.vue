<template>
  <v-app id="root">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  })
}
</script>

<style scoped>
#root {
  background-color: rgb(192, 192, 192);
  height: 100%;
}
</style>
