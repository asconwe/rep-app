<template>
  <form @submit="handleSubmit">
    <h1>Sign up!</h1>
    <div v-if="status === 'FAILED'">{{statusMessage}}</div>
    <label for="firstName">First Name</label>
    <input type="text" id="firstName" v-model="firstName" />
    <label for="lastName">Last Name</label>
    <input type="text" id="lastName" v-model="lastName" />
    <label for="email">Email</label>
    <input type="text" id="email" v-model="email" />
    <label for="password">Password</label>
    <input type="password" id="password" v-model="password" />
    <input type="submit" value="Login"/>
  </form>
</template>

<script>

export default {
  props: ['onSubmit', 'status', 'statusMessage'],
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      // eslint-disable-next-line
      this.onSubmit(this._data);
    },
  },
};
</script>

<style>

</style>
