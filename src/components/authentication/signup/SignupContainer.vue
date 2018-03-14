<template>
  <div>
    <ac-signup :on-submit="handleSubmit" :status="signupState" :statusMessage="message"/>
  </div>
</template>

<script>
import { post } from 'axios';
import Signup from '@/components/authentication/signup/Signup';

export default {
  components: {
    'ac-signup': Signup,
  },
  props: ['handleSuccess'],
  data() {
    return {
      signupState: '',
      message: '',
    };
  },
  beforeMount() {
    this.signupState = 'FRESH';
  },
  methods: {
    handleSubmit(formData) {
      this.signupState = 'SUBMITTED';
      post(`${BASE_URL}/auth/signup`, formData)
        .then(({ data }) => {
          // eslint-disable-next-line
          console.log('===Success===\n', data);
          this.handleSuccess(data);
        })
        .catch(({ response }) => {
          // eslint-disable-next-line
          console.log('====Fail====\n', response);
          if (response.status === 500) {
            this.message = 'There was an error on the server. Please try again later.';
            return;
          }
          const { email, password, other } = response.data.errors;
          this.message = `${email || ''} ${password || ''} ${other || ''}`;
          this.signupState = 'FAILED';
        });
    },
  },
};
</script>

<style>

</style>
