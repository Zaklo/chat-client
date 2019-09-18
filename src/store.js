import Vue from 'vue'
import router from './router'

const store = new Vue({
  data: {
    user: {
      name: null,
      avatar: null
    },
    users: [{
      name: 'Booba'
    }, {
      name: 'Nekfeu'
    }],
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
      this.user.name = name
      this.isRegistered = true
    }
  }
})

export default store
