import Vue from 'vue'
import router from './router'
import io from 'socket.io-client'
import parseCommand from './commands'

const EMOTIONS = ['happy', 'triste', 'wow', 'what', 'colere', 'dodo']

// const socket = io('http://localhost:3000')
const socket = io('https://bddi-2019-chat.herokuapp.com/')

socket.on('connect', () => {
  const sessionUser = sessionStorage.getItem('user')

  if (sessionUser) {
    store.registerUser(JSON.parse(sessionUser).username)
  }
})

socket.on('user registered', (user) => {
  store.user = user
  store.isRegistered = true
  sessionStorage.setItem('user', JSON.stringify(user))
})
socket.on('users update', ({ users, user, type }) => {
  if (user.username === store.user.username) {
    // First join we update all the users

    store.users = users

    console.log('updating users')
  } else {
    switch (type) {
      case 'join':
        store.users.push(user)
        break
      case 'left':
        const index = store.users.findIndex((storeUser) => storeUser.username === user.username)
        store.users.splice(index, 1)
        break
    }
  }
})
socket.on('message new', ({ message, messages }) => {
  if (messages.length > store.messages.length) {
    store.messages = messages
  } else {
    const user = store.users.find((u) => u.username === message.user.username)

    // Check if emotion
    const regex = /#(\w+)/
    const result = regex.exec(message.text)
    const emotion = result && result[1]

    // Add emotion to user
    if (EMOTIONS.indexOf(emotion) > -1) {
      Vue.set(user, 'emotion', emotion)
    }

    message.emotion = user.emotion

    store.messages.push(message)
  }
})
socket.on('messages update', ({ messages }) => {
  store.messages = messages
})
socket.on('command new', (msg) => {
  parseCommand(msg)
})
socket.on('user typing', (msg) => {
  store.users.forEach((user) => {
    if (user.username === msg.user.username) {
      Vue.set(user, 'typing', msg.typing)
    }
  })
})
socket.on('chat error', ({ code, message }) => {
  console.error(`[${code}] ${message}`)
})

function setRandomAvatar (user) {
  user.avatar = ''
}

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
    typing () {
      socket.emit('user typing')
    },
    logout () {
      sessionStorage.clear()
      socket.disconnect()
      router.push('/login')
    }
  }
})

export default store
