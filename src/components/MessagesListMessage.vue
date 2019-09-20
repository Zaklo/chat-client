<template>
  <div :class="{ 'is-owner': isOwner }">
    (<em>{{ formattedTime }}</em>) {{ message.user.username }}: {{ message.text }} ({{ message.emotion }})
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    message: {
      type: Object,
      required: true
    },
    isOwner: {
      type: Boolean
    }
  },
  computed: {
    formattedTime () {
      return moment(this.message.created).format('hh[h] mm[m]')
    }
  }
}
</script>

<style lang="stylus" scoped>
  div
    background: green
    padding: 20px
    text-align left
    border-radius 10px
    margin-bottom 10px
  .is-owner
    background: pink
</style>