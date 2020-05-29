<template>
  <div id="root">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',

  components: {},

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
