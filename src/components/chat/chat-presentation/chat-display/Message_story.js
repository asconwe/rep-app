import { storiesOf } from '@storybook/vue';

import AppStyle from '@/AppStyle';
import Message from '@/components/chat/chat-presentation/chat-display/Message';

storiesOf('chat/chat-presentation/Message', module)
  .add('Received', () => ({
    components: { Message, AppStyle },
    template: `
        <app-style>
            <Message message="hello" :received="true"/>
        </app-style>        
    `,
  }))
  .add('Sent', () => ({
    components: { Message, AppStyle },
    template: `
        <app-style>
            <Message message="This is a sent message" :received="false"/>
        </app-style>        
    `,
  }));
