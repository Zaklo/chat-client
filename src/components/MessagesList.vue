<template>
  <ul>
    <MessagesListMessage v-for="(message, i) in messages" :message="message" :key="i" />
  </ul>
</template>

<script>
import MessagesListMessage from './MessagesListMessage'

export default {
  components: {
    MessagesListMessage
  },
  props: {
    messages: {
      type: Array,
      required: true
    }
  }
}
</script>