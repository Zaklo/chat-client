import Vue from 'vue'
import router from './router'
import io from 'socket.io-client'

const socket = io('https://bddi-2019-chat.herokuapp.com/')

socket.on('connect', () => {
  const sessionUser = sessionStorage.getItem('user')

  if (sessionUser) {
    store.registerUser(JSON.parse(sessionUser).username)
  }

  socket.on('user registered', (user) => {
    store.user = user
    store.isRegistered = true
    sessionStorage.setItem('user', JSON.stringify(user))
  })
  socket.on('users update', ({ users }) => {
    store.users = users
  })
  socket.on('message new', ({ message, messages }) => {
    if (messages.length > store.messages.length) {
      store.messages = messages
    } else {
      store.messages.push(message)
    }
  })
  socket.on('messages update', ({ messages }) => {
    store.messages = messages
  })
  socket.on('command new', (msg) => {
    console.log('command new', msg)
  })
  socket.on('chat error', ({ code, message }) => {
    console.error(`[${code}] ${message}`)
  })
})

const store = new Vue({
  data: {
    user: {
      name: null,
      avatar: null
    },
    users: [],
    messages: [],
    isRegistered: false
  },
  watch: {
    isRegistered () {
      if (this.isRegistered) {
        router.push('/')
      } else {
        router.push('/login')
      }
    }
  },
  methods: {
    registerUser (name) {
      socket.emit('user register', {
        username: name,
        avatar: ''
      })
    },
    sendMessage (message) {
      socket.emit('message new', message)
    },
    logout () {
      sessionStorage.clear()
      socket.disconnect()
      router.push('/login')
    }
  }
})

export default store
