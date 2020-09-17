<template>
  <li style="margin-top: 20px">
    <img v-if="message.user.avatar && !isCurrentUser && message.user.avatar.startsWith('http')"
         v-bind:src="message.user.avatar" class="user-avatar"/>
    <div v-if="isCurrentUser" class="current-user-message">{{ message.user.username }}
      <img
          v-if="message.user.avatar && isCurrentUser"
          v-bind:src="message.user.avatar"
          class="user-avatar"
          style="float: right"/>
      x
    </div>
    <em v-else> {{ message.user.username }}</em>

    <img height="200" v-if="message.text.endsWith('.gif')" v-bind:src="message.text">

    <p
        v-if="isCurrentUser && !message.text.endsWith('.gif')"
        class="bubble you">{{ message.text }}
    </p>
    <p
        v-else-if="!message.text.endsWith('.gif')"
        class="bubble me">{{ message.text }}
    </p>
  </li>
</template>

<script>

import store from '../store'

export default {
  computed: {
    isCurrentUser () {
      return this.message.user.username
          === store.$data.user.username
    },
  },
  props: {
    message: {
      type: Object,
      require: true,
    },
  },
}
</script>
