<template>
  <div class="MessagesList">
    <ul ref="list" @mousewheel="onScroll" style="overflow: scroll; height: 80vh">
      <MessagesListMessage
          v-for="(message, i) in messages"
          :key="i"
          :message="message"/>
    </ul>
  </div>
</template>

<script>
import MessagesListMessage from '@/components/MessagesListMessage.vue';

export default {
  props: {
    messages: {
      type: Array,
    },
  },
  data() {
    return {
      userControlScroll: false,
    };
  },
  watch: {
    messages() {
      this.scrollDown();
    },
  },
  methods: {
    scrollDown() {
      const { list } = this.$refs;
      this.$nextTick(() => {
        if (!this.userControlScroll) {
          list.scrollTop = list.scrollHeight;
        }
      });
    },
    onScroll() {
      const { list } = this.$refs;
      this.userControlScroll = list.scrollTop + list.clientHeight < list.scrollHeight;
    },
  },
  components: {
    MessagesListMessage,
  },
};
</script>
