<template>
  <div>
    <form @submit.prevent="onFormSubmit">
      <input 
        type="text" 
        placeholder="Tape ton message ici"
        v-model="message">
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
      console.log('form submit')
      this.$emit('messageSent', this.message)
      this.message = ''
    }
  }
}
</script>