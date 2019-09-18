<template>
  <div>
    <p>
      {{ usersCount }}
    </p>
    <ul>
      <li v-for="(user, i) in users" :key="i">{{user}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
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