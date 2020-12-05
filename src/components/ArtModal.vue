<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <img :src="image" alt="Larger image" />
        </div>
        <div class="buttons">
          <v-btn
            class="mx-2"
            @click="$emit('previous')"
            fab
            small
            color="primary"
            ><v-icon> mdi-arrow-left </v-icon>
          </v-btn>
          <v-btn
            class="mx-2"
            @click="$emit('close-modal')"
            fab
            medium
            color="primary"
            ><v-icon large> mdi-close </v-icon>
          </v-btn>
          <v-btn class="mx-2" @click="$emit('next')" fab small color="primary"
            ><v-icon> mdi-arrow-right </v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    name: 'ArtModal'
  }),
  props: ['image']
}
</script>

<style lang="sass" scoped>
.modal-mask
  position: fixed
  z-index: 9998
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, 0.3)
  display: table
  transition: opacity 0.3s ease
  overflow: auto

.modal-wrapper
  display: table-cell
  vertical-align: middle

.modal-container
  width: 550px
  margin: 0px auto
  padding: 15px 15px
  background-color: #fff
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.33)
  transition: all 0.3s ease
  font-family: Helvetica, Arial, sans-serif

.modal-body
  margin: 20px 0

img
    width: 100%

.buttons
  text-align: center
  z-index: 1


  .mx-2
    margin: 10px
    color: $primary

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 */

.modal-enter
  opacity: 0

.modal-leave-active
  opacity: 0

.modal-enter .modal-container,
.modal-leave-active .modal-container
  -webkit-transform: scale(0.9)
  transform: scale(0.9)
</style>
