import { storiesOf } from '@storybook/vue';
import AppStyle from '@/AppStyle';
import io from 'socket.io-client';

const SITE_KEY = '5aa872cad43ff303b47baa73';

storiesOf('mock/ClientConnection', module)
  .add('Mock connection', () => ({
    components: { AppStyle },
    template: `
      <app-style>
         <div>TESTING SOCKET.IO AT ${BASE_URL}/${SITE_KEY}</div>
      </app-style>
     `,
    data() {
      return {
        socket: io(`${BASE_URL}/${SITE_KEY}`),
        messageInterval: undefined,
      };
    },
    mounted() {
      this.messageInterval = setInterval(() => {
        this.socket.emit();
      }, 2000);
    },
  }));
