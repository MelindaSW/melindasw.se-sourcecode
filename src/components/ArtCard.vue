<template>
  <v-card outlined class="card rounded-0" max-width="400">
    <div>
      <v-img class="img align-end" :src="getImgUrl(imgname)"></v-img>
    </div>
    <div class="text">
      <v-card-subtitle class="title subtitle pb-0"
        >{{ title }} <span class="sold" v-if="sold"> - SOLD</span>
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <p>Size: {{ size.width }} X {{ size.height }}</p>
        Mediums:
        <span v-for="(item, i) in mediums" :key="i">
          <span>{{ item }} | </span>
        </span>
      </v-card-text>
    </div>
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
.card
    height: fit-content

.img
    border: 3px solid $darkborder

.subtitle
    font-size: 1.2rem
    font-weight: bold

.sold
    color: $primary

.text
    background-color: $primaryopaque
    margin-top: 3rem
    margin-bottom: 3rem
</style>
