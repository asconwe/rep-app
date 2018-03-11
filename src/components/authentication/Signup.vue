<template>
  <form @submit.prevent="signup">
    <input type="text" v-model="email">
    <input type="password" v-model="password">
    <input type="submit" value="Sign up!">
  </form>
</template>

<script>
export default {
  props: ['targetUrl'],
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    signup () {
      
    }
  }
}
</script>

<style>

</style>
