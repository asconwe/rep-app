<template>
  <button @click="logout">Logout</button>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    handleSuccess: {
      type: Function,
      required: true,
    },
    handleFailure: {
      type: Function,
      required: true,
    },
  },
  methods: {
    logout() {
      axios({
        withCredentials: true,
        method: 'GET',
        url: `${BASE_URL}/auth/logout`,
      })
        .then(() => this.handleSuccess())
        .catch(err => this.handleFailure(err));
    },
  },
};
</script>

<style>

</style>
