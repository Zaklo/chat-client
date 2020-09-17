<template>
  <div>
    <div class="login">
      <div class="error" v-if="error">
        <div class="card">ezfazfe</div>
      </div>
      <div class="card card-tertiary">
        <div class="card-header">
          <p class="title">Veuillez entrer un nom</p>
        </div>
        <div class="card-body">
          <form @submit.prevent="onSubmit">
            <p class="card-text"> Nom d'utilisateur :</p>
            <input type="text" v-model="username" class="input-username"/>
            <p class="card-text"> URL de l'avatar :</p>
            <input type="text" v-model="avatar" class="input-username"/>
            <button class="btn btn-primary">Se connecter</button>
          </form>
        </div>
      </div>
    </div>
    <footer>created with <img v-bind:src="img" height="20"> by Margaux & Antoine</footer>
  </div>
</template>

<script>
import store from '@/store';
import img from '@/assets/img/hhh.gif';
import win95 from '@/assets/audio/win95.mp3';

export default {

  data() {
    return {
      username: '',
      avatar: '',
      error: store.error,
      img,
    };
  },
  methods: {
    onSubmit() {
      store.userRegister(this.username, this.avatar);
      this.username = '';
      this.avatar = '';
    },
    playSound() {
      console.log('window load event');
      const audio = new Audio(win95);
      audio.play();
    },
  },
};

</script>

<style lang="scss">
@import "../assets/scss/login";
</style>
