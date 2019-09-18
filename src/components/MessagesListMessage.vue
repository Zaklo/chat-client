<template>
  <div>
    (<em>{{ formattedTime }}</em>) {{ message.name }}: {{ message.content }}
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
      return moment(this.message.time).format('hh[h] mm[m]')
    }
  }
}
</script>