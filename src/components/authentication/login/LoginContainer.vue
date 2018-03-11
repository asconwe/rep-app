<template>
  <div>
    <ac-login :on-submit="handleSubmit" :status="loginState" :statusMessage="message"/>
  </div>
</template>

<script>
import { post } from 'axios';
import LoginVue from './Login';

export default {
  components: {
    'ac-login': LoginVue,
  },
  props: ['handleSuccess'],
  data() {
    return {
      loginState: '',
      message: '',
    };
  },
  beforeMount() {
    this.loginState = 'FRESH';
  },
  methods: {
    handleSubmit(data) {
      this.loginState = 'SUBMITTED';
      post('https://localhost:3000/auth/login', data)
        .then(({ response }) => {
          // eslint-disable-next-line
          console.log('===Success===\n', response);
          this.handleSuccess(response.data);
        })
        .catch(({ response }) => {
          // eslint-disable-next-line
          console.log('====Fail====\n', response);
          this.message = response.data.message;
          this.loginState = 'FAILED';
        });
    },
  },
};
</script>

<style>

</style>
