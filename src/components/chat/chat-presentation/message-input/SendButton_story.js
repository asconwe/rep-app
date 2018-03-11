import { storiesOf } from '@storybook/vue';

import SendButton from '@/components/chat/chat-presentation/message-input/SendButton';

storiesOf('chat/chat-presentation/SendButton', module)
  .add('story as a component', () => ({
    components: { SendButton },
    template: '<send-button />',
  }));
