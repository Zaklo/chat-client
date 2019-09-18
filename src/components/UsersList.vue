<template>
  <div>
    <p>Connected as: {{ user.name }}</p>
    <p>
      {{ usersCount }}
    </p>
    <ul>
      <UsersListUser v-for="(user, i) in users" :user="user" :key="i" />
    </ul>
  </div>
</template>

<script>
import UsersListUser from './UsersListUser'

export default {
  components: {
    UsersListUser
  },
  props: {
    user: {
      type: Object,
      required: true
    },
    users: {
      type: Array,
      required: true
    }
  },
  computed: {
    usersCount () {
      return `${this.users.length} users connected`
    }
  }
}
</script>