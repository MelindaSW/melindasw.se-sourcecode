<template>
  <v-menu
    v-if="showBars"
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
        <v-list-item-title
          ><router-link :key="i" :to="{ name: item }">
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
  props: ['showBars', 'menuitems', 'color']
}
</script>

<style scoped>
#navcontainer > div.v-menu.v-menu--attached > div > div {
  padding-top: 1.2rem;
  padding-bottom: 1.5rem;
}

a:link {
  color: rgba(90, 129, 144, 0.788);
  text-decoration: none;
  font-size: 2rem;
  font-weight: 500;
  padding: 1rem;
  margin-bottom: 1rem;
}
a:visited {
  color: rgba(90, 129, 144, 0.788);
}
a:hover {
  color: rgba(90, 129, 144, 0.788);
}
a:active {
  color: rgba(90, 129, 144, 0.788);
}
</style>
