<template>
  <div class="MessageBox">
    <form @submit.prevent="onFormSubmit">
      <input 
        type="text" 
        placeholder="Tape ton message ici"
        v-model="message"
        @keydown="onKeydown">
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    onFormSubmit (e) {
      this.$emit('messageSent', this.message)
      this.message = ''
    },
    onKeydown (e) {
      this.$emit('typing')
    }
  }
}
</script>

<style lang="stylus" scoped>
  div
    position fixed
    bottom 0
    right 0
    height 100px
    width 70vw
    z-index 10
    background white
    padding 0 40px

  input
    width calc(100% - 30px)
    height 60px
    border 3px solid black
    font-size 20px
    padding 10px
    border-radius 10px
    outline none
</style>