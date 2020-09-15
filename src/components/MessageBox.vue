<template>
  <div>
    <form @submit.prevent="onSubmit()">
      <input v-model="message" type="text" placeholder="Entre ton message ici">
      <button>envoyer</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    };
  },
  methods: {
    onSubmit() {
      this.$emit('sendMessage', this.message);
    },
  },
};
</script>
