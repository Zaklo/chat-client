<template>
  <div>
    <ul class="MessagesList">
      <MessagesListMessage 
        v-for="(message, i) in filteredMessages" 
        :message="message" 
        :key="i"
        :isOwner="isOwner(message.user.username)"/>
    </ul>
    <p v-if="typingUsers && typingUsers.length > 0">
      {{ typingUsersList }}
    </p>
  </div>
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
  watch: {
    messages () {
      this.$el.scrollTo({ top: this.$el.scrollHeight })
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
    },
    users: {
      type: Array,
      required: true
    },
    filter: {
      type: Object // User
    },
    typingUsers: {
      type: Array
    }
  },
  computed: {
    filteredMessages () {
      return this.filter ? this.messages.filter((message) => {
        return message.user.username === this.filter.username
      }) : this.messages
    },
    typingUsersList () {
      const usernames = this.typingUsers.map((user) => user.username)
      if (usernames) {
        return `${usernames.join(', ')} ${usernames.length > 1 ? 'are' : 'is'} typing`
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .MessagesList
    position absolute
    right 0
    top 0
    display block
    width 70vw
    height calc(100% - 100px)
    padding-right 40px
    overflow scroll
    margin 0
</style>