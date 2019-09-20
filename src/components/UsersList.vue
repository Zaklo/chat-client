<template>
  <div>
    <p>Connected as: <strong>{{ user.username }}</strong></p>
    <p>
      <strong>{{this.users.length}}</strong> users connected`
    </p>
    <ul>
      <UsersListUser 
        v-for="(user, i) in users" 
        :user="user" 
        :key="i"
        :isFilterOwner="filter && filter.username === user.username"
        @click.native="onUserClick(user)" />
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
    },
    filter: {
      type: Object
    }
  },
  methods: {
    onUserClick(user) {
      this.$emit('filterSelected', user)
    }
  }
}
</script>

<style lang="stylus" scoped>
  div
    position fixed 
    top 100px
    left 40px
    text-align left

  ul
    list-style none
</style>