<template>
  <button @click="logout">Logout</button>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    logout() {
      axios({
        withCredentials: true,
        method: 'GET',
        url: `${BASE_URL}/auth/logout`,
      })
      // eslint-disable-next-line
        .then(res => console.log(res))
        // eslint-disable-next-line
        .catch(err => console.log(err));
    },
  },
};
</script>

<style>

</style>
