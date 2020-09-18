<template>
  <div v-bind:style="{backgroundImage: bg}">
    <div class="login">
      <div class="error" v-if="error">
        <div class="card">ezfazfe</div>
      </div>
      <div class="card card-tertiary">
        <div class="card-header">
          <p class="title">Veuillez entrer un nom</p>
        </div>
        <div class="card-body">
          <img v-bind:src="bg" style="display:block;
    margin:auto; height: 100px">
          <form @submit.prevent="onSubmit" style="display: grid">
            <p class="card-text"> Username :</p>
            <input type="text" v-model="username" class="input-username"/>
            <p class="card-text"> Avatar URL :</p>
            <input type="text" v-model="avatar" class="input-username"/>
            <a @click="toggleComponentHelp" class="help-link">help</a>
            <HelpCard v-if="showComponentHelp"/>
            <button class="btn btn-primary">Log in</button>
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
import bg from '@/assets/img/logoIdMeme.gif';
import HelpCard from '@/components/HelpCard.vue';

export default {
  components: { HelpCard },
  data() {
    return {
      username: '',
      avatar: '',
      error: store.error,
      img,
      bg,
      showComponentHelp: false,
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
    toggleComponentHelp() {
      this.showComponentHelp = !this.showComponentHelp;
    },
  },
};

</script>

<style lang="scss">
@import "../assets/scss/login";

html{
  background: deeppink;
  background-size: auto;
  background-position: center;
}
</style>
