import { storiesOf } from '@storybook/vue';
import AppStyle from '@/AppStyle';
import io from 'socket.io-client';

const SITE_KEY = '5aa872cad43ff303b47baa73';

storiesOf('mock/ClientConnection', module)
  .add('Mock connection', () => ({
    components: { AppStyle },
    template: `
      <app-style>
         <div>TESTING SOCKET.IO AT: ${BASE_URL}/${SITE_KEY}</div>
         <div v-for="(message, index) in messages" :key="index">{{message}}</div>
      </app-style>
     `,
    data() {
      return {
        socket: io(`${BASE_URL}/${SITE_KEY}`),
        messageInterval: undefined,
        messages: ['test'],
      };
    },
    mounted() {
      this.messageInterval = setInterval(() => {
        this.socket.emit('test message', 'hi!');
      }, 2000);
      this.socket.on('chat message', (socket) => {
        // eslint-disable-next-line
        console.log('chat message', socket);
        this.messages = this.messages.concat(`msg: ${socket}`);
      });
      this.socket.on('admin connection', (socket) => {
        // eslint-disable-next-line
        console.log('message', socket);
        this.messages = this.messages.concat(`admin connection: ${socket}`);
      });
      this.socket.on('end user connection', (socket) => {
        // eslint-disable-next-line
        console.log('message', socket);
        this.messages = this.messages.concat('end user connection');
      });
    },
    beforeDestroy() {
      clearInterval(this.messageInterval);
      this.socket.close();
    },
  }));
