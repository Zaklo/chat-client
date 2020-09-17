<template>
  <div ref="container">
    <div class="card card-tertiary">
      <div class="card-header">
        chatroom
        <img v-bind:src="img" height="30" class="floating-sm"/>
        <a href="/logout" class="btn btn-primary logout">X</a>
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
  </div>
</template>

<script>
import img from '@/assets/img/giphy.gif';
import CLICK from '@/assets/audio/pcmouseclick1.mp3';
import MessageBox from '../components/MessageBox.vue';
import MessagesList from '../components/MessagesList.vue';
import UsersList from '../components/UsersList.vue';
import store from '../store';

export default {
  data() {
    return {
      store,
      img,
    };
  },
  methods: {
    onSendMessage(text) {
      store.messageNew(text);
    },
    playSound() {
      console.log('window load event');
      const audio = new Audio(CLICK);
      audio.play();
    },
  },
  components: {
    MessageBox,
    MessagesList,
    UsersList,
  },
};
</script>
