<template>
  <div>
    <UsersList/>
    <MessagesList :messages="messages"/>
    <MessageBox @messageSent="onMessageSent"/>
  </div>
</template>

<script>
import UsersList from '../components/UsersList.vue'
import MessagesList from '../components/MessagesList.vue'
import MessageBox from '../components/MessageBox.vue'

export default {
  data () {
    return {
      messages: []
    }
  },
  components: {
    UsersList,
    MessagesList,
    MessageBox
  },
  methods: {
    onMessageSent (message) {
      this.messages.push(message)
    }
  }
}
</script>