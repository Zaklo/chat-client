<template>
  <li class="user-list-user">
    <span v-if="user.avatar && user.avatar.startsWith('http')">
      <img v-bind:src="user.avatar" class="user-avatar"/>
    </span>
    {{ user.username }}
  </li>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      require: true,
    },
  },
};
</script>
