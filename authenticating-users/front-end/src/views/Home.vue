<template>
<div>
  <div>
    <Admin v-if="user && user.role === 'admin'" />
    <MyTickets v-else-if="user" />
    <HomePage v-else />
  </div>
</div>
</template>

<script>
import axios from 'axios';
import Admin from '@/components/Admin.vue'
import MyTickets from '@/components/MyTickets.vue'
import HomePage from '@/components/HomePage.vue'

export default {
  name: 'home',
  components: {
    Admin,
    MyTickets,
    HomePage
  },
  async created() {
    try {
      let response = await axios.get('/api/users');
      this.$root.$data.user = response.data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  }
}
</script>
