<template>
  <div>
    <p>Please enter your name:</p>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="name" placeholder="Your name">
      <button type="submit">Ok</button>
    </form>
  </div>
</template>

<script>
import store from '../store'

export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    onSubmit () {
      if (this.name.length > 0) {
        store.registerUser(this.name)
      }
    }
  }
}
</script>