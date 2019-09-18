<template>
  <div :class="{ 'is-owner': isOwner }">
    (<em>{{ formattedTime }}</em>) {{ message.user.username }}: {{ message.text }}
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
  .is-owner
    background: pink
</style>