<template>
  <div>
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
    }
  },
  computed: {
    formattedTime () {
      return moment(this.message.created).format('hh[h] mm[m]')
    }
  }
}
</script>