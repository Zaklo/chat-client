<template>
  <li>
    {{ user.username }}
  </li>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>