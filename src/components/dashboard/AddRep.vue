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
  props: {
    handleSuccess: {
      type: Function,
      required: true,
    },
    handleFailure: {
      type: Function,
      required: true,
    },
    siteId: {
      type: String,
      required: true,
    },
  },
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
      axios({
        url: `${BASE_URL}/api/invitation/${this.siteId}`,
        data: {
          firsName: this.first,
          lastName: this.last,
          email: this.email,
        },
        withCredentials: true,
        method: 'POST',
      })
        .then(response => this.handleSuccess(response))
        .catch(error => this.handleFailure(error));
    },
  },
};
</script>

<style>

</style>
