<template>
  <v-card @click="$emit('open-modal')" tile flat class="card rounded-0">
    <div>
      <v-img class="img align-end" :src="getImgUrl(imgname)"></v-img>
    </div>
    <div class="text">
      <v-card-subtitle class="title subtitle pb-0"
        >{{ title }} <span class="sold" v-if="sold"> - SOLD</span>
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <p>Size: {{ size.width }} X {{ size.height }} cm</p>
        Mediums:
        <span v-for="(item, i) in mediums" :key="i">
          <span>{{ item }} | </span>
        </span>
        <p>
          {{ forsale ? `For sale - email for price` : 'Not for sale' }}
        </p>
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'ArtCard',
  props: ['forsale', 'imgname', 'mediums', 'size', 'sold', 'title'],
  methods: {
    getImgUrl(name) {
      var images = require.context('../assets/images/gallery', false, /\.jpeg$/)
      return images('./' + name)
    }
  }
}
</script>

<style lang="sass" scoped>
.card
    height: fit-content
    // margin: auto

.img
    border: 3px solid $darkborder

.subtitle
    font-size: 1.2rem
    font-weight: bolder

.sold
    color: $primary

.text
    background-color: $artcardprimary
    font-weight: bold
    margin-top: 1.5rem
</style>
