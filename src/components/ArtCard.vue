<template>
  <v-card outlined class="mx-auto" max-width="400">
    <v-img id="img" class="align-end" :src="getImgUrl(imgname)"> </v-img>

    <v-card-subtitle id="subtitle" class="pb-0"
      >{{ title }} <span id="sold" v-if="sold"> - SOLD</span>
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <p>Size: {{ size.width }}*{{ size.height }} cm</p>
      Mediums:
      <span v-for="(item, i) in mediums" :key="i">
        <span>{{ item }} | </span>
      </span>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ArtCard',
  props: ['imgname', 'mediums', 'size', 'sold', 'title'],
  methods: {
    getImgUrl(name) {
      var images = require.context('../assets/images/gallery', false, /\.jpg$/)
      return images('./' + name)
    }
  }
}
</script>

<style lang="sass" scoped>
#img
    border: 5px solid $darkborder
    margin: 15px

#subtitle
    font-weight: bold

#sold
    color: $primary
</style>
