<template>
  <div>
    <UsersList 
      :users="store.users" 
      :user="store.user"
      :filter="filter"
      @filterSelected="onFilterSelected"/>
    <MessagesList 
      :messages="store.messages" 
      :user="store.user"
      :users="store.users"
      :filter="filter"
      :typingUsers="typingUsers"/>
    <MessageBox 
      @messageSent="onMessageSent"
      @typing="onTyping"/>
  </div>
</template>

<script>
import UsersList from '../components/UsersList.vue'
import MessagesList from '../components/MessagesList.vue'
import MessageBox from '../components/MessageBox.vue'

import store from '../store'

export default {
  data () {
    return {
      store,
      filter: null
    }
  },
  components: {
    UsersList,
    MessagesList,
    MessageBox
  },
  methods: {
    onMessageSent (content) {
      store.sendMessage(content)
    },
    onTyping () {
      store.typing()
    },
    onFilterSelected (user) {
      const isCurrentUser = this.filter && this.filter.username === user.username
      this.filter = isCurrentUser ? null : user
    }
  },
  computed: {
    typingUsers () {
      return store.users.filter((user) => user.typing)
    }
  }
}
</script>