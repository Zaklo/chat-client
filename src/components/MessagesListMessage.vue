<template>
  <li>{{ message.user.name }}: {{ message.text }}</li>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      require: true,
    },
  },
};
</script>
