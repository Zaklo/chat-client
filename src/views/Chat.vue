<template>
  <div ref="container">
    <div class="card card-tertiary">
      <div class="card-header">
        chatroom
        <img v-bind:src="img" height="30" class="floating-sm"/>
        <a class="btn btn-primary logout" @click="toggleComponentError" v-on:click="addComponent">X</a>
      </div>
      <div class="wrapper-global">
        <div class="card">
          <UsersList :users="store.users" class="user-list"/>
        </div>
        <div>
          <div class="card bg-white">
            <MessagesList :messages="store.messages" class="messages-list"/>
          </div>
          <MessageBox @sendMessage="onSendMessage" class="message-box"/>
        </div>
      </div>
    </div>
    <div v-for="index in count" :key="index">
      <AlertError v-if="showComponentErrors"
                  :style="{
                  marginLeft: Math.floor(Math.random() * 1000) + 'px',
                  marginTop: Math.floor(Math.random() * 1000) + 'px'}"
      />
    </div>

  </div>
</template>

<script>
import img from '@/assets/img/giphy.gif';
import CLICK from '@/assets/audio/pcmouseclick1.mp3';
import AlertError from '@/components/AlertError.vue';
import MessageBox from '../components/MessageBox.vue';
import MessagesList from '../components/MessagesList.vue';
import UsersList from '../components/UsersList.vue';
import store from '../store';

export default {
  data() {
    return {
      store,
      showComponentErrors: false,
      img,
      count: 1,
    };
  },
  methods: {
    onSendMessage(text) {
      store.messageNew(text);
    },
    toggleComponentError() {
      this.showComponentErrors = !this.showComponentErrors;
    },
    addComponent() {
      setInterval(() => {
        for (let i = 0; i < 1; i += 40) {
          this.count += 1;
        }
      }, 800);
    },
    playSound() {
      const audio = new Audio(CLICK);
      audio.play();
    },
  },
  components: {
    MessageBox,
    MessagesList,
    UsersList,
    AlertError,
  },
};
</script>
