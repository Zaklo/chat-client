<template>
  <div>
    <UsersList :users="store.users" :user="store.user"/>
    <MessagesList :messages="store.messages" :user="store.user"/>
    <MessageBox @messageSent="onMessageSent"/>
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
      store
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
    }
  }
}
</script>