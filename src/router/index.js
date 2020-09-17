import Vue from 'vue';
import VueRouter from 'vue-router';
import Chat from '../views/Chat.vue';
import Login from '../views/Login.vue';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Chat',
    component: Chat,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/logout',
    beforeEnter() {
      store.logout();
    },
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some((record) => record.meta.requireAuth);
  if (requireAuth && !store.$data.isRegistered) {
    next('/login');
  } else {
    next();
  }
});

export default router;
