<template>
  <form @submit="handleSubmit">
    <h1>Register a new site</h1>
    <label for="name">Site Name</label>
    <input type="text" id="name" v-model="name" />
    <label for="address">Site Address</label>
    <input type="text" id="address" v-model="address" />
    <input type="submit" value="Register!" />
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      address: '',
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      axios(`${BASE_URL}/api/sites`, {
        method: 'POST',
        withCredentials: true,
        // eslint-disable-next-line
        data: this._data
      })
        .then((result) => {
          // eslint-disable-next-line
          console.log('result', result);
        })
        .catch((err) => {
          // eslint-disable-next-line
          console.log('err', err);
        });
    },
  },
};
</script>

<style>

</style>
