import Vue from 'vue';
import io from 'socket.io-client';
import win95 from '@/assets/audio/win95.mp3';
import router from './router';

const socket = io('https://bddi-2019-chat.herokuapp.com/');

const store = new Vue({
  data: {
    isRegistered: false,
    error: null,
    user: {},
    users: [],
    messages: [],
  },
  watch: {
    isRegistered(registered) {
      if (registered) {
        router.push('/');
      } else {
        router.push('/login');
      }
    },
  },
  methods: {
    registerListeners() {
      socket.on('connect', () => {
        const sessionUser = sessionStorage.getItem('user');

        if (sessionUser) {
          store.userRegister(JSON.parse(sessionUser).username);
        }
      });

      socket.on('disconnect', () => {
        this.isRegistered = false;
        this.user = {};
      });

      socket.on('users update', ({ users }) => {
        this.users = users;
      });

      socket.on('user typing', (user) => {
        console.log(user);
      });

      socket.on('user registered', (user) => {
        this.isRegistered = true;
        this.error = null;
        this.user = user;
        sessionStorage.setItem('user', JSON.stringify(user));
      });

      socket.on('messages update', ({ messages }) => {
        this.messages = messages;
      });

      socket.on('message new', ({ message }) => {
        this.messages.push(message);
      });

      socket.on('chat error', (error) => {
        this.$set(this, 'error', error);
        console.log('chat error', error.message);
      });
    },

    logout() {
      sessionStorage.clear();
      socket.disconnect();
      router.push('/login');
    },

    // API calls

    userRegister(username, avatar) {
      socket.emit('user register', { username, avatar });
      const audio = new Audio(win95);
      audio.play();
    },
    userTyping(username) {
      socket.emit('user typing', username);
    },
    messageNew(message) {
      socket.emit('message new', message);
    },
  },
  created() {
    this.registerListeners();
  },
});

export default store;
