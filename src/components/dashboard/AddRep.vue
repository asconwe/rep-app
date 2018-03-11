<template>
  <form @submit="handleSubmit">
    <label for="first">First Name:</label>
    <input type="text" id="first" v-model="first" />
    <label for="last">Last Name:</label>
    <input type="text" id="last" v-model="last" />
    <label for="email">Email:</label>
    <input type="text" id="email" v-model="email" />
    <input type="submit">
  </form>
</template>

<script>
import axios from 'axios';

export default {
  props: ['site_id'],
  data() {
    return {
      first: '',
      last: '',
      email: '',
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      axios.post(`https://localhost:3000/api/invitation/${this.site_id}`, {
        firsName: this.first,
        lastName: this.last,
        email: this.email,
      })
      // eslint-disable-next-line
        .then(response => console.log(response))
        // eslint-disable-next-line
        .catch(error => console.log(error));
    },
  },
};
</script>

<style>

</style>
