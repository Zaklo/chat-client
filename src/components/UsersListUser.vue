<template>
  <li>{{ user.name }}</li>
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
