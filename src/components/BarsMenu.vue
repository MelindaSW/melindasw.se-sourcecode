<template>
  <v-menu
    v-if="display"
    attach
    bottom
    origin="center center"
    transition="scale-transition"
  >
    <template v-slot:activator="{ on }">
      <v-btn dark icon v-on="on">
        <v-icon large :color="color">fas fa-bars</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(item, i) in menuitems" :key="i">
        <v-list-item-title>
          <router-link :key="i" :to="{ name: item }">
            <span>{{ item }}</span>
          </router-link>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'BarsMenu',
  props: ['display', 'menuitems', 'color']
}
</script>

<style lang="sass" scoped>

#navcontainer > div.v-menu.v-menu--attached > div > div
  padding-top: 1.2rem
  padding-bottom: 1.5rem

a:link
  color: $darklink
  text-decoration: none
  font-size: 2rem
  font-weight: 500
  padding: 1rem
  margin-bottom: 1rem

a:visited
  color: $darklink

a:hover
  color: $darklink

a:active
  color: $darklink
</style>
