<template>
  <v-container fluid>
    <p class="description">
      This is a random haiku generator. <br />Submit a minimum of 25 characters
      and maximum 3000 to generate a randomized haiku based on the provided
      text. The somewhat reliable syllable counter works with swedish and
      english syllable rules.
    </p>
    <v-textarea
      solo
      counter
      label="Paste or write your text here"
      :rules="rules"
      v-model="value"
    ></v-textarea>
    <v-btn
      color="secondary"
      block
      :disabled="value.length <= minimum || value.length >= maximum"
      depressed
      elevation="2"
      medium
      text
      @click="onSubmit"
      >Submit</v-btn
    >
    <div class="haiku">
      <p v-for="(row, i) in haiku" :key="i">{{ row }}</p>
    </div>
  </v-container>
</template>

<script>
const min = 25
const max = 6000
export default {
  data: () => ({
    minimum: min,
    maximum: max,
    rules: [
      (v) => v.length <= max || `Max ${max} characters`,
      (v) => v.length >= min || `Minimum ${min} characters`
    ],
    value: '',
    haiku: [' ', ' ', ' ']
  }),
  methods: {
    async onSubmit() {
      const url = 'http://localhost:8080/haiku'
      const data = JSON.stringify({ text: this.value })
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: data
      }).catch((err) => console.log(err))

      const haikuresp = await response.json()
      this.haiku = haikuresp.haiku
    }
  },
  name: 'HaikuCreator'
}
</script>

<style lang="sass" scoped>
.container
    background-color: rgba(237, 230, 228, 1)
    border-radius: 20px
    margin-top: 4rem
    margin-bottom: 3rem

.description
    padding: 1rem
    background-color: white
    border: 5px solid rgba(173, 146, 139, 0.6)
    border-radius: 5px
    font-size: 1rem
    margin-top: 2rem
    margin-bottom: 2rem

.v-btn
    background-color: rgba(173, 146, 139, 1)
    color: white
    margin-bottom: 2rem

.haiku
    background-color: white
    border: 5px solid rgba(173, 146, 139, 0.6)
    border-radius: 5px
    text-align: left
    padding: 2rem
    font-family: 'Kaushan Script', cursive
    margin-bottom: 3rem

@media screen and (min-width: 560px)
    .container
        width: 560px
</style>
