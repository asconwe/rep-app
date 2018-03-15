import { storiesOf } from '@storybook/vue';

import AppStyle from '@/AppStyle';
import ChatContainer from '@/components/chat/ChatContainer';

storiesOf('chat/ChatContainer', module)
  .add('story as a component', () => ({
    components: { ChatContainer, AppStyle },
    template: `
      <app-style>
        <chat-container socketUrl="https://localhost:3000" name="August Conwell"/>
      </app-style>
    `,
  }));
