<template>
  <div>
    <ac-login :on-submit="handleSubmit" :status="loginState" :statusMessage="message"/>
  </div>
</template>

<script>
import axios from 'axios';
import LoginVue from '@/components/authentication/login/Login';

export default {
  components: {
    'ac-login': LoginVue,
  },
  props: {
    handleSuccess: {
      type: Function,
      required: true,
    },
  },
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
      axios({
        method: 'POST',
        url: `${BASE_URL}/auth/login`,
        data,
        xsrfCookieName: 'session',
        withCredentials: true,
      })
        .then((result) => {
          this.handleSuccess(result.data);
        })
        .catch(({ response }) => {
          this.message = response.data.message;
          this.loginState = 'FAILED';
        });
    },
  },
};
</script>

<style>

</style>
