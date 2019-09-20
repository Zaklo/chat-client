<template>
  <li :class="{'is-filter-owner': isFilterOwner }" ref="li">
    {{ user.username }} <span v-if="user.typing">(typing)</span> ({{ user.emotion }})
  </li>
</template>

<script>
export default {
  watch: {
    'user.emotion'() {
      // animation
      console.log(this.$refs.li)
    }
  },
  props: {
    user: {
      type: Object,
      required: true
    },
    isFilterOwner: {
      type: Boolean
    }
  }
}
</script>

<style lang="stylus" scoped>
  span
    color lightgrey
    font-style italic
  .is-filter-owner
    font-weight bold
</style>