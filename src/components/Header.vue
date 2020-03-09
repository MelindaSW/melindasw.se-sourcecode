<template>
  <div class="header">
    <div class="portraitcontainer">
      <img src="../assets/portrait.jpg" alt="portrait" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {}
}
</script>

<style scoped>
.header {
  padding: 2rem;
  width: 70%;
  margin: auto;
  height: 50%;
}
.portraitcontainer {
  background-color: rgb(255, 255, 255);
  height: 100%;
  display: flex;
  /* border-radius: 1rem; */
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}
.portraitcontainer img {
  height: 20rem;
  /* border-radius: 1rem; */
  margin-bottom: 1rem;
  margin-top: 1rem;
  margin-left: 2rem;
  box-shadow: 0 -3em 3em rgba(0, 0, 0, 0.1);
}
</style>
