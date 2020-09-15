<template>
  <ul>
    <MessagesListMesssage
        v-for="(message, i) in messages"
        :key="i"
        :message="message"
    />
  </ul>
</template>

<script>
import MessagesListMesssage from './MessagesListMessage.vue';

export default {
  props: {
    messages: {
      type: Array,
    },
  },
  components: {
    MessagesListMesssage,
  },
};
</script>
