<template>
  <div>
    <ac-verified v-if="verified" />
    <ac-waiting v-if="waiting" />
    <ac-verification-error v-if="error" />
  </div>
</template>

<script>
import axios from 'axios';
import WaitingVue from '@/components/authentication/verification/Waiting';
import VerifiedVue from '@/components/authentication/verification/Verified';
import VerificationErrorVue from '@/components/authentication/verification/VerificationError';

export default {
  props: ['userId'],
  components: {
    'ac-waiting': WaitingVue,
    'ac-verified': VerifiedVue,
    'ac-verification-error': VerificationErrorVue,
  },
  data() {
    return {
      verified: false,
      waiting: true,
      error: false,
    };
  },
  mounted() {
    axios.post(`${BASE_URL}/auth/verification`, {
      user_id: this.userId,
    })
      .then(() => {
        this.waiting = false;
        this.verified = true;
      })
      .catch(() => {
        this.waiting = false;
        this.error = true;
      });
  },
};
</script>

<style>

</style>
