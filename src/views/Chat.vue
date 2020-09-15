<template>
  <div>
    <UsersList :users="users"/>
    <MessagesList :messages="messages"/>
    <MessageBox/>
  </div>
</template>

<script>
import MessageBox from '../components/MessageBox.vue';
import MessagesList from '../components/MessagesList.vue';
import UsersList from '../components/UsersList.vue';

export default {
  data() {
    return {
      users: [
        { name: 'Antoine' },
        { name: 'Antoine' },
        { name: 'Antoine' },
      ],
      messages: [
        { user: { name: 'Antoine' }, text: 'bonjour' },
        { user: { name: 'Antoine' }, text: 'bonjour toi' },
      ],
    };
  },
  components: {
    MessageBox,
    MessagesList,
    UsersList,
  },
};
</script>
