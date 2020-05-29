<template>
  <div class="home">
    <Menu />
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'

export default {
  name: 'Home',
  components: {
    Menu
  }
}
</script>

<style>
.home {
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}
</style>
