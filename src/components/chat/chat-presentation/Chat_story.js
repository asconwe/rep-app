import { storiesOf } from '@storybook/vue';

import AppStyle from '@/AppStyle';
import Chat from '@/components/chat/chat-presentation/Chat';

storiesOf('chat/Chat', module)
  .add('Sample data', () => ({
    components: { AppStyle, Chat },
    data() {
      return {
        message: '',
        messages: [
          {
            message: 'hey',
            received: false,
          },
          {
            message: 'sup',
            received: true,
          },
        ],
      };
    },
    methods: {
      sendMessage(msg) {
        // eslint-disable-next-line
        console.log('sendMessage', msg);
      },
    },
    template: `
      <AppStyle>
        <Chat :sendMessage="sendMessage" :messages="messages">
          <div v-contenteditable="message" @keydown.enter.exact.prevent="sendMessage" class="input-box"/>
        </Chat>
      </AppStyle>
    `,
  }));
