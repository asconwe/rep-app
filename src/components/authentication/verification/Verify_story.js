import { storiesOf } from '@storybook/vue';
import AppStyle from '@/AppStyle';
import VerifyContainer from '@/components/authentication/verification/VerifyContainer';

storiesOf('authentication/Verify', module)
  .add(' story as a component', () => ({
    components: { VerifyContainer, AppStyle },
    template: `
      <app-style>
         <VerifyContainer v-if="ready" :user-id="id" />
         <input type="text" v-model="id" />
         <button @click="() => ready = !ready">toggle</button>
      </app-style>
     `,
    data() {
      return {
        id: '',
        ready: false,
      };
    },
  }));
