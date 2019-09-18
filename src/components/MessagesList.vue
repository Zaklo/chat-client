<template>
  <ul>
    <MessagesListMessage 
      v-for="(message, i) in messages" 
      :message="message" 
      :key="i"
      :isOwner="isOwner(message.user.username)"/>
  </ul>
</template>

<script>
import MessagesListMessage from './MessagesListMessage'

export default {
  components: {
    MessagesListMessage
  },
  methods: {
    isOwner (username) {
      return this.user.username === username
    }
  },
  props: {
    messages: {
      type: Array,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  }
}
</script>