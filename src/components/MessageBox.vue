<template>
  <div>
    <form @submit.prevent="onSubmit()" class="message-box-form">
      <input v-model="message" type="text" placeholder="Entre ton message ici" class="form-control w-75">
      <button class="btn btn-primary">envoyer</button>
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
      this.message = '';
    },
  },
};
</script>
