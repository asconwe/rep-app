<template>
  <form @submit="handleSubmit">
    <div v-if="status === 'FAILED'">{{statusMessage}}</div>
    <label for="email">Email</label>
    <input type="text" id="email" v-model="email">
    <label for="password">Password</label>
    <input type="password" id="password" v-model="password">
    <input type="submit" value="Login"/>
  </form>
</template>

<script>

export default {
  props: ['onSubmit', 'status', 'statusMessage'],
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.onSubmit({ email: this.email, password: this.password });
    },
  },
};
</script>

<style>

</style>
